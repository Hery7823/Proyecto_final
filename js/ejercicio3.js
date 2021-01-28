'use strict'

var arryNumeroUno = new Array(1); //Objeto
var arryNumeroDos = new Array(1); //Objeto
var arryNumeroTres = new Array(); //Objeto


for (let index = 0; index < arryNumeroUno.length; index++) 
{
    arryNumeroUno[index] = Number(prompt("Ejercicio 3: Por favor ingrese un numero para el Array n° 1"));
}
for (let index = 0; index < arryNumeroDos.length; index++) 
{
    arryNumeroDos[index] = Number(prompt("Ejercicio 3: Por favor ingrese un numero para el Array n° 2"));
}

//Imprimir

arryNumeroTres = arryNumeroUno.concat(arryNumeroDos);

var resul=document.getElementById("resultado");

resul.innerHTML ="Numeros Ingresados para el Array n° 3 "+"<br/>"+"<br/>"; 

for(let index = 0; index < arryNumeroTres.length; index++)
{
    resul.innerHTML +="número: " + arryNumeroTres[index] +"<br/>"; 
}
