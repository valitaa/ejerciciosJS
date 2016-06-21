//ejercicio3
/*var num_uno;

var num_uno = prompt("Ingrese el numero");

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

if (precio > 250.000) {
	precio=precio*descuento;
	alert("El precio es:" + precio);
}
else{
	precio=precio*descuento2;
	alert("El precio es:" + precio);
}*/
//ejercicio 5 El mayor de los numeros
var numeros;
var a;
var b;
var c;

var a= !isNaN(parseInt(prompt("Ingrese el primer numero")));
var b= !isNaN(parseInt(prompt("Ingrese el segundo numero")));
var c= !isNaN(parseInt(prompt("Ingrese el tercer numero")));

if(a>b && a>c){
	alert("El primer numero es mayor");
}
else{
	if(b>a && b>c){
		alert("El segundo numero es mayor");
	}
	else{
		alert("El tercer numero es mayor");
	}
}

/*//ejercicio 1 while , suma 10 nuemeros
var total, i;
total =0;
i= 10;
while (i>0){
	i --;
	total = total+ parseInt(prompt("Numero, quedan"+" " + (i+1) + " "+ "numeros"));
}
alert("La suma es: "+total);

//ejercicio 8 Elevar un num entero a la N
var potencia, base, total;
base=parseInt(prompt("Numero Base"))
potencia=parseInt(prompt("Numero Potencia"));
total=base;// La primera vez
//utilizo for porque se cuantas veces va la repeticion (potencia)

for (var i=0; i<potencia-1; i++){
	total=total*base;
}
alert(base+" elevado a "+ potencia+ " es igual a "+ total)

//ejercicio 2 Do while, suma de 10 numeros
/*var total, i;
total=0;
i=10;
do{
	i --;
	total = total + parseInt(prompt("Numero"));
}while(i<0)
alert("La suma total es:" + total);*/

//ejercicio 6 Triangulo
/*for(var i = 1; i <= 22; i++){
	for(var j = 1; j <= 22; j++){
		for(var k = 1; k <= 22; k++){
			if((i*i)+(j*j) === (k*k)){
				console.log("("+ i +"," + j + "," + k +")");
			}
		}
	}
}*/
//ejercicio 4 Edad Promedio







