const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
var five = require("johnny-five");
var board = new five.Board();

   //Kept the entire api request in board function
   board.on("ready", function () {
      var led = new five.Led(13);
      app.get('/', (req, res) => {
         res.render('main', { state: ledState });
      });

      app.post('/led', (req, res) => {
         const state = req.body.ledOption;
         console.log(state);
         if (state === "yes") {
            ledState = true;
            led.on()
         } else if (state==="no") {
            ledState = false;
            led.off()
         }
         res.redirect('/');
      });

      app.listen(3000, () => {
         console.log("The server is working");
      });
   });


let ledState = false;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


