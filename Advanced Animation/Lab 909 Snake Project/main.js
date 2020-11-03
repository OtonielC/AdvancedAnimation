//Otoniel Carreon
 //Global variables
window.onload = init;
var balls = [];  //  This variable will hold a reference to the Ball
var ctx;        //  This variable will hold a reference to the context
var canvas;     //  ctx will hold a reference to our canvas
var snake = new JSVector(0, 0);

function init(){
  canvas = document.getElementById('cnv');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,44,55, .5)';
  ctx = canvas.getContext('2d');
  loadBalls(70);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(var i = 0; i<balls.length; i++){
    balls[i].update();
  }
}

function loadBalls(num){
  for(var i = 0; i<num; i++){
    balls[i] = new Ball(Math.random()*canvas.width,Math.random()*canvas.height);
  }
}
