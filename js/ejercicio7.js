'use strict'

var numeros = new Array(); //Objeto

var resul=document.getElementById("resultado");

let numero = 0;
let encontrado = 0;

for (let index = 0; index < 10 ; index++) 
{
    numeros[index] = Math.round( Math.random() * (20));
}

numero = Number(prompt("Por favor adivine un numero del 0 al 20"));

//Imprimir

for (let index = 0; index < 10 ; index++) 
{
    
    if( numero == numeros[index] )
    {
        
        encontrado=index; 
        resul.innerHTML ="Numero: "+numero+ " Encontrado en la posicion:"+ (encontrado)+"<br><br>"; 
        break;
    }
    else
    {
        resul.innerHTML ="Numero "+numero+" No encontrado Xp "+"<br><br>";   
    }
    
} 


for (let index = 0; index < 10 ; index++) 
{
    resul.innerHTML +=numeros[index]+"<br>";   
}













 






