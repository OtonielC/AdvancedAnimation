//Otoniel Carreon
 //Global variables
window.onload = init;
var snakes = [];  //  This variable will hold a reference to the Ball
var ctx;        //  This variable will hold a reference to the context
var canvas;     //  ctx will hold a reference to our canvas
var snake = new JSVector(0, 0);

function init(){
  canvas = document.getElementById('cnv');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,44,55, .5)';
  ctx = canvas.getContext('2d');
  loadSnakes(10);
  animate();
}

function animate(){
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(let i = 0; i<this.snakes.length; i++){
    snakes[i].update();
  }
  requestAnimationFrame(animate);
}

function loadSnakes(num){
  for(var i = 0; i<num; i++){
    snakes[i] = new Snake(Math.random()*canvas.width,Math.random()*canvas.height);
  }
}
