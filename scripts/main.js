var mer = document.querySelector('#Mercurius');
var ven = document.querySelector('#Venus');
var aard = document.querySelector('#Aarde');
var mars = document.querySelector('#Mars');
var jup = document.querySelector('#Jupiter');
var sat = document.querySelector('#Saturnus');
var ura = document.querySelector('#Uranus');
var nep = document.querySelector('#Neptunes');
var plu = document.querySelector('#Pluto');

function spin(planet){
console.log(planet.object3D.position.x);
// for (var i = 0; planet.object3D.position.x > 0; i++) {
//   // planet.object3D.position.x -= i;
// }

if (planet.object3D.position.x > 0 && planet.object3D.position.z >= -50){
planet.object3D.position.x -= 1;
planet.object3D.position.z += 1;
}  else if (planet.object3D.position.x <= 0 && planet.object3D.position.z >= -50) {
  planet.object3D.position.x -= 1;
  planet.object3D.position.z -= 1;
} else if (planet.object3D.position.x <= 0 && planet.object3D.position.z <= -50){
  planet.object3D.position.x += 1;
  planet.object3D.position.z -= 1;
} else if (planet.object3D.position.x >= 0 && planet.object3D.position.z <= -50){
  planet.object3D.position.x += 1;
  planet.object3D.position.z += 1;
}



// myOtherBox.object3D.rotation.x += rotationSpeed;
// myOtherBox.object3D.rotation.y += rotationSpeed;
// myOtherBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(function(){
  spin(mer);
}, 100);

setInterval(function(){
  spin(ven);
}, 100);


setInterval(function(){
  spin(aard);
}, 100);


setInterval(function(){
  spin(mars);
}, 100);


setInterval(function(){
  spin(jup);
}, 100);


setInterval(function(){
  spin(sat);
}, 100);


setInterval(function(){
  spin(ura);
}, 100);


setInterval(function(){
  spin(nep);
}, 100);


setInterval(function(){
  spin(plu);
}, 100);
