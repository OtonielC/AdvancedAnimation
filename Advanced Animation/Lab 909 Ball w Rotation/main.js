//Otoniel Carreon
 //Global variables
 let game;

window.onload = init;

function init(){
  game = new Game();
  animate();
}

function animate(){
  if(!game.gamePaused){
    let ctx = game.context;
    ctx.fillStyle = 'rbga(255,0,0,.35)';
    ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
    game.run();
  }
  requestAnimationFrame(animate);
}
