//Otoniel Carreon
//Canvas Demo

window.onload = init;
var canvas;  //  This variable will hold a reference to the Canvas
var ctx;     //  ctx will hold a reference to our context

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = solid black 2px;
  canvas.style.backgroundColor = rgba(0,44,55, 1);
  // get the context
  ctx = canvas.getContext('2d'); // The context object has the methods we need
							   // to draw on the canvas
  animate();
}
function animate(){
  requestAnimationFrame(animate); //  We are calling the animate function from
//  inside of the animate function
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  ctx.strokeStyle = 'rgba(155,100,20)';
  ctx.fillStyle = 'rgba(155,100,20)';
  ctx.beginPath();
  ctx.arc(x,y, radius, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
  updateGame();
}


function updateGame(){
  // This function will be called at specific time intervals
  // according to the frame rate set in requestAnimationFrame()

  renderGame();
}
