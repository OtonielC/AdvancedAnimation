//Global variables
window.onload = init;
var balls = [];  //  This variable will hold a reference to the Ball
var ctx;        //  This variable will hold a reference to the context
var canvas;     //  ctx will hold a reference to our canvas

function init(){
 canvas = document.getElementById('cnv');
 canvas.style.border = 'solid black 2px';
 canvas.style.backgroundColor = 'red';
 ctx = canvas.getContext('2d');
}
