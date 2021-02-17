class EcoSystem {
  constructor() {
    this.objects = [];
    this.canvas1 = document.getElementById('cnv1');
    this.context1 = this.canvas1.getContext('2d');
    this.canvas2 = document.getElementById('cnv2');
    this.context2 = this.canvas2.getContext('2d');
    this.canvas1Loc = new JSVector();





    this.world = {
      top: -1500,
      left: -2000,
      bottom: 1500,
      right: 2000,
      width: 4000,
      height: 3000
    }

    this.nRows = 50;

    this.nCols = 40;
    this.cellWidth = this.world.width / this.nRows;
    this.cellHeight = this.world.height / this.nCols;
    this.cells = new Array(this.nRows);
    //outer array creation ---
    for(let r = 0; r < this.cells.length; r++){
      //loads with arrays
      this.cells[r] = new Array(this.nCols);
      for(let c = 0; c < this.nCols; c++){
        this.cells[r][c] = new Cell(this,r,c,0);
      }
    }
    this.actor = new Actor(20,24);
    this.cells[20][24].occupied = false;
    this.canvas1Loc.y = this.cells[this.actor.row][this.actor.col].y - this.canvas1.height/2;
    this.canvas1Loc.x = this.cells[this.actor.row][this.actor.col].x - this.canvas1.width/2;
    for(let r = 0; r < this.cells.length; r++){

      for(let c = 0; c < this.nCols; c++){
        //calls set neighbors for every cell
        this.cells[r][c].setNeighbors();
      }
    }






    // canvas2 is scaled according to the ratio of its
    // height and width to the height and width of the world
    // so that the entire world fits within canvas2
    this.scaleX = this.canvas2.width / this.world.width;
    this.scaleY = this.canvas2.height / this.world.height;
    // add an event handler such that the a, s, w, d keys
    // will reposition the canvas within the world.
    // window.addEventListener("keypress", function (event) {
    //   switch (event.code) {
    //     case "KeyW":
    //     if (ecoSystem.canvas1Loc.y + 100 > ecoSystem.world.top)
    //     ecoSystem.canvas1Loc.y -= 20;
    //     break;
    //     case "KeyS":
    //     if (ecoSystem.canvas1Loc.y + ecoSystem.canvas1.height - 100 < ecoSystem.world.bottom)
    //     ecoSystem.canvas1Loc.y += 20;
    //     break;
    //     case "KeyA":
    //     if (ecoSystem.canvas1Loc.x + 100 > ecoSystem.world.left)
    //     ecoSystem.canvas1Loc.x -= 20;
    //     break;
    //     case "KeyD":
    //     if (ecoSystem.canvas1Loc.x + ecoSystem.canvas1.width - 100 < ecoSystem.world.right)
    //     ecoSystem.canvas1Loc.x += 20;
    //     break;
    //     break;
    //   }
    // }, false);
    window.addEventListener("keypress", function (event) {
      let actor = ecoSystem.actor;
      let actorCell = ecoSystem.cells[actor.row][actor.col];
      switch (event.code) {
        case "KeyW":
        if(actorCell.north != 0){
            actor.row = actorCell.north.row;
        }
        break;
        case "KeyS":
        if(actorCell.south != 0){
            actor.row = actorCell.south.row;
        }
        break;
        case "KeyA":
        if(actorCell.west != 0){
            actor.col = actorCell.west.column;
        }
        break;
        case "KeyD":
        if(actorCell.east != 0){
            actor.col = actorCell.east.column;
        }
        break;
        break;
      }
      ecoSystem.canvas1Loc.y = ecoSystem.cells[actor.row][actor.col].y - ecoSystem.canvas1.height/2;
      ecoSystem.canvas1Loc.x = ecoSystem.cells[actor.row][actor.col].x - ecoSystem.canvas1.width/2;
    }, false);

    window.addEventListener("click", function (event2) {
      console.log(ecoSystem.canvas1Loc.x);
      let cX = event2.x+ecoSystem.canvas1Loc.x;
      let cY = event2.y+ecoSystem.canvas1Loc.y;
      console.log("x: " + cX + " y: " + cY);
      let row = Math.round(Math.round(cX / ecoSystem.cellWidth) +ecoSystem.nRows/2-1);
      let col = Math.round(Math.round(-(cY / ecoSystem.cellHeight)) + ecoSystem.nCols/2);
      ecoSystem.cells[row][col].occupied = true;
      console.log("row: " + row + " col: " + col);
    }, false);
  }//  +++++++++++++++++++++++++++++++++++++++++++++++++++  end Constructor
  getObjects(){
    return this.objects;
  }
  // function to run the game each animation cycle
  run() {
    this.runCanvas();
    // run all the actors
  }

  runCanvas(){
    let ctx1 = this.context1;
    let cnv1 = this.canvas1;
    let ctx2 = this.context2;
    let cnv2 = this.canvas2;
    ctx1.fillStyle = "#505050";
    ctx1.fillRect(0, 0, cnv1.width, cnv1.height);
    ctx2.fillStyle = "#505050";
    ctx2.fillRect(0, 0, cnv2.width, cnv2.height);

    ctx1.save();

    ctx1.translate(-this.canvas1Loc.x, -this.canvas1Loc.y);
    for(let r = 0; r < this.nRows; r++){
      for(let c = 0; c < this.nCols; c++){
        this.cells[r][c].run();
      }
    }
    this.actor.render();


    // draw the bounds of the world in canvas1
    // ctx1.beginPath();
    // ctx1.rect(this.world.left, this.world.top, this.world.width, this.world.height);
    // ctx1.strokeStyle = "green";
    // ctx1.lineWidth = 2;
    // ctx1.stroke();
    // draw the x and y axes of the world in canvas1
    // ctx1.beginPath();
    // ctx1.moveTo(this.world.left, 0);
    // ctx1.lineTo(this.world.right, 0);
    // ctx1.moveTo(0, this.world.top);
    // ctx1.lineTo(0, this.world.bottom);
    // ctx1.strokeStyle = "red";
    // ctx1.lineWidth = 2;
    // ctx1.stroke();

    ctx2.save();
    // scale canvas2 to contain the entire world
    ctx2.scale(this.scaleX, this.scaleY);
    // center the world in canvas2
    ctx2.translate(this.world.width / 2, this.world.height / 2);
    // draw the x and y axes of the world
    ctx2.beginPath();
    ctx2.moveTo(this.world.left, 0);
    ctx2.lineTo(this.world.right, 0);
    ctx2.moveTo(0, this.world.top);
    ctx2.lineTo(0, this.world.bottom);
    ctx2.strokeStyle = "red";
    ctx2.lineWidth = 1 / this.scaleX;
    ctx2.stroke();

    // draw the outline of canvas1 in canvas2
    let c1x = this.canvas1Loc.x;
    let c1y = this.canvas1Loc.y;
    ctx2.beginPath();
    ctx2.strokeStyle = "white";
    ctx2.lineWidth = 1 / this.scaleX;
    ctx2.rect(c1x, c1y, cnv1.width, cnv1.height);
    ctx2.stroke();
    ctx1.restore();
    ctx2.restore();
  }
}//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++  end Class
