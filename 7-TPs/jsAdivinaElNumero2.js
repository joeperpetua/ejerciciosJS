/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var $guess = document.getElementById('numero');
var $mostrar = document.getElementById('intentos');
var numeroSecreto; 
var tries;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
  	tries = 0;
  	$mostrar.value = tries;
  	$guess.value = 0;
	alert("Se generó un nuevo numero a adivinar");

}

function verificar()
{
	var guess = parseInt($guess.value);
	tries++;
	$mostrar.value = tries;  

	if (guess === numeroSecreto){

		switch (tries) {
			case 1:
				alert("usted es un Psíquico");
				break;
			
			case 2:
				alert("Excelente percepción");
				break;
				
			case 3:
				alert("Esto es suerte");
				break;	
			
			case 4:
				alert("Excelente técnica");
				break;
				
			case 5:
				alert("Usted está en la media");
				break;
		}

		if(tries > 5 && tries < 11){
			alert("Falta técnica");
		}

		if(tries > 10){
			alert("Afortunado en el amor!!");
		}
	}else if(guess > numeroSecreto){
		alert("te pasaste crack");
	  }else{
		alert("cortina cortina, probá con un numero más grande");
	}
	

}