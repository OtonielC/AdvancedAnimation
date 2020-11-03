function Ball(x, y){
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(Math.random()*10-5, Math.random()*10-5);
  this.acc = new JSVector(0, 0);
  this.radius = 10;
}
//&& this != balls[1]
Ball.prototype.update = function(){
  // if(this != balls[0]){
  //   let v = JSVector.subGetNew(balls[0].loc, this.loc);
  //   if(v.getMagnitude() < 200){
  //     //Attraction
  //     v.normalize();
  //     v.multiply(.09);
  //     this.acc.add(v);
  //   }else if(v.getMagnitude() < 100){
  //     //Repulsion
  //     v.normalize();
  //     v.multiply(-.09);
  //     this.acc.add(v);
  //   }
  //  v = JSVector.subGetNew(this.loc, balls[1].loc);
  //   if(v.getMagnitude() < 150){
  //     //Repulsion
  //     v.normalize();
  //     v.multiply(.09);
  //     this.acc.add(v);
  //   }
//}

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
  if(this === balls[0]){
    ctx.fillStyle = ('blue');
  }
  //else if(this === balls[1]){
  //   ctx.fillStyle = ('green');
  else{
    ctx.fillStyle = 'rgba(255,0,0)';
  }
    ctx.strokeStyle = 'rgba(155,150,35)';
    ctx.beginPath();
    ctx.arc(this.loc.x,this.loc.y, this.radius, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();
}
