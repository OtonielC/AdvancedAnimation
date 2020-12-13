let movers = [];
function Game(){
    this.ga = new GameArea();   // create all the dom elements
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d'); // This is the context
    this.gamePaused = false;    // the game may be paused or not
    this.createMovers(this.canvas, 55);

    //  Add event handlers to all tile objects
    for(let i = 0; i < this.ga.tiles.length; i++){
        this.ga.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
                                        function(){//  JavaScript has anonymous functions
                                          //  'this' is the listener target object: tile
                                          //  'this' does not refer to the game object
                                          this.style.backgroundColor = "#ac8fe3"
                                        },
                                        false);
        this.ga.tiles[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = "#d5dee0"
          },false);
        this.ga.tiles[i].addEventListener('click', function(){
            game.gamePaused = !game.gamePaused;
            console.log("Mouse Clicked");
          },false);
    }

    Game.prototype.run = function(){
      for(let i = 0; i < movers.length; i++){
        movers[i].run();    // run each boid
      }
    }

}//++++++++++++++++++++++  end game constructor

Game.prototype.createMovers = function(canvas, numMovers){
  for(let i = 0; i < numMovers; i++){
    var x, y, dx, dy, radius, clr, r, g, b, numOrbs;
    radius = 7;
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;
    dx = Math.random() * 2 - 1;
    dy = Math.random() * 2 - 1;
    r = Math.random() * 200 + 55;
    g = Math.random() * 155;
    b = Math.random() * 155;
    clr = 'rgba('+r +' ' + g + ' ' + b + ')';
    numOrbs = Math.floor(Math.random() * 5 + 3);

    movers[i] = new Mover(x, y, dx, dy, radius, clr, numOrbs);
  }
}
