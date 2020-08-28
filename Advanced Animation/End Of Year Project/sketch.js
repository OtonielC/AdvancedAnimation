//Otoniel Carreon
//End of Year Project
var button = document.createElement("button");
button.innerHTML = "Say Hi";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  alert("did something");
});
