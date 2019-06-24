/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var $guess = document.getElementById('numero');
var $mostrar = document.getElementById('intentos');
var numeroSecreto; 
var tries;

function comenzar(){
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tries = 0;
  $mostrar.value = tries;
  $guess.value = 0;
	alert("Se generó un nuevo numero a adivinar");
}

function verificar(){
  var guess = parseInt($guess.value);
  tries++;
  $mostrar.value = tries;  

  if(guess === numeroSecreto){
    alert("ganaste en " + tries + " intentos troesma");
  }else if(guess > numeroSecreto){
    alert("te pasaste crack");
  }else{
    alert("cortina cortina, probá con un numero más grande");
  }
}