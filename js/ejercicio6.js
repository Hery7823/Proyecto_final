'use strict'

var arryNombres = new Array(); //Objeto
var arryEdades = new Array(); //Objeto





for (let index = 0; index < 2 ; index++) 
{
    arryNombres[index] = prompt("Iteracion #: "+(index + 1)+" Por favor ingrese 2 nombres ");
}

for (let index = 0; index < 2; index++) 
{
    arryEdades[index] = prompt("Iteracion #: "+(index + 3)+" Por favor ingrese sus edades ");
}


//Imprimir



var resul=document.getElementById("resultado");

resul.innerHTML ="Nombres con sus edades."+"<br/>"+"<br/>";  

for (let index = 0; index < 2; index++) 
{
    resul.innerHTML += (arryNombres[index] + " Tiene " + arryEdades[index] + " años"+"<br>")
}




