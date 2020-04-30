'use strict';

var https = require('https');
const functions = require('firebase-functions');
const DialogFlowApp = require('actions-on-google').DialogFlowApp;


exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {

    let action = request.body.queryResult.action;
    let chat = "Hi, This is a response from the main function!"

    response.setHeader('Content-Type', 'application/json');

    if (action != 'input.getCountryCases') {
        response.send(buildChatResponse("I'm sorry, I don't know how to do this. Bruh"));
        return;
    }

    const parameters = request.body.queryResult.parameters;
    let countryName = parameters["geo-country-code"].name;
    let countryCode = parameters["geo-country-code"]["alpha-2"];

    getCases(countryCode, countryName, response);

});

function getCases(countryCode, countryName, CloudFnResponse) {

    
    let customPath = countryName ? "/api/countries/" + countryCode : "/api";
    let options = {
        host: 'covid19.mathdro.id',
        path: customPath
    };

    let request = https.get(options, function (response) {
        var json = "";
        response.on('data', function (chunk) {
            console.log("received JSON response: " + chunk);
            json += chunk;
        });

        response.on('end', function () {
            let jsonData = JSON.parse(json);
            let res = jsonData;
            let chat = countryName ? countryName + " has " + res.confirmed.value + " confirmed cases, " + res.recovered.value + " recovered, and " + res.deaths.value + " deaths."
                : "Globally there are " + res.confirmed.value + " confirmed cases, " + res.recovered.value + " recovered, and " + res.deaths.value + " deaths.";
            console.log(chat);

            CloudFnResponse.send(buildChatResponse(chat));

        });

    });

}

function buildChatResponse(chat) {
    return JSON.stringify({ "fulfillmentText": chat });
}