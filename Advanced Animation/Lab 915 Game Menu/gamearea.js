//Otoniel Carreon
function GameArea(){
    //  Wrapper Div
    this.wrapperDiv = document.getElementById("wrapperDiv");
    this.wrapperDiv.setAttribute("style","background-color:#00ffff; border: 5px solid black; width:900px; height:800px;");
    // create tileMenuDiv
    this.tileMenuDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.tileMenuDiv);
    this.tileMenuDiv.setAttribute("style","background-color:#033c4a; width:900px; height:100px; float:left;");
    this.tiles = [];
  for(let i = 0; i < 4; i++){
    this.tiles[i] = document.createElement("div");
    this.tileMenuDiv.appendChild(this.tiles[i]);
    this.tiles[i].setAttribute("style","background-color:#0055ff; width:100px; height:80px; float:left;");


    this.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
    function(){//  JavaScript has anonymous functions
      //  'this' is the listener target object: tile
      //  'this' does not refer to the PlayArea object
      this.style.backgroundColor = "#ac8fe3"
    },
    false);

    this.tiles[i].addEventListener('mouseout', function(){
      this.style.backgroundColor = "#d5dee0"
    },false);

    this.tiles[i].addEventListener('click', function(){
      game.gamePaused = !game.gamePaused;
      console.log("Mouse Clicked");
    },false);
  }
}
