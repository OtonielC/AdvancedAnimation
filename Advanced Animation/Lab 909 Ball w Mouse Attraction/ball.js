function Ball(x, y){
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(Math.random()*5-2.5, Math.random()*5-2.5);
  this.acc = new JSVector(0, 0);
  this.radius = 10;
}

Ball.prototype.update = function(){
  if(this != mouseLoc){
    let v = JSVector.subGetNew(mouseLoc, this.loc)
    if(v.getMagnitude() < 200){
      //Attraction to Mouse
      v.normalize();
      v.multiply(.07);
      this.acc.add(v);
    }
  }
  this.acc.limit(.1);
  this.vel.add(this.acc);
  this.vel.limit(2);
  this.acc.multiply(0);
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
