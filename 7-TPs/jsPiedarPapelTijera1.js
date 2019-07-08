/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var maquina;
var humano;

function comenzar(){
    maquina = Math.floor( (Math.random() * 3 ) + 1);
    alert("Se generó el numero de la wea");
}

function piedra(){
    humano = 1;  
    resultado(humano);  
}

function papel(){
    humano = 2;
    resultado(humano);
}

function tijera(){
    humano = 3;
    resultado(humano);
}

function resultado(humano){
    if(humano == maquina){
        alert("Empate " + humano + " - " + maquina);
    }

    if (humano === 1 && maquina === 2) {
        alert("Derrota " + humano + " - " + maquina);
    }

    if (humano === 1 && maquina === 3) {
        alert("Victoria " + humano + " - " + maquina);
    }

    if (humano === 2 && maquina === 1) {
        alert("Victoria " + humano + " - " + maquina);
    }

    if (humano === 2 && maquina === 3) {
        alert("Derrota " + humano + " - " + maquina);
    }

    if (humano === 3 && maquina === 1) {
        alert("Derrota " + humano + " - " + maquina);
    }

    if (humano === 3 && maquina === 2) {
        alert("Victoria " + humano + " - " + maquina);
    }



}