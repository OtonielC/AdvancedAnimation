function Game(){

    this.gamePaused = false;    // the game may be paused or not
    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    // get the context
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = this.canvas.getContext('2d'); // This is the context

    //   create the array of boid objects
    this.boids = [];
    this.balls = [];
    let numBalls = 15;
    for(var i = 0; i < numBalls; i++){
        let rad = 20;
        let clr = "red";
        this.balls.push(new Ball(this.canvas,rad, clr)); // add new boid to array
    }

    for(let i = 0; i < 20; i++){
      this.balls.push(new Ball(this.canvas.width/2, this.canvas.height/2));
    }
    for(let i = 0; i < 20; i++){
      this.boids.push(new Boid(this.canvas.width/2, this.canvas.height/2));
    }








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
}//++++++++++++++++++++++  end game constructor


// function to run the game each animation cycle
Game.prototype.run = function(){
    for(let i = 0; i < this.boids.length; i++){
      this.boids[i].run();    // run each boid
   }
   for(let i = 0; i < this.balls.length; i++){
     this.balls[i].run();    // run each boid
  }
}
