'use strict'

var arryNumeroUno = new Array(2); //Objeto
var arryNumeroDos = new Array(); //Objeto




for (let index = 0; index < arryNumeroUno.length; index++) 
{
    arryNumeroUno[index] = Number(prompt("Por favor ingrese 2 numeros"))
}

for (let index = 0; index < arryNumeroUno.length; index++) 
{
    arryNumeroDos[index]=(arryNumeroUno[index] * 2);
}


//Imprimir



var resul=document.getElementById("resultado");

resul.innerHTML ="Numeros Multiplicados por 2"+"<br/>"+"<br/>"; 

for(let index = 0; index < arryNumeroDos.length; index++)
{
    resul.innerHTML +="El número es: " + arryNumeroDos[index] +"<br/>"; 
}

