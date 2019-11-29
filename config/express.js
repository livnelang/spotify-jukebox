const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var SpotifyWebApi = require('spotify-web-api-node');

// dev: load environment vars from file
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}



//Define the express configuration
module.exports = function () {
    //Create a new express instance
    var app = express();

    //configure body parser
    app.set('json spaces', 4);

    //Here we are configuring express to use body-parser as middle-ware.
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static(path.join('./', 'build')));


    //add access control response
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });


    return app;
};