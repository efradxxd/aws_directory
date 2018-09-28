var express = require('express');
var aws = require('aws-sdk');

aws.config.update({region:'us-east-1'});

var app = express();
var request = require('request');
var teamMembers;

app.set('view engine', 'ejs');

request.get('https://uhmoxvk5s0.execute-api.us-east-1.amazonaws.com/dev/DirectoryFunc', (err, res, body) => {
    if(err) {
        return console.dir(err);
    }
    console.log(JSON.parse(body));
    teamMembers = JSON.parse(body);
    teamMembers = teamMembers.reverse();

})

app.get('/', function(req, res) {
    res.render('pages/index', {
        teamMembers: teamMembers
    });
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log("Directory app runing on port 3000");
module.exports = app;