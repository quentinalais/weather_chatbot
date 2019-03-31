'use strict';
const axios = require("axios");
var request = require('request');

var headers = {
    'X-RapidAPI-Key': 'b3b3c59264msh7d3077b8b0eaad3p1e0a5fjsn34eb94f3e738'
};

var options = {
    url: 'https://api-football-v1.p.rapidapi.com/teams/team/4',
    headers: headers
};

function callback(error, response, result) {
    if (!error && response.statusCode == 200) {
        result=JSON.parse(result);
        //console.log( JSON.stringify(result.api, null, 2));

          
    }
}

const a=request(options, callback);

