function Mover(x, y. dx. dy, r, c, n){
  this.loc = new JSVector(x,y);
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector();
  this.rad = r;
  this.orbitAngle = Math.random() *Math.PI;
  this.clr = c;
  this.orbiters = [];

  for(let i = 0; i < n; i++){
    let a = i * (Math.PI *2) / numOrbs + this.orbitAngle;
    let angleVel = numOrbs * 0.01;
    this.orbiters.push(new Orbiter(this, 4, 25, a, angleVel, this.clr))
  }
}

Mover.prototype.run = function(){
  this.update();
  this.checkEdges();
  this.render();
  for(let i = 0; i < this.orbiters.length; i++){
    let orb = this.orbiters[i];
    orb.update();
    orb.render();
  }
}

Mover.prototype.render = function(){
  let ctx = game.context;
  ctx.strokeStyle = 'rgba(155,150,35)';
  ctx.fillStyle = 'rgba(255,100,245)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y, this.rad, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
}

Mover.prototype.update = function(){
  this.vel.add(this.acc);
  this.loc.add(this.vel)
}

Mover.prototype.checkEdges = function(){
  let canvas = game.canvas;
  if(this.loc.x > canvas)
}
