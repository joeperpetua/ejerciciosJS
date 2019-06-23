/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


var $largo = document.getElementById('Largo');
var $ancho = document.getElementById('Ancho');
var $radio = document.getElementById('Radio');


function Rectangulo (){
    var largo = parseFloat($largo.value);
    var ancho = parseFloat($ancho.value);
    var res = Math.ceil((2 * (largo + ancho)) * 3);

    alert("Cantidad de alambre a comprar: " + res);

}


function Circulo () {
    var radio = parseFloat($radio.value);
    var res = Math.ceil((2 * radio * Math.PI) * 3);
    
    alert("Metros de alambre a comprar: " + res);
}


function Materiales () {
    var largo = parseFloat($largo.value);
    var ancho = parseFloat($ancho.value);
    var m2 = Math.ceil(largo * ancho);
    var cal = m2 * 3;
    var cemento = m2 * 2;

    alert("Para cubrir un total de " + m2 + " m2, se deben adquirir " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");
    
}