var age=0;
var origen=('cualquierPais');

function isOldEnoughToVote(age) {
  
  // your code here
  var age=prompt('Que edad tienes?'+':');
  var origen= prompt('De que pais eres?'+':');
  if(age>=18 && origen=="americano"){
    var puedeVotar=('cualquierCosa');
    var puedeVotar=console.log('Ya que tienes '+age+'de edad'+': '+' y '+' eres americano'+' puedes votar.');
    console.log(puedeVotar);

  }
  else if  (age < 18 || origen !=="americano"){
    var puedeVotar= console.log('No cumples los requisitos para votar');
  };
  return isOldEnoughToVote(puedeVotar)
}
isOldEnoughToVote(console.log(puedeVotar));

