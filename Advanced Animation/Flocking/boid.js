function Boid(x, y){
  this.loc = new JSVector(x, y);
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0,0);
  this.maxSpeed = 10;
  this.maxForce = 10;
  this.radius = 10;
  this.scl = 10;
  this.clr = "rgba(255,255,255)";
}


Boid.prototype.run = function(){
  this.render();
  this.update();
  this.checkEdges();
}

Boid.prototype.update = function(){
  this.flock();
  this.vel.add(this.acc);
  this.loc.add(this.vel);
}

Boid.prototype.render = function(){
  let ctx = game.ctx;
  ctx.save();
  ctx.translate(this.loc.x, this.loc.y);
  ctx.rotate(this.vel.getDirection() + Math.PI / 2); //offset 90 degrees
  ctx.beginPath();
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.moveTo(0, -this.scl);
  ctx.lineTo(-this.scl, this.scl);
  ctx.lineTo(0, 0);
  ctx.lineTo(this.scl, this.scl);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

Boid.prototype.checkEdges = function(){
  if(this.loc.x > canvas.width || this.loc.x < 0){
      this.vel.x = -this.vel.x;
  }
  if(this.loc.y > canvas.height || this.loc.y < 0){
      this.vel.y = -this.vel.y;
  }
}

Boid.prototype.flock = function(){
  let sep = this.separate();
  //var ali = align(boids);
  //var coh = cohesion(boids);

  sep.multiply(1);
  //ali.multiply(1.0);
  //coh.multiply(1.0);

  applyForce(sep);
  //applyForce(ali);
  //applyForce(coh);
}

//----------------------------ALIGNMENT---------------------------------

Boid.prototype.align = function(){
  var sum = new JSVector(0,0);
}

//----------------------------COHESION---------------------------------

Boid.prototype.cohesion = function(){
  let boids = game.boidSystem;
  var neighbordist = 50;
  var sum = new JSVector(0,0);
  var count = 0;
  for(var i = 0; i < this.boids.length; i++){
    if(this.boids[i].loc != this.boid.loc){
      var d = JSVector.distance(this.loc, this.boids[i]);
      if(d > 0 && d < neightbordist){
        sum.add(this.boids[i]);
      }
    }
  }
}

//----------------------------SEPARATION---------------------------------

Boid.prototype.separate = function(){
  let sep = new JSVector(0,0);
  for(var i = 0; i < boid; i++){
    if(boids[i]!=this){
      var distance = this.loc.distance(boids[i].loc);
      if(distance<20){
        var sepForce = JSVector.subGetNew(this.loc, boids[i].loc);
        sepForce.normalize();
        sep.add(sepForce);
      }
    }
  }
  return(sepForce);
}
