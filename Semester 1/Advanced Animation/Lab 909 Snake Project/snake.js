function Snake(x,y){
  this.loc = new JSVector(300,400);
  this.vel = new JSVector(Math.random()*10-5, Math.random()*10-5);
  this.segments = [];
  this.radius = 10;
  for(let i = 0; i < 10; i++){
    this.segments[i] = new JSVector();
  }
}

Snake.prototype.update = function(){
  this.loc.add(this.vel);
  this.segments[0] = this.loc;

  for(let i = 1; i < this.segments.length; i++){
    let difference = JSVector.subGetNew(this.segments[i], this.segments[i-1]);
    difference.setMagnitude(20);
    this.segments[i] = JSVector.addGetNew(this.segments[i-1], difference);
  }
  this.render();
  this.checkEdges();
}

Snake.prototype.checkEdges = function(){
  if(this.loc.x > canvas.width || this.loc.x < 0) this.vel.x = -this.vel.x;
  if(this.loc.y > canvas.height || this.loc.y < 0) this.vel.y = -this.vel.y;
}


Snake.prototype.render = function(){
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'white';
  for(let i = 1; i < this.segments.length; i++){
    ctx.lineWidth = 30 - (2 * i);
    ctx.beginPath();
    ctx.moveTo(this.segments[i-1].x, this.segments[i-1].y);
    ctx.lineTo(this.segments[i].x, this.segments[i].y);
    ctx.stroke();
  }
}
