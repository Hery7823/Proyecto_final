"use strict";

var lista_Nombres = ['Anacleto','Valloleidys','Temistocles']; //Objeto
var tipoVenta = new Array(); //Objeto
var valorVenta = new Array(); //Objeto
let contador = 0;
var respuesta = 'y';
let sumatoria15 = 0;
let sumatoria10 = 0;
let sumatoria5 = 0;
let sumatorias = 0;
let codigo;


var resul = document.getElementById("resultado");
for (;;) {
  codigo=Number(prompt('Ingrese codigo de mesero'))
  if (codigo === 0 || codigo === 1 || codigo === 2) {
    break;
  } else{
    alert('codigo de mesero no Valido')
  }
  
}


for (;;) 
{
  
  tipoVenta[contador] = Number(prompt("Tipo de venta => 1: De contado. 2: Cheque. 3: Tarjeta ?"));
  valorVenta[contador] =  Number(prompt("Valor de la venta"));
  contador++;
  respuesta = prompt('Deseas continuar? y / n');
  if (respuesta == 'n') 
  {
    break;
  }

}

for (let index = 0; index < tipoVenta.length; index++) 
{
  if (tipoVenta[index] == '1')
  {
    sumatoria15 += (valorVenta[index] * 0.15);    
  }
  else if(tipoVenta[index] == '2')
  {
    sumatoria10 += (valorVenta[index] * 0.1);  
  }
  else
  {
    sumatoria5 += (valorVenta[index] * 0.05); 
  }
  
}
sumatorias = (sumatoria15 + sumatoria10 + sumatoria5) * 1.07; 



resul.innerHTML += lista_Nombres[codigo]+" => comisiones totales: " + sumatorias.toFixed(2) +"<br>";




