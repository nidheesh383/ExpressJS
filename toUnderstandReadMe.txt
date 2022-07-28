Intro To Express

To install Nodemon use this cmd
 😇 sudo npm install -g --force nodemon
 🥲npm i nodemon didn’t actually work for me.

To install express first we need to install 
 🥲 npm i express (it actually installs the oldest version for me 1.0.0 so to get rid of it u can use)
 😇npm i express@4.18.1 --save (or the latest version.)
Then we have to import express so 
 😇 const express = require('express’);
In the next step, we r going to give a function that represents the Express module
 😇const app = express()

Till now we r not getting anything back so to get anything we use the (❤️‍🩹get method).  😇app.get('/', (req, res) => {res.send('Hello World!') });  let me explain the above code clearly so “/“ represents the home route that we can actually change then now when that get req happens we can trigger a callback function and this function can have 2 parameters (1. Req & 2. Res) now we have to send the response right so we need to trigger send (res.send)

To simply transfer	the home route (/) to a localhost 3000 or something we can code 
app.listen(3000, () => {
 😇 console.log(`Example app listening on port ${port}`)
});
To post the req we send we use 
 😇app.post (“/” , (req,res) => {
res.send (“Thanks for posting this”)
} );


Body Parser :
Express body-parser is an npm library used to process data sent through an HTTP request body. 

😇const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
  
app.post("/", function(req, res){
  let firstName = req.body.fNAME;😇