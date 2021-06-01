// Actor class.  Each actor starts life at the beginning of a path
// and follows that path to the end where it dies.

class Actor {
    constructor(game){
        // start off the actor in the first cell of the path
        this.maxSpeed = 1;
        this.pathIndex = 0;
        this.currentCell = game.path[this.pathIndex];
        this.nextCell = game.path[this.pathIndex+1];   // next in the path of cells
        // where this actor should aim -- the center of the next cell in the path
        this.target = new JSVector(this.nextCell.loc.x + this.nextCell.width/2,
                            this.nextCell.loc.y + this.nextCell.height/2);
        this.lastCell = game.path[game.path.length-1];  // end of the path
        // position the actor initially in the center of the first cell
        this.loc = new JSVector(this.currentCell.loc.x + this.currentCell.width/2,
                                this.currentCell.loc.y + this.currentCell.height/2);
        this.vel = JSVector.subGetNew(this.target, this.loc);   // velocity
        this.vel.setMagnitude(this.maxSpeed);
        this.virusPNG = [];
        for(let i = 0; i < 6; i++){
          let img = new Image();
          let fName = 'Virus/Virus000'+ (i+1) +'.png';
          img.src = fName;
          this.virusPNG.push(img);
        }
        this.index = 0;
        this.count = 0;

    }

    run() {
        this.update();
        this.render();
    }

    update(){


      if(this.loc.distance(this.target) < this.nextCell.width/2){
        this.pathIndex++;
        this.currentCell = this.nextCell;
        if(this.currentCell === this.lastCell){
            game.actors.splice(game.actors.indexOf(this), 1);
            return;
        }
        this.nextCell = game.path[this.pathIndex+1];
        this.target = new JSVector(this.nextCell.loc.x + this.nextCell.width/2, this.nextCell.loc.y + this.nextCell.height/2);
      }
      this.acc = JSVector.subGetNew(this.target, this.loc);
      this.acc.setMagnitude(.05);

      // move this actor along the path until it reaches the end of
      // the path and dies
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.loc.add(this.vel);
    }

    render(){
        let ctx = game.ctx;
        ctx.drawImage(this.virusPNG[this.index], this.loc.x-this.virusPNG[this.index].width/2, this.loc.y-this.virusPNG[this.index].height/2);
        this.count++;
        if(this.count>=12){
          this.count = 0;
          this.index++;
          if(this.index >= 6){
            this.index = 0;
          }
        }
    }
}
