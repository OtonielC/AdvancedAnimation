function Ball(x, y){
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(Math.random()*5-2.5, Math.random()*5-2.5);
  this.gravity = new JSVector(0, .07);
  this.friction = new JSVector(0,0);
  this.radius = 10;
}

Ball.prototype.update = function(){
  let friction = this.vel.copy().multiply(-.0009);
  this.vel.add(friction);
  this.vel.add(this.gravity);
  this.loc.add(this.vel);
  if(this.loc.x > canvas.width || this.loc.x < 0) this.vel.x = -this.vel.x;
  if(this.loc.y > canvas.height || this.loc.y < 0) this.vel.y = -this.vel.y;
  this.render();
}

Ball.prototype.render = function(){
    ctx.strokeStyle = 'rgba(155,150,35)';
    ctx.fillStyle = 'rgba(255,100,0)';
    ctx.beginPath();
    ctx.arc(this.loc.x,this.loc.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
}
