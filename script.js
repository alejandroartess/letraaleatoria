//Obtener numero aleatorio
var numero=0
var maximo=97;
var minimo=122;

numero=Math.random() * (maximo-minimo) + minimo;
numero=Math.round(numero);
console.log(numero)

var letra=String.fromCharCode(numero);
console.log(letra);

var palabra=letra;
var i=5
//Letra obtenida desde usuario
var letrausuario=0
while ((i>0)&&(letrausuario!=palabra)) {


  letrausuario=prompt("Introduce una letra!");

  console.log(letrausuario);
  console.log("Intentos=" +  i);
  i--;
/*
if (letrausuario!=palabra) {

alert("Has fallado,te quedan estos intentos-->" + i)
}*/

}
//Respuesta

if (letrausuario==palabra) {
  alert("Has acertadoo!")
}
else {
  alert("NO LO HAS CONSEGUIDO!")
}
