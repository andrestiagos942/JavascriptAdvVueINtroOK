
// EJERCICIO 1
console.log("This is ex1.js ");

// EJERCICIO 2  
var user_name = "Andi";
var AñoNacimiento = "1993";
var AñoActual = "2022";
var Edad = AñoActual - AñoNacimiento;

var mensaje = "Hi, my name is " + user_name + " , I'm " + Edad.toString() + " years old and I'm learning Javascript";

document.getElementById("student_message").innerHTML = mensaje;


// EJERCICIO 3
var NUM_1 = parseInt(document.getElementById("num_1").innerHTML);
var NUM_2 = parseInt(document.getElementById("num_2").innerHTML);
var average = (NUM_1 + NUM_2) / 2;

document.getElementById("result").innerHTML =  average.toFixed(2);

// EJERCICIO 4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
phone3 = phone3.toString();

console.log(phone1.length == 9);
console.log(phone2.length == 9);
console.log(phone3.length == 9);


// EJERCICIO 5

console.log( Math.pow(32,6));

// EJERCICIO 6
/*
<p>a) var NAME;</p> 
<p>b) var $num1;</p>
<p>c) var typeof; RTA NO Ok, palabra reservada de JS</p>
<p>d) var first-name; RTA NO Ok, tiene guion</p>
<p>e) var attempt_2;</p> 
<p>f) var 2ndAttempt; RTA NO Ok,Empieza con numero</p>
<p>g) var full name; RTA NO Ok, tiene espacio</p>     
*/
// EJERCICIO 7 


var quantity = "25"; // el 25 no es numero, es string 
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 2525 // en referencia al comentario "25", se concatenan
console.log( (7+5) / number + 2 ); 4 // simple matematica
console.log(pressure);  undefined 
console.log(temperature); null 
console.log(typeof pressure); undefined
console.log(typeof temperature); objecto 

// EJERCICIO 8
/*
var url1 = "https://" + document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML = url1;

var url2 = (document.getElementById("url_3").innerHTML).replace("https://", " ");
document.getElementById("url_4").innerHTML = url2;
*/

