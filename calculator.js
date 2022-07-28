const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get ("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post ("/", (req, res) => {
    var number1 = Number(req.body.number1);
    var number2 = Number(req.body.number2);
    var result = number1+number2;
    res.send("The answer is:" + result);
    console.log(result);
});


app.listen (3700, () => {
    console.log ("listening on port " )
});