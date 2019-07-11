const request = require("./await-request");
// const grequest = require("./await-request");
const GraphQLClient = require('graphql-request').GraphQLClient;
const config = require("./config.json");
const fs = require('fs');
const moment = require('moment');
const http = require('http');

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const FLUTTER_ARSENAL_GITHUB_PATH = "karx/FlutterArsenal";

let headers = {
    'Authorization': 'token ' + config.github_token,
    'User-Agent': 'flutterArsenal-cli'
}
//  console.log(JSON.parse(dataToFetch));
github_graph_url = "https://api.github.com/graphql";

const client = new GraphQLClient(github_graph_url, {
    headers: headers
})

var allRepos_test = ["VictorRancesCode/flutter_ibm_watson"];


// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))

// Route that receives a POST request to /sms
app.post('/issueNew', function (req, res) {
    const payload = req.body.payload
    const payloadJson = JSON.parse(payload);
    //   console.log(req);
    console.log(JSON.parse(payload)["action"]);
    if (payloadJson.action === "opened") {
        if (checkNewIssueIsProjectRequest(payloadJson)) {
            console.log("This is an issue to trigger project addition");
            parseIssueAndProcessProjectRequest(payloadJson);
        } else if (checkNewIssueIsEventRequest(payloadJson)){
            console.log("Seems like a event issue");
            parseIssueAndProcessProjectRequest(payloadJson);
        }
    } else if (payloadJson.action === "labeled") {
        if (checkNewIssueIsProjectRequest(payloadJson) && checkNewIssueIsApproved(payloadJson)) {
            console.log("This is going to merge now ");
            parseIssueAndCommit(payloadJson);
        }
    }
    res.set('Content-Type', 'text/plain')
    res.send(`You sent: ${payload} to Express`)
})

