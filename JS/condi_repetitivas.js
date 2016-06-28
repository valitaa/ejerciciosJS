//ejercicio 2
/* Entrada numero y salida factorial de numero*/
function factorial (numero) {
	var resultado = 1;
	for(var i = 1; i <= numero; i++){
		resultado = i * resultado;
	}
	return resultado;
}
// ejercicio 3 
var ejerc = alert("Si su primer numero va a ser el mayor, se le mostara la suma y resta de ambos; y si es al reves se hara una multiplicacion y division.")
var numeros1 = parseInt(prompt("Ingrese el primer numero"));
var numeros2 = parseInt(prompt("Ingrese el segundo numero"));
var resultado1 , resultado2;
if(numeros1 > numeros2){
	resultado1 = (numeros1 + numeros2);
	resultado2 = (numeros1 + numeros2);
}
else{
	resultado1 = (numeros1 * numeros2);
	resultado2 = (numeros1 / numeros2);
}
alert(resultado1);
alert(resultado2);

//ejercicio 4


// ejemplo de objetooo!

var profesor = {
	nombre: "Blanca",
	apellido: "Perez",
	saludar : function(){
		console.log("Hola mundo, mi nombre es " + this.nombre + "  " + this.apellido )
	}
}
console.log(profesor.nombre);
console.log(profesor.saludar());

//ejercicio 2 objetos
var mesActual = parseInt(prompt("Ingrese mes actual"), 10)

