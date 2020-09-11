function Ball(x, y){
  this.x = x;
  this.y = y;
  this.dx = Math.random()*10-5;
  this.dy = Math.random()*10-5;
  this.radius = 10;
}

Ball.prototype.update = function(){
  this.x+=this.dx;
  this.y+=this.dy;
  if(this.x > canvas.width || this.x < 0) this.dx = -this.dx;
  if(this.y > canvas.height || this.y < 0) this.dy = -this.dy;
  this.render();
}

Ball.prototype.render = function(){
    ctx.strokeStyle = 'rgba(155,150,35)';
    ctx.fillStyle = 'rgba(255,100,245)';
    ctx.beginPath();
    ctx.arc(this.x,this.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
}
