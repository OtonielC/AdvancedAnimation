function Boid(x, y){
  this.loc = new JSVector(x, y);
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0,0);
  this.maxSpeed = 2;
  this.maxForce = .03;
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
  this.acc.limit(this.maxForce);
  this.vel.add(this.acc);
  this.acc.multiply(0);
  this.vel.limit(this.maxSpeed);
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
  if(this.loc.x > game.canvas.width){
    this.loc.x = 0;
  }
  if(this.loc.x < 0){
    this.loc.x = game.canvas.width;
  }
  if(this.loc.y > game.canvas.height){
    this.loc.y = 0;
  }
  if(this.loc.y < 0){
    this.loc.y = game.canvas.height;
  }
}

Boid.prototype.flock = function(){
  let sep = this.separate();
  let ali = this.align();
  let coh = this.cohesion();

  sep.multiply(1.2);
  ali.multiply(0.5);
  coh.multiply(0.5);

  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

//----------------------------ALIGNMENT---------------------------------

Boid.prototype.align = function(){
  let neighborDist = 100;
  var sum = new JSVector(0,0);
  let count = 0;
  for(let i = 0; i < game.boids.length; i++){
    let distance = this.loc.distance(game.boids[i].loc)
    if(distance > 0 && distance < neighborDist){
      sum.add(game.boids[i].vel);
      count++;
    }
    sum.divide(game.boids.length);
    sum.setMagnitude(this.maxSpeed);
    let aliSteer = sum.sub(game.boids[i].vel);
    aliSteer.limit(this.maxForce);
    return aliSteer;
  }

  if(count > 0){
    aliSteer.divide(count);
    return this.seek(aliSteer);
  }
  else{
    return (new JSVector(0,0));
  }
}

//----------------------------COHESION---------------------------------

Boid.prototype.cohesion = function(){
  let nextdist = 100;
  let coh = new JSVector(0,0);
  let count = 0;
  for(let i = 0; i < game.boids.length; i++){
      let d = this.loc.distance(game.boids[i].loc);
      if(d > 0 && d < nextdist){
        coh.add(game.boids[i].loc);
        count++;
    }
  }
  if(count > 0){
    coh.divide(count);
    return this.seek(coh);
  }
  else{
    return (new JSVector(0,0));
  }
}

//----------------------------SEEK---------------------------------
Boid.prototype.seek = function(target){
  let desired = JSVector.subGetNew(target, this.loc);
  desired.normalize();
  desired.multiply(this.maxSpeed);
  let steer = desired.sub(this.vel);
  steer.limit(this.maxForce);
  return steer;
}

//----------------------------SEPARATION---------------------------------

Boid.prototype.separate = function(){
  let sep = new JSVector(0,0);
  for(var i = 0; i < game.boids.length; i++){
    if(game.boids[i]!=this){
      var distance = this.loc.distance(game.boids[i].loc);
      if(distance > 0 && distance<40){
        var sepForce = JSVector.subGetNew(this.loc, game.boids[i].loc);
        sepForce.normalize();
        sep.add(sepForce);
      }
    }
  }
  return(sep);
}

//----------------------------APPLY FORCE---------------------------------
Boid.prototype.applyForce = function(vector){
  this.acc.add(vector);
}
