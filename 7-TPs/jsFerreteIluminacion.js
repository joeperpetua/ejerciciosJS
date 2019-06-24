/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

var $cant = document.getElementById('Cantidad');
var $marca = document.getElementById('Marca');
var $mostrar = document.getElementById('precioDescuento');
var total;

function CalcularPrecio () {
     var cant = parseInt($cant.value);
     var marca = $marca.value;

     if(cant >= 6){
        total = 35 * cant * 0.5;
     }

     if (cant === 5 && marca === "ArgentinaLuz") {
        total = 35 * cant * 0.6;
     }else if(cant === 5){
        total = 35 * cant * 0.7;
     }

     if (cant === 4 && marca === "ArgentinaLuz" || cant === 4 && marca === "FelipeLamparas") {
        total = 35 * cant * 0.75;
     }else if(cant === 4){
        total = 35 * cant * 0.8;
     }

     if(cant === 3 && marca === "ArgentinaLuz"){
        total = 35 * cant * 0.85;
     }else if(cant === 3 && marca === "FelipeLamparas"){
        total = 35 * cant * 0.9;
     }else if(cant === 3){
        total = 35 * cant * 0.95;
     }

     if(total > 120){
         var imp = total * 0.1;
         total += imp;
         alert("IIBB Usted pago: " + imp);
     }


     $mostrar.value = total;
     total=0;
}
