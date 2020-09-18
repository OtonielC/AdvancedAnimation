//Otoniel Carreon
var ball = {
  radius: 3,
  diam: function(){
    2*this.radius;
  }
}

b1 = ballFactory(23);
function ballFactory(rad){
  var ball = {
    radius:rad,
    getDiameter:function(){
      return 2*rad;
    }
  }
  return ball;
}
