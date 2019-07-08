/*Ahora debemos informar cuantas veces se ganó,
 perdió o empató desde la última recarga de página.*/
 
 var empates = 0;
 var victorias = 0;
 var derrotas = 0;


var $showE = document.getElementById('empatadas');
var $showG = document.getElementById('ganadas');
var $showP = document.getElementById('perdidas');

var maquina;
var humano;

function comenzar(){
    maquina = Math.floor( (Math.random() * 3 ) + 1);
}

function piedra(){
    humano = 1;  
    resultado();  
}

function papel(){
    humano = 2;
    resultado();
}

function tijera(){
    humano = 3;
    resultado();
}

function resultado(){


    if(humano == maquina){
		alert("Empate");
		empates++;
    }

    if (humano === 1 && maquina === 2) {
		alert("Derrota");
		derrotas++;
    }

    if (humano === 1 && maquina === 3) {
		alert("Victoria");
		victorias++;
    }

    if (humano === 2 && maquina === 1) {
		alert("Victoria");
		victorias++;
    }

    if (humano === 2 && maquina === 3) {
		alert("Derrota");
		derrotas++;
    }

    if (humano === 3 && maquina === 1) {
		alert("Derrota");
		derrotas++;
    }

    if (humano === 3 && maquina === 2) {
		alert("Victoria");
		victorias++;
    }

	$showE.value = empates;
	$showG.value = victorias;
	$showP.value = derrotas;
	
	comenzar();
}

