//arreglo vocales
/*
var vocales;
vocales = ["a","e","i","o","u"];
for(var i = 0; i <=vocales.length; i++){
	console.log(vocales[i]);
}
*/

//concat (concatenar, juntar)
/*
var a = ["hola", "mundo"];
var b = ["Cruel"];
var c = a.concat(b);
var d = b.concat(a);
console.log(c);
console.log(d);
*/
//ejercicio array imrpimir posiciones pares
/*var numero = [1,"a","b","vale",5, "cami", 88, "aury", 42, 69];
for(var i = 1; i <= 9; i = i+2){
	posiciones_pares = console.log(numero[i]);
}*/
//calcular el dni ,pedir un numero y una letra
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
letra = letra.toUpperCase();
 
if(numero < 0 || numero > 99999999) {
  alert("El número proporciona cdo no es válido");
}
else {
  var letraCalculada = letras[numero % 23];
  if(letraCalculada != letra) {
    alert("La letra o el número proporcionados no son correctos");
  }
  else {
    alert("El número de DNI y su letra son correctos");
  }
}
 //ejercicio Añadir elementos a un array con push(Ciclo for)
 var nombres=["vale", "cami", "auri", "pame"];
 nombres.push("lore");
 console.log(nombres)

 //ejercicio3 
 var meses=["Enero ", "Febrero ", "Marzo ", "Abril ", "Mayo ", "Junio ", "Julio ", "Agosto ", "Septiembre ", "Octubre ", "Noviembre ", "Diciembre"];
 alert("Los meses del año son: " + meses);

 // ejercicio 4
var valores = [true, 5, false, "hola", "adios", 2];
var resultado = valores[3] > valores[4];
	alert(resultado);

var valor1 = valor[0];
var valor2 = valor[2];

var resultado = valor1 || valor2;
alert(resultado);

var resultado2 = valor1 && valor2;
alert(resultado2);
