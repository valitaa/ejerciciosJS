//ejercicio 1
var num1, num2, resultado;
do{
	num1 = parseInt(prompt("Ingresar primer numero:" ));
}while(isNaN( num1));

do{
	num2 = parseInt(prompt("Ingresar segundo numero:" ));
}while(num2 == 0 || isNaN(num2));

resultado = (num1/num2);

alert(resultado);

//ejercicio 2
var nombre, edad, respuesta;
nombre = prompt("Ingrese su nombre:");
do{
	edad = prompt("Ingrese su edad");
}while(isNaN(edad));
resultado ="Su nombre es " + nombre + " y a vivido " + (edad * 365) + " dias";
alert(resultado);

//ejercicio 3
var nombre, apellido, poblacion, output;
nombre = prompt("Ingrese su primer nombre : ");
apellido = prompt("Ingrese su primer apellido : ");
poblacion = prompt("Ingrese de la poblacion de la cual proviene : ");
output = nombre + apellido + poblacion;
alert(output);

//ejercicio 4
var valorx, valor;
valorx = parseInt(prompt("Ingrese el numero"));
valor = "Las sumas son: " + "     " +(valorx + 5) + "     " + (valorx + 10) + "     " + (valorx + 15);
alert(valor);

//ejercicio 5

