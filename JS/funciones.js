// ejercicio 1 el menor de los numeros
function numeros(n1 , n2 , n3){
	if(n1<n2 && n1<n3){
		console.log("El menor de los numeros es:" + n1);
	}
	else{
		if(n2<n1 && n2<n3){
			console.log("EL menor de los numeros es:" + n2);
		}
		else{
			console.log("El menor de los numeros es :" + n3);
		}
	}
}
var n1= parseInt(prompt("Ingrese el primer numero"));
var n2= parseInt(prompt("Ingrese el segundo numero"));
var n3= parseInt(prompt("Ingrese el tercer numero"));

//ejercicio 2
function parOimpar (numero) {
	if(numero % 2){
		console.log("El numero " + numero + " es impar.");
	}
	else{
		console.log("El numero " + numero + " es par");
	}
}

//ejercicio 3