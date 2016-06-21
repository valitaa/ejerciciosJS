//ejercicios pseudocodigo simples y mult.
//ejercicio2
var num_uno;
var num_dos;

var num_uno= prompt("Ingrese el primer numero");
var num_dos=prompt("Ingrese el segundo numero");

if(num_uno > num_dos){
	alert("El primer numero es mayor");
}
else if(num_uno===num_dos){
	alert("Los numeros son iguales");
}
else{
	alert("EL segundo numero es mayor");	
}

//ejercicio3
var num_uno;

var num_uno = prompt("Ingrese el numero");
alert(num_uno);
if (num_uno > 0){
	alert("El numero es positivo");
}
else if(num_uno == 0){
	alert("El numero es cero");
}
else{
	alert("El numero es negativo");
}

//ejercicio4
var  precio;        
var descuento=0.85;
var descuento2=0.92;

var precio= prompt("Ingrese el monto");

if (precio > 250000) {
	precio=precio*descuento;
	alert("El precio es:" + precio);
}
else{
	precio=precio*descuento2;
	alert("El precio es:" + precio);
}
//ejercicio.js
/*function metros_a_pulgada(metros){
	var pulgadas;
	pulgadas=metros/ 0.0254;
	return pulgadas;
}

var metros= prompt("Porfavor ingrese los metros", "");
var pulgadas= metros_a_pulgada(metros);

alert("Las pulgadas son:" + pulgadas);

//ejercicio 3
function presupuesto(metros_cuadrados){
	var presupuesto;
	presupuesto=metros_cuadrados * precio;
	return presupuesto;
}

var metros_cuadrados= prompt("ingrese metros cuadrados","");
var presupuesto= presupuesto(metros_cuadrados);

alert("el presupesto es:" + precio);*/
//ejercicio 1
/*var num_uno;
var num_dos;
var resultado;

var num_uno= prompt("Ingrese el primer numero");
var num_dos=prompt("Ingrese el segundo numero");
var resultado= num_uno + num_dos;

alert("El total de la suma es:" + num_uno+num_dos);

//ejercicio2
var num_uno;
var num_dos;
var num_tres;
var promedio;

var num_uno= prompt("Ingrese el primer numero");
var num_dos=prompt("Ingrese el segundo numero");
var num_tres=prompt("Ingrese el tercer numero");
var promedio= num_uno + num_dos + num_tres / 3;

alert("Su promedio es:" + num_uno + num_dos + num_tres / 3);

//ejercicio3
var altura;
var base;
var area;

var altura= prompt("Ingrese la altura");
var base=prompt("Ingrese base");
var area= altura*base/2;

alert("Su area es:"+ altura*base/2)

//ejercicio 7
var m2;
var pintura;
var precio;

var m2= prompt("ingrese metros cuadrados");
var pintura= prompt("ingrese cantidad de pintura");
var precio= m2 * pintura;

alert("El precio total es:" + m2 * pintura);

//ejercicio 8
var km_recorrido;
var km_por_recorrer;
var boleto;

var km_recorrido= prompt("ingrese Porfavor cuanto kilometros ha recorrido");
var km_por_recorrer=prompt("ingrese cuantos kilometros le quedan por recorrer");
var boleto= km_recorrido * km_por_recorrer;

alert("El precio del boleto es:" + km_recorrido * km_por_recorrer);

//ejercicio 9
var duracion_llamada;
var minuto;
var costo;

var duracion_llamada= prompt("Cuanto duro tu llamada en minutos");
var minuto= prompt("Cuanto le cuesta el minuto")
var costo= duracion_llamada * minuto;

alert("El costo de la llamada es:" + duracion_llamada * minuto);

//ejercicio 10
var tiempo;
var habitacion;
var precio;

var tiempo= prompt("Cuanto noches desea reservar en el hotel");
var habitacion= prompt("Cuanto cuesta la habitacion que desea");
var precio= tiempo * habitacion;

alert("El costo de su estadia en el hotel es:" + tiempo*habitacion);*/


