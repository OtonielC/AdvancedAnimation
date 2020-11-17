function Snake(){
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(Math.random()*10-5, Math.random()*10-5);
  this.acc = new JSVector(0, 0);
  this.segments = [];
  this.radius = 10;
}

  this.update = function(){
    //this starts from the end of the segments array so that each segments follows the head
    for(var i = this.segments.length-1; i > 0; i--){
      this.segments[i].x = this.segments[i-1].x;
      this.segments[i].y = this.segments[i-1].y;
    }

    this.loc.add(this.vel);
    this.segments[0].x = this.loc.x;
    this.segments[0].y = this.loc.y;
    if(food.iscolliding === true){
      this.segments+=1
    }


    if(this.loc.x === food.loc.x && this.loc.y === food.loc.y){
      this.segments.push(createVector(62198354,125693874));
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
