'use strict'

var arryNumeroUno = new Array(5); //Objeto
var arryNumeroDos = new Array(5); //Objeto
var arryNumeroTres = new Array(); //Objeto
var numerosElegidos = 0;

function agregarNumeros(numerosElegidos) {
    var num = numerosElegidos
    return num;
}



for (let index = 0; index < arryNumeroUno.length; index++) 
{
    arryNumeroUno[index] = agregarNumeros(); //Number(prompt("#: "+(index + 1)+" Por favor ingrese 10 numeros"))
}
for (let index = 0; index < arryNumeroDos.length; index++) 
{
    arryNumeroDos[index] ;//Number(prompt("#: "+(index + 6)+" Por favor ingrese 10 numeros"))
}

//Imprimir

arryNumeroTres = arryNumeroUno.concat(arryNumeroDos);

var resul=document.getElementById("resultado");

resul.innerHTML ="Numeros Ingresados"+"<br/>"+"<br/>"; 

for(let index = 0; index < arryNumeroTres.length; index++)
{
    resul.innerHTML +="número: " + arryNumeroTres[index] +"<br/>"; 
}

const gallery = document.getElementById('gallery');
gallery.addEventListener('click', (e)=>{
    numerosElegidos = Number(e.target.textContent);
    console.log(agregarNumeros(numerosElegidos))
    
})

