function Game(x, y){
  this.ga = new GameArea();
  this.canvas = document.getElementById("cnv");
  this.context = this.canvas.getContext("2d");
  this.gamePaused = false;
  this.createMovers(this.canvas, 55);

  let tiles = this.ga.tiles;

  for(let i = 0; i < tiles.length; i++){
    tiles.[i].addEventListener('mouseover', function(){this.style.backgroundColor = "#ac8fe3"}, false);
    tiles[i].addEventListener('mouseout', function(){this.style.backgroundColor = "#d5dee0"}, false);
    tiles[i].addEventListener('click', function(){game.gamePaused = !game.gamePaused; console.log("Mouse Clicked")}, false);
  }
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Game.prototype.run = function(){

}

Game.prototype.createMovers = function(canvas, numMovers){
  this.movers = [];
  for(let i = 0; i < numMovers; i++){
    let x,y,dx,dy,radius, clr, r, g, b, numOrbs;
    radius = 7;
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;
    dx = Math.random() * 2-1;
    dy = Math.random() * 2-1;
    r = Math.random() * 200+55;
    g = Math.random() * 155;
    b = Math.random() * 155;
    clr = "rgba(" + r + ", " + g + ", " + b + ")"
    numOrbs = Math.floor(Math.random()*5 +3);
    this.movers[i] = new Mover(x, y, dx, dy, radius, clr, numOrbs);
  }
}
