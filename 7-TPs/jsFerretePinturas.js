/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var $temp = document.getElementById('Temperatura');

function FahrenheitCentigrados (){
    var temp = parseFloat($temp.value);

    var res = ((temp - 32) / 1.8).toFixed(1) ;
    alert(temp + "F° = " + res + "C°");
}

function CentigradosFahrenheit () {
    var temp = parseFloat($temp.value);
    
    var res = ((temp * 1.8) + 32).toFixed(1);
    alert(temp + "C° = " + res + "F°");
}
