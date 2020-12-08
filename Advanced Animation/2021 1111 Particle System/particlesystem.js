//  Particle System  constructor function +++++++++++++++++++++++++++++

let particles = [];

function ParticleSystem(){


}

  //  placing methods in the prototype
  ParticleSystem.prototype.run = function(){
    for(let i = 0; i < particles.length; i++){
        particles.add(new Particle());
    }
  }
