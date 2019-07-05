// https://raw.githubusercontent.com/pauldemarco/flutter_blue/master/README.md
const request = require("./await-request");

request({
    method: 'get',
    url: 'https://raw.githubusercontent.com/pauldemarco/flutter_blue/master/README.md'
}).then( data => {console.log(data)});
