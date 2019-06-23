/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var $p1 = document.getElementById('PrecioUno');
var $p2 = document.getElementById('PrecioDos');
var $p3 = document.getElementById('PrecioTres');



function Sumar(){
    var p1 = parseInt($p1.value);
    var p2 = parseInt($p2.value);
    var p3 = parseInt($p3.value);

    alert(p1+p2+p3);	
}

function Promedio(){
    var p1 = parseInt($p1.value);
    var p2 = parseInt($p2.value);
    var p3 = parseInt($p3.value);

    alert((p1+p2+p3) / 3);
}

function PrecioFinal(){
    var p1 = parseInt($p1.value);
    var p2 = parseInt($p2.value);
    var p3 = parseInt($p3.value);

    alert((p1+p2+p3) * 1.21);
	
}