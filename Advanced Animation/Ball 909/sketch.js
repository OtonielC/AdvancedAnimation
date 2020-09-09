//Otoniel Carreon
 //Global variables
window.onload = init;
var ball;  //  This variable will hold a reference to the Ball
var ctx;
var canvas;    //  ctx will hold a reference to our context

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  console.log(canvas);
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,44,55, .5)';
  ctx = canvas.getContext('2d');
  ball = new Ball(400, 300);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  ball.update();
}


function Ball(x, y){
  this.x = x;
  this.y = y;
  this.dx = Math.random()*10-5;
  this.dy = Math.random()*10-5;
  this.radius = 30;
}

Ball.prototype.update = function(){
  this.x+=this.dx;
  this.y+=this.dy;
  if(this.x > canvas.width || this.x < 0) this.dx = -this.dx;
  if(this.y > canvas.height || this.y < 0) this.dy = -this.dy;
  this.render();
}

Ball.prototype.render=function(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(155,180,50)';
    ctx.fillStyle = 'rgba(155,180,50)';
    ctx.beginPath();
    ctx.arc(this.x,this.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
}

// function loadBalls(num){
//   for(var i = 0; i<num; 1++){
//     balls[i] = new Ball(math.random()*canvas.width,Math.random()*canvas.height, Math.random()*10-5, Math.random()*10-5);
//   }
// }
