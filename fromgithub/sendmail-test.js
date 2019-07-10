const config = require("./config.json");
const request = require("./await-request");

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
            
                "from" : {
                    "email": "kartik.arora1214@gmail.com"
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


sendWelcomeEmail('asdasdasdasdasd');