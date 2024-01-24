var five = require("johnny-five");
var board = new five.Board();

function gmk(str) {
    board.on("ready", function () {
        var led = new five.Led(13);
        if (str) {
            led.on();
        } else {
            led.off();
        }
    });
}

gmk(true);
