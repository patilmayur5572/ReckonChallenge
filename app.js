'use strict';

const express = require('express');

const request = require('request');

//To get the configuration data like Endpoint Address.
const config = require('./config');

const app = express();


var lowerBound = 0;  //Stores lower bound value from Range API
var upperBound = 0;  //Stores upper bound value from Range API


var lcm = 1; //Stores common multiple of divisor values from Divisor API
var concatenatedString = ""; //Stores the common message to print if all the numbers are divisible


app.get('/',function(req,res,next){
    getRequest(config.RangeInfo).then(function (rangeResponse) {
        //Parse response from Range API (Endpoint 1)
        var rangeArray = JSON.parse(rangeResponse);

        //Check for Response not Empty
        if(rangeResponse){
            lowerBound = rangeArray.lower;        
            upperBound = rangeArray.upper;
            return getRequest(config.DivisorInfo);
        }
        else{

            //Print Error when Endpoint 1 is down.
            res.send("Range API is down, please try again later!!");
        }
    }).then(function (divisorResponse) {

        //Parse response from Range API (Endpoint 2)
        var divisorArray = JSON.parse(divisorResponse);

        //Calculate Common multiple for the divisor values and save the message
        for (var i = 0; i < divisorArray.outputDetails.length; i++) {
            lcm *= divisorArray.outputDetails[i].divisor;
            concatenatedString += divisorArray.outputDetails[i].output;
        }

        if(divisorResponse){
            var finalOutput = []; //Stores the final output to be send out to browser.

            //Traverse the response of Range API for numbers to be divisible.
            for(var i = lowerBound; i<= upperBound; i++){

                var message=""; //Stores the respective message of every divisiors like 'Boss','Hogg' and 'BossHogg'
                
                for(var j = 0; j < divisorArray.outputDetails.length;j++){

                    const divisor = divisorArray.outputDetails[j].divisor;

                    //Check whether individual disvisors are divisible from lowerBound to upperBound.
                    
                    if(i % divisor == 0){
                        message = divisorArray.outputDetails[j].output;

                        //Check if common multiple is divisble with range values. 
                        if (i % lcm == 0) {
                            message = concatenatedString;
                        }
                    }                     
                }

                //Add designated numbers and the message to final array.
                finalOutput.push(i + ": " + message + "");  
            }

            //JSON response for finalOutput.
            res.json(finalOutput);
        }
        else{

        //Print error if Endpoint 2 is down.
        res.send("Divisor API is down, please try again later!!");
        }
    });

})

//Common function to return promise for API calls.
function getRequest(url) {
    return new Promise(function (success, failure) {
        request(url, function (error, response, body) {
            //Check for API returning Error
            if (!error && response.statusCode == 200) {
                success(body);
            } else {
                failure(error);
            }
        });
    });
}

module.exports = app;


