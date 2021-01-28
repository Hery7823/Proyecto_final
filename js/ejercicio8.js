"use strict";

var nombres = new Array(); //Objeto
var edades = new Array(); //Objeto
var genero = new Array(); //Objeto
var registro_carro = new Array(); //Objeto
let contador = 0;


var resul = document.getElementById("resultado");


alert("Registro de Datos");
for (let index = 0; index < 2; index++) 
{
  nombres[index] = prompt(
    "Registro: N° " + (index + 1) + " Por favor ingrese su nombre"
  );
  edades[index] = Number(prompt("Año de nacimiento"));
  genero[index] = Number(prompt("Su genero 1: Masculino ó 2: Femenino"));
  registro_carro[index] = Number(
    prompt("Registro del carro 1: Medellin ó 2: Otra Ciudad")
  );
}

resul.innerHTML +=
  "Nombres de los conductores del sexo femenino menores de 30 años" + "<br>";

for (let index = 0; index < 2; index++) {
  edades[index] = 2020 - edades[index];
}

for (let index = 0; index < 2; index++) {
  if (genero[index] == 2 && edades[index] < 30) {
    resul.innerHTML += nombres[index] + "<br>";
  }
}

resul.innerHTML +=
  "<br>Nombres de los conductores, su edad y vehiculos registrados en Medellin" + "<br>";

for (let index = 0; index < 2; index++) {
  if (registro_carro[index] == 1) {
    resul.innerHTML += nombres[index] + "<br>";
    resul.innerHTML += edades[index] + "<br>";
  }
}

for (let index = 0; index < 2; index++) {
  if (edades[index] < 25) {
    contador += 1;
  }
}

resul.innerHTML +=
  "<br>Porcentaje de menores de 25 Años<br>" +
  ((contador / 2) * 100).toFixed(2) +
  " %<br>";
  contador = 0;
for (let index = 0; index <23; index++) {
  if (genero[index] == 2) {
    contador += 1;
  }
}

resul.innerHTML +=
  "<br>Porcentaje de Genero Femenino<br>" +
  ((contador / 2) * 100).toFixed(2) +
  " %<br>";

  contador = 0;
for (let index = 0; index < 2; index++) {
  if (genero[index] == 1) {
    if (edades[index] > 12 && edades[index] < 30) {
      contador += 1;
    }
  }
}

resul.innerHTML +=
  "<br>Porcentaje de Genero Masculino entre 12 y 30 Años<br>" +
  ((contador / 2) * 100).toFixed(2) +
  " %<br>";
  contador = 0;

for (let index = 0; index < 2; index++) {
  contador = 0;
  if (registro_carro[index] == 2) {
    contador += 1;
  }
}

resul.innerHTML +=
  "<br>Porcentaje de carros registrados fuera de medellin<br>" +
  ((contador / 2) * 100).toFixed(2) +
  " %<br>";

