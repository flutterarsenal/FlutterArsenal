const request = require("./await-request");
// const grequest = require("./await-request");
const GraphQLClient = require('graphql-request').GraphQLClient;
const config = require("./config.json");
const fs = require('fs');
const moment = require('moment');
const http = require('http');

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
    return data
}
var allRepos_test = ["VictorRancesCode/flutter_ibm_watson"];
var allRepos = ["goderbauer/contact_picker",
    "letsar/flutter_staggered_grid_view",
    "letsar/flutter_sticky_header",
    "xqwzts/flutter_radial_menu",
    "Ivaskuu/tinder_cards",
    "slightfoot/flutter_sticky_headers",
    "GeekyAnts/flutter",
    "renefloor/side_header_list_view",
    "hnvn/flutter_flip_panel",
    "duytq94/facebook",
    "AndreHaueisen/flushbar",
    "Rahiche/stepper_touch",
    "AbdulRahmanAlHamali/flutter_typeahead",
    "ariedov/flutter_snaplist",
    "LiewJunTung/pin_code_text_field",
    "aagarwal1012/Liquid",
    "FlutterRocks/movie",
    "CodemateLtd/FlutterMates",
    "alessandroaime/Weather",
    "brianegan/flutter_architecture_samples",
    "braulio94/menu_flutter",
    "tomialagbe/flutter_ui_challenges",
    "matthinc/flutter_cupertino_settings",
    "thosakwe/flutter_music_player",
    "Ivaskuu/dashboard",
    "littlemarc2011/FlutterTodo",
    "geekruchika/FlutterCardSwipe",
    "iampawan/Flutter",
    "putraxor/flutter",
    "huextrat/TheGorgeousLogin",
    "longhoang2984/flutter_payment_app_ui",
    "SnakeyHips/drawapp",
    "KingWu/flutter_starter_kit",
    "jhomlala/feather",
    "javico2609/flutter",
    "pd4d10/git",
    "azihsoyn/flutter_mlkit",
    "VictorRancesCode/flutter_ibm_watson",
    "santetis/flutter_camera_ml_vision",
    "edufolly/flutter_mobile_vision",
    "olexale/arkit_flutter_plugin",
    "giandifra/arcore_flutter_plugin",
    "flutter/plugins",
    "Lyokone/flutterlocation",
    "MaikuB/flutter_local_notifications",
    "builttoroam/flutter_plugins",
    "AppleEducate/get_version",
    "g123k/flutter_app_badger",
    "GigaDroid/flutter_udid",
    "hnvn/flutter_downloader",
    "pichillilorenzo/flutter_inappbrowser",
    "pichillilorenzo/flutter_appavailability",
    "aeyrium/aeyrium",
    "miguelpruivo/plugins_flutter_file_picker",
    "villela/flutter_qrcode_reader",
    "facundomedica/fast_qr_reader_view",
    "pauldemarco/flutter_blue",
    "matteocrippa/flutter",
    "pszklarska/beacon_broadcast",
    "tekartik/sqflite",
    "OpenFlutter/mmkv_flutter",
    "VictorRancesCode/flutter_dialogflow",
    "OneSignal/OneSignal",
    "pinkfish/flutter_places_dialog",
    "AppleEducate/app_review",
    "jhomlala/catcher",
    "leisim/logger",
    "felangel/bloc",
    "mobxjs/mobx",
    "davidmarne/flutter_built_redux",
    "johnpryan/redux",
    "brianegan/flutter_redux",
    "p69/dartea",
    "google/inject",
    "google/flutter_flux",
    "alibaba/fish",
    "rrousselGit/flutter_hooks",
    "rrousselGit/functional_widget",
    "DarshanGowda0/GeoFlutterFire",
    "Norbert515/flutter_sequence_animation",
    "jogboms/flutter_spinkit",
    "Norbert515/flutter_villains",
    "aagarwal1012/Animated",
    "biocarl/drawing_animation",
    "felixblaschke/simple_animations",
    "luanpotter/flame",
    "spritewidget/spritewidget",
    "renefloor/flutter_cache_manager",
    "frideosapps/frideos_flutter",
    "jorgecoca/ozzie"];
// allRepos_test.forEach((eachRepo) => {
//     try {
//         console.log(`for ${eachRepo}`);
//         console.log(`for ${eachRepo.split('/')[0]}, ${eachRepo.split('/')[1]}`);
//         getNewRepo(eachRepo.split('/')[0], eachRepo.split('/')[1]).then((data) => pubToFile(data));

//     } catch (error) {
//         console.log(error);
//     }

// });


async function pubToFile(data) {
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
    md += addField('excerpt', '"' + data.repository.description.split('"').join('\'')  + '"');
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

    md += await getReadmeFileFromGithub(`https://raw.githubusercontent.com/${data.repository.nameWithOwner}/master/README.md`);
    console.log('printing');
    
    fs.writeFileSync(`./output/fa_${data.repository.name}.md`, md)
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
async function getReadmeFileFromGithub(readMeURL) {
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
        "Accept": "application/vnd.github.v3+json",
        'User-Agent': 'flutterArsenal-cli'

    };
    var params ={
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


const hostname = '127.0.0.1';
const port = 3148;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});