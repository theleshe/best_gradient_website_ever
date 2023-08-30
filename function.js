var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var randx0 = randomCoord();
var randx1 = randomCoord();
var randy0 = randomCoord();
var randy1 = randomCoord();
var gradient = ctx.createLinearGradient(randx0, randy0, randx1, randy1) ;

var first_col= Math.floor(Math.random() * 16777215).toString(16);
    first_col = "#" + ("000000" + first_col).slice(-6);

var second_col= Math.floor(Math.random() * 16777215).toString(16);
    second_col = "#" + ("000000" +  second_col).slice(-6);

gradient.addColorStop(0, first_col);
gradient.addColorStop(1, second_col);

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1000, 1000);

function randomCoord()
{
    var max = 300;
    var min = 0;
    return Math.floor(Math.random() * (max - min) + min);   
}