

//  Operator constructor function +++++++++++++++++++++++++++++

function Operator(x, y, dx, dy, rad){

	this.location = new JSVector(x,y);
    this.velocity = new JSVector(0,0);
	this.acceleration = new JSVector(0,0);
	this.rad = rad;
	this.clr = "rgba(255,255,255,1)";

}

  //  placing methods in the prototype (every Operator shares functions)

Operator.prototype.run = function(Operators){
	
			

			
	this.velocity.add(this.acceleration);
			
			//this.velocity.limit(this.maxSpeed);
			
	this.location.add(this.velocity);
			
			//this.update();
			
	this.acceleration.multiply(0);
			
			//this.checkEdges();
		//	this.checkCollisions();
		
	this.render();
	
	this.checkEdges();
	//this.acceleration.multiply(0);
	//drag force
	//this.velocity.x += -0.00001 * 2 * 3.1415 * this.rad *  this.velocity.x
	//this.velocity.y += -0.00001 * 2 * 3.1415 * this.rad * this.velocity.y
	
}

Operator.prototype.checkCollisions = function() {
	
	
}

Operator.prototype.applyForce = function(force) {
	this.acceleration.add(force);
}



// draw the Operator on the canvas
Operator.prototype.render = function(){
    let ctx = ecoSystem.context1;
    // color depends on whether this Operator overlaps any oher Operator
	
	
	
	ctx.strokeStyle = this.clr;

    ctx.fillStyle = this.clr;
	
	//tx.translate(-game.canvas1Loc.x,-game.canvas1Loc.y);

	ctx.beginPath();
	//	console.log("x: " + this.segments[i].x + " y:" + this.segments[i].y);
		//ctx.arc(this.segments[i].x-game.location.x, this.segments[i].y-game.location.y, this.r, Math.PI *2, 0, false);
	ctx.arc(this.location.x, this.location.y, this.rad, Math.PI *2, 0, false);
	console.log('hi')
		//ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
		//ctx.lineTo(this.segments[i].x,this.segments[i].y);
	ctx.stroke();
	ctx.fill();


	let ctx2 = ecoSystem.context2;
	 
	ctx2.strokeStyle = this.clr;

    ctx2.fillStyle = this.clr;
	ctx2.save();
	
	ctx2.translate(ecoSystem.canvas2.width/2,ecoSystem.canvas2.height/2);
	ctx2.scale(ecoSystem.scaleX,ecoSystem.scaleY);

		
	ctx2.beginPath();
	//	console.log("x: " + this.segments[i].x + " y:" + this.segments[i].y);
		//ctx.arc(this.segments[i].x-game.location.x, this.segments[i].y-game.location.y, this.r, Math.PI *2, 0, false);
	ctx2.arc(this.location.x, this.location.y, this.r, Math.PI *2, 0, false);
		//ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
		//ctx.lineTo(this.segments[i].x,this.segments[i].y);
	ctx2.stroke();

	ctx2.fill();
		//console.log('help');

		
	
	
	ctx2.restore(); 
   // ctx.restore();


}

// Move the Operator in a random direction


// When a Operator hits an edge of the canvas, it wraps around to the opposite edge.
Operator.prototype.checkEdges = function(){
    let canvas = ecoSystem.world;
	if(this.location.x > canvas.right)  this.location.x = canvas.left; // wrap around from right to left
    if(this.location.x < canvas.left)  this.location.x = canvas.right; // wrap around from left to right
    if(this.location.y < canvas.top)  this.location.y = canvas.bottom; // wrap around from bottom to top
    if(this.location.y > canvas.bottom)  this.location.y = canvas.top; // wrap around from top to bottom
    
  }
