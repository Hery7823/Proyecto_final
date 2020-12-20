'use strict'

var NumeroEntero = new Array(10); //Objeto
let numeroMayor = 0;
let seRepite = 0;


for (let index = 0; index < NumeroEntero.length; index++) 
{
    NumeroEntero[index] = Math.round( Math.random() * (99),1)
}

//Imprimir
var resul=document.getElementById("resultado");

for (let index = 0; index < NumeroEntero.length; index++) 
{  

    if( NumeroEntero[index] > numeroMayor )
    {
        numeroMayor = NumeroEntero[index];
        
    }

    resul.innerHTML +="El número es: " + NumeroEntero[index] +"<br/>"; 
}
for(let index = 0; index < NumeroEntero.length; index++)
{
    if(numeroMayor == NumeroEntero[index] )
    {
        seRepite += 1;
    }
}

resul.innerHTML +="El número Mayor es : " + numeroMayor +" y se repite "+seRepite+"<br/>"; 
