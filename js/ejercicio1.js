

var NumeroEntero = new Array(10); //Objeto


for (let index = 0; index < NumeroEntero.length; index++) {
    NumeroEntero[index] = Math.round( Math.random() * (25),1)
}

//Imprimir
var resultado=document.getElementById("resultado");
for (let index = 0; index < NumeroEntero.length; index++) {
      resultado.innerHTML +="El número es: " + NumeroEntero[index] +"<br/>"; 
}


