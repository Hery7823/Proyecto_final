'use strict'

var arryNumeroUno = new Array(); //Objeto
let acumulador = 0;




for (let index = 0; index < 2 ; index++) 
{
    arryNumeroUno[index] = Number(prompt("Iteracion #: "+(index + 1)+" Por favor ingrese 2 numeros"))
}

for (let index = 0; index < arryNumeroUno.length; index++) 
{
    acumulador += arryNumeroUno[index];
}


//Imprimir



var resul=document.getElementById("resultado");

resul.innerHTML ="Promedio"+"<br/>"+"<br/>";     
resul.innerHTML +=(acumulador/2).toFixed(2); 