// Tell our app to listen on port 3000
app.listen(3148, function (err) {
    if (err) {
        throw err
    }
    console.log('Server started on port 3148')
})
async function getNewRepo(user, repo) {
    var dataToFetch =
        `{
    repository(owner: "${user}", name: "${repo}") {
      name
      description
      createdAt
      updatedAt
      licenseInfo {
        name
        url
      }
      repositoryTopics(last: 5) {
        nodes {
          topic {
            name
          }
        }
      }
      nameWithOwner
      owner {
        avatarUrl
        login
      }
      mentionableUsers(first: 5) {
        totalCount
        nodes {
          name
          avatarUrl
          login
        }
      }
    }
  }`;

    try {
        var data = await client.request(dataToFetch);
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
    return data;
}


async function pubToFile(data, tag, excerpt) {
    if (!data) {
        return;
    }
    console.log("Done");
    // console.log(data);
    var md = '---\n';
    md += addField('title', data.repository.name);
    md += addField('name', data.repository.name);
    md += addField('category', "Free");
    md += addField('tag', data.repository.repositoryTopics.nodes.length > 0 ? data.repository.repositoryTopics.nodes[0].topic.name : '""');
    md += addField('excerpt', '"' + data.repository.description.split('"').join('\'') + '"');
    md += addField('github', `https://github.com/${data.repository.nameWithOwner}`);
    md += addField('license', {
        "name": data.repository.licenseInfo.name,
        "url": data.repository.licenseInfo.url,
    });
    md += addField('rating', "5");
    md += addField('version', "NA");
    // md += addField('last_updated', moment(data.repository.updatedAt).format("MMM DD, YYYY"));
    md += addField('last_updated', moment(data.repository.updatedAt).format("MMM DD, YYYY"));
    md += addField('owner', {
        "profile_image": data.repository.owner.avatarUrl,
        "name": data.repository.owner.login,
        "url": `https://github.com/${data.repository.owner.login}`
    });
    md += addField('contributors', data.repository.mentionableUsers.nodes.map((contributor) => {
        return {
            "image": contributor.avatarUrl,
            "url": "https://github.com/" + contributor.login
        }
    }));

    md += addField('registered_by', {
        "image": "https://avatars3.githubusercontent.com/u/7826138?s=460&v=4",
        "url": "https://github.com/karx",
        "on_date": "July 3, 2019"
    });

    md += addField('layout', 'fa_project');


    md += '---';
    md += '\n';

    md += await getReadmeFileFromGithub(data.repository.nameWithOwner);
    console.log('printing');

    // fs.writeFileSync(`./output/fa_${data.repository.name}.md`, md)
    var base64md = Buffer.from(md).toString('base64');
    var gitreturn = await commitToGithub(base64md, `docs/_projects/fa_git_${data.repository.name}.md`);
    console.log('published to github');
    console.log(gitreturn);


}


function addField(feildName, feildValue) {
    if (Array.isArray(feildValue)) {
        var toReturn = `${feildName}:\n`;
        feildValue.forEach(eachNode => {
            toReturn += ' -\n';
            Object.keys(eachNode).forEach((key) => {
                toReturn += `   ${key}: ${eachNode[key]}\n`;
            });
        })
        return toReturn;
    } else if (typeof feildValue === "object") {
        var toReturn = `${feildName}:\n`;
        Object.keys(feildValue).forEach((key) => {
            toReturn += ` ${key}: ${feildValue[key]}\n`;
        });
        return toReturn;
    } else if (typeof feildValue === "string") {
        // console.log('treated string');
        return `${feildName}: ${feildValue}\n`;
    }

    return stringToAdd;
}


async function getReadmeFileFromGithub(repositoryWithOwner) {
    var readMeURL = `https://raw.githubusercontent.com/${repositoryWithOwner}/master/README.md`;
    console.log(readMeURL);
    return await request({
        method: 'get',
        url: readMeURL
    });

}

async function commitToGithub(encodedMessage, filename, message = "") {
    // console.log(readMeURL);
    var headers = {
        'Authorization': 'token ' + config.github_token,
        "Accept": "applicatcheckNewIssueIsEventRequestion/vnd.github.v3+json",
        'User-Agent': 'flutterArsenal-cli'

    };
    var params = {
        "message": `new project request to add ${filename}`,

        "content": encodedMessage
    };
    console.log(params);
    return await request({
        method: 'put',
        url: `https://api.github.com/repos/${FLUTTER_ARSENAL_GITHUB_PATH}/contents/${filename}`,
        body: params,
        headers: headers,
        json: true
    });

}


async function sendUpdateToIssue(payload, updateString) {
    var headers = {
        'Authorization': 'token ' + config.github_token,
        "Accept": "application/vnd.github.v3+json",
        'User-Agent': 'flutterArsenal-cli'

    };
    var params = {
        "body": updateString.toString()
    };
    console.log(params);
    var issue_number = payload.issue.number;
    var issueResponse = await request({
        method: 'post',
        url: `https://api.github.com/repos/${FLUTTER_ARSENAL_GITHUB_PATH}/issues/${issue_number}/comments`,
        body: params,
        headers: headers,
        json: true
    });
    console.log(issueResponse);
}
function checkNewIssueIsProjectRequest(payload) {
    // TODO: make this better plz. This is bad
    const allLabels = payload.issue.labels;
    for (let index = 0; index < allLabels.length; index++) {
        const labelObj = allLabels[index];
        console.log(labelObj.name);
        if (labelObj.name === "project-request") {
            console.log('returning true');
            return true;
        }
    }
    return false;
}

function checkNewIssueIsEventRequest(payload) {
    // TODO: make this better plz. This is bad
    const allLabels = payload.issue.labels;
    for (let index = 0; index < allLabels.length; index++) {
        const labelObj = allLabels[index];
        console.log(labelObj.name);
        if (labelObj.name === "event-request") {
            console.log('returning true');
            return true;
        }
    }
    return false;
}

function checkNewIssueIsApproved(payload) {
    // TODO: make this better plz. This is bad
    const allLabels = payload.issue.labels;
    
        console.log("checking for approved");
        for (let index = 0; index < allLabels.length; index++) {
            const labelObj = allLabels[index];
            console.log(labelObj.name);
            if (labelObj.name === "approved") {
                console.log('returning true - IS APPROVED');
                return true;
            }
        }
        return false;
}

function parseIssueAndProcessProjectRequest(payload) {
    const body = payload.issue.body;
    var github_resultArray = getGithubURLRx(body);
    var tag_resultArray = getTagRx(body);
    var excerpt_resultArray = getExcerptRx(body);
    var email_resultArray = getEmailRx(body);
    var teaser_resultArray = getTeaserRx(body);

    var github_url = github_resultArray[0].trim();
    var tag_result = tag_resultArray[0].trim();
    var excerpt_result = excerpt_resultArray[0].trim();
    var email_result = email_resultArray[0].trim();
    var teaser_result = teaser_resultArray[0].trim();

    var gitUrlSplit = github_url.split('/');
    if (gitUrlSplit.length < 5)
        console.log(github_url + ' seems invalid');
    else {
        var issueMsgToSend = `
Thank you @${payload.sender.login} for submitting a new weapon for the __FlutterArsenal__.
The github repository: [_${gitUrlSplit[3]}/${gitUrlSplit[4]}_](${github_url}) is now awaiting approval from __admins__.

Kudos to you for contributing! cc @all-contributors please add @${payload.sender.login} for content and ideas.
        `;
        sendUpdateToIssue(payload, issueMsgToSend);
    }
    console.log(github_url);
    console.log(tag_result);
    console.log(excerpt_result);
}
function parseIssueAndProcessIssueRequest(payload) {
    const body = payload.issue.body;
    var web_resultArray = getWebURLRx(body);
    var tag_resultArray = getTagRx(body);
    var excerpt_resultArray = getExcerptRx(body);
    var email_resultArray = getEmailRx(body);
    var teaser_resultArray = getTeaserRx(body);
    var date_resultArray = getDateRx(body);

    var web_url = web_resultArray[0].trim();
    var tag_result = tag_resultArray[0].trim();
    var excerpt_result = excerpt_resultArray[0].trim();
    var email_result = email_resultArray[0].trim();
    var teaser_result = teaser_resultArray[0].trim();
    var date_result = date_resultArray[0].trim();

        var issueMsgToSend = `
Thank you @${payload.sender.login} for submitting a new battle ground for the __FlutterArsenal__.
The Event at web link: [Event link](${web_url}) on __${date_result} is now awaiting approval from __admins__.

Kudos to you for contributing! cc @all-contributors please add @${payload.sender.login} for content and ideas.
        `;
        sendUpdateToIssue(payload, issueMsgToSend);
    
    console.log(web_url);
    console.log(tag_result);
    console.log(excerpt_result);
}

function getGithubURLRx(body) {
    var github_re = /(git|ssh|http(s)?)(:\/\/)(github\.com)\/([\w,-]+)\/([\w,-]+)/gm;
    var github_resultArray = github_re.exec(body);
    return github_resultArray;
}
function getWebURLRx(body) {
    var web_re = /((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
    var web_resultArray = web_re.exec(body);
    return web_resultArray;
}

function getTagRx(body) {
    var tag_re = /(?<=tag:).*?(?=<!--)/s;
    var tag_resultArray = tag_re.exec(body);
    return tag_resultArray;
}

function getExcerptRx(body) {
    var excerpt_re = /(?<=excerpt:).*?(?=<!--)/s;
    var excerpt_resultArray = excerpt_re.exec(body);
    return excerpt_resultArray;
}

function getEmailRx(body) {
    var email_re = /(?<=email-id:).*?(?=<!--)/s;
    var email_resultArray = email_re.exec(body);
    return email_resultArray;
}

function getTeaserRx(body) {
    var teaser_re = /(?<=teaser:).*?(?=<!--)/s;
    var teaser_resultArray = teaser_re.exec(body);
    return teaser_resultArray;
}


function getDateRx(body) {
    var date_re = /(?<=date:).*?(?=<!--)/s;
    var date_resultArray = date_re.exec(body);
    return date_resultArray;
}


async function parseIssueAndCommit(payload) {
    const body = payload.issue.body;

    var github_resultArray = getGithubURLRx(body);
    var tag_resultArray = getTagRx(body);
    var excerpt_resultArray = getExcerptRx(body);

    var github_url = github_resultArray[0].trim();
    var tag_result = tag_resultArray[0].trim();
    var excerpt_result = excerpt_resultArray[0].trim();

    var gitUrlSplit = github_url.split('/');
    var githubObj = await getNewRepo(gitUrlSplit[3], gitUrlSplit[4]);

    if (gitUrlSplit.length < 5)
        console.log(github_url + ' seems invalid');
    else {
        var issueMsgToSend = `
Congratulations! @${payload.sender.login} your request is now approved and live on [__FlutterArsenal__](https://flutterarsenal.com).

Ping! @${githubObj.repository.owner.login}. Your project is now listed.
Please help and support us in maintaining the biggest arsenal of Flutter weapons.
[![Tip Me via PayPal](https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal)](https://www.paypal.me/karx01)
        `;
        pubToFile(githubObj, tag_result, excerpt_result);
        sendUpdateToIssue(payload, issueMsgToSend);

    }
    console.log(github_url);
    console.log(tag_result);
    console.log(excerpt_result);
}



async function sendWelcomeEmail(email) {
    var email = email.trim();
    if (!email || email.length < 5) {
        console.log('invalid email :' + email);
        return null;
    } else {
        var headers = {
            'Authorization': 'Bearer ' + config.sendgrid_key,
            'User-Agent': 'flutterArsenal-cli'

        };
        var params = {

            "from": {
                "email": "flutterarsenal@sendgrid.net"
            },
            "personalizations": [
                {
                    "to": [
                        {
                            "email": "kartik.arora1214@gmail.com"
                        }
                    ]
                }
            ],
            "template_id": "d-3a75304e01854519a549467f4a1a88b4"

        };
        console.log(params);

        var issueResponse = await request({
            method: 'post',
            url: `https://api.sendgrid.com/v3/mail/send`,
            body: params,
            headers: headers,
            json: true
        });
        console.log(issueResponse);
    }
}