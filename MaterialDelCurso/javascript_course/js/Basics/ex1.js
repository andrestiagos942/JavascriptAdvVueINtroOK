
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