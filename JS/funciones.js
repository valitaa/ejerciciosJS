// ejercicio 1 el menor de los numeros
/*function numeros(n1 , n2 , n3){
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
}*/

//ejercicio 3
/*function ordenados(number1 , number2 , number3){
	if(number1 > number2 && number1 > number3){
		if (number2 > number3) {
			alert("El orden de mayor a menor es: " + number1 + "  " + number2 + "  " + number3);
		}
		else{
			alert("El orden de mayor a menor es: " + number1 + "  " + number3 + "  " + number2);
		}
	}
	else{
		if(number2 > number3 && number2 > number1){
			if(number1 > number3){
				alert("El orden de mayor a menor es: " + number2 + "  " + number1 + "  " + number3);	
			}
			else{
				alert("El orden de mayor a menor es: " + number2 + "  " + number3 + "  " + number1);
			}
		}
		else{
			if(number3 > number1 && number3 > number2){
				if(number1 > number2){
					alert("El orden de mayor a menor es: " + number3 + "  " + number1 + "  " + number2);
				}
				else{
					alert("El orden de mayor a menor es: " + number3 + "  " + number2 + "  " + number1);
				}
			}
		}
	}
}
var number1 , number2 , number3;*/

//ejercicio 4 mayuscula o miniscula
function letras (cadena){
	if(cadena == cadena.toUpperCase()){
		console.log("La cadena esta en Mayusculas");
	}
	else{
		if(cadena == cadena.toLowerCase()){
			console.log("La cadena esta en Minusculas");
		}
		else{
			console.log("La cadena es una mezcla de Minusculas y Mayusculas")
		}
	}
}

//ejercicio 5
function reverse(s){
    return s.split("").reverse().join("");//da vuelta las letras y las convierte en string
}
function frase(cadena){
	cadena = cadena.replace(/\s/g, '');// para que me quite todos los espacios
	cadena = cadena.toLowerCase();//para que todas las letras sean minusculas
	if(cadena == reverse(cadena)){ //llamo en reverse a la cadena para que me realice la otra funcion junto con cadena
		console.log("Es un polindromo ");
	}
	else{
		console.log("No es un polindromo ")
	}
}

//ejercicio 6 
function operaciones(numeros){
	if(operacion == suma){
		alert(respuesta);
	}
	else{
		if(operacion == resta){
			alert(respuesta);
		}
		else{
			if(operacion == division){
				alert(respuesta);
			}
			else{
				alert(respuesta);
			}
		}
	}
}
var numero1 = parseInt(prompt("Ingrese el primer numero"));
var numero2 = parseInt(prompt("Ingrese el segundo numero"));
var operacion = prompt("Ingrese que operacion desea realizar: suma, resta, multiplicacion o division ");
var suma ,  division , resta , multiplicacion, respuesta;
suma = (numero1 + numero2);
resta = (numero1 - numero2);
division = (numero1 / numero2);
multiplicacion = (numero1 * numero2);
respuesta = operacion;







