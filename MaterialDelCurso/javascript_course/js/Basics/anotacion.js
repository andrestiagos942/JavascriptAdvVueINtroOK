

/*alert("prueba de alerta");*/

//Comentarios 
//console.log("Statement 1");
//console.log("Statement 2");

/* *********************** */
// V4 - trabajando con el DOM = Document Object Model
/* *********************** */
/* Llamar al contenido del html */
//document.getElementById("blue_box").innerHTML;
/*  editar el contenido */
//document.getElementById("blue_box").innerHTML = "lala";
/*  editar el contenido + html interno */
//document.getElementById("blue_box").innerHTML = "<h1>lala</h1>";
/*  editar el contenido + html interno y mostrarlo por consola */
//console.log( document.getElementById("blue_box").innerHTML = "<h1>lala</h1>");


/* video 6
// declarar variable nombre
var user_name = "Andi";
// mostrar en consola la variable
console.log(user_name);
// recuperar id por elemento y con propiedad de edicion html el contenido del mensaje del input 
document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";
v6*/

/*v7
// variable 
var firstName = "John";  
// tipo de varible y variable a revisar
typeof firstName

// concateneishonship

    var Nombre = "Andi";
    var Descripcion = "Rey";

    var fullName = Nombre + " " + Descripcion;

    console.log(fullName); 

    // The result will be "Andi Rey"

    // Therefore the plus sign (+) is used for concatenation with string values.


    //


//     Length and Index

    //conteo de caracteres en la variable
    Nombre.length 
    // llamado al caracter de la posicion 0 = 1 ( en este caso A)
    Nombre[0]



v7*/

/*v8 */
// Numbers
 var birthYear = 1982; 
    var price = 16.99;  // decimal places must be separated by a dot.
    var temperature = -5;
    
    var bigNumber = 2e45; 
    /* large numbers in Javascript can be represented by the exponential notation. 
    // This example means 2 x 1045 */



//Basic Math Operations

    var num1 = 20;
    var num2 = 3;

    var sum = num1 + num2;
    var subtraction = num1 - num2;
    var division = num1 / num2;
    var multiplication = num1 * num2;

    var average = (num1 + num2) / 2;

    /*
    Parenthesis can be used to form expressions. In this case it was used to define the order
    of the operations. Without parenthesis, the division would have been done before the sum,
    resulting in an incorrect average.
    */



    // The Math Object
    var power = Math.pow(2,4);  /*  This does 24, which is 16. */

    var roundedNumber = Math.round(2.7); // Rounds to the nearest integer. Result: 3

    var roundUp = Math.ceil(4.3) // Rounds to the next integer. Result: 5
    
    var roundDown = Math.floor(4.6) // Rounds to the current integer. Result: 4

    var squareRoot = Math.sqrt(36) // Square root. Result: 6

    var randomNumber = Math.random() // The result is a random number between 0 and 1
//Methods of the number object
/*
    var myNumber = 3.78633;*/
    
    // toFixed() rounds it to a fixed number of decimal places
/*
    console.log( myNumber.toFixed(2) ); // will show 3.79
    console.log( myNumber.toFixed(4) ); // will show 3.7863
*/

/*v8*/

/*v9 

//Type conversions
    var firstNumber = "21"; 
    var secondNumber = "4";

    console.log(firstNumber + secondNumber);
    // The result will be 214 because the plus sign does concatenation on strings.

    var firstNumber = "21"; 
    var secondNumber = "4";

    console.log(  parseInt(firstNumber) +  parseInt(secondNumber) );
    //The result will be 25




v9*/


/*v10

// declarar variable ejemplo
age = 19
age > 18
true

----- ejercicio -----

 var orderValue = 100;

 if (orderValue >= 1000 ) {
    console.log(" sos elegible para financiar tu orden ");
 }
 else
 {
    console.log("Opciones de financiamiento no son permitidas para menores a 1k verde bb");    
 }
v10*/


/*v11
// variable vacia
var noValue;
// llamado a variable vacia
noValue


var FirstName = "Peter"; 
// llamado al caracter en posicion 4, inicio "0= primer posicion",
FirstName[4];
// = 'r'


// variable temperatura con valor
 var temperature = 35;

// llamado a temperatura y reemplazo de valor por nulo y dsp undefined
temperature
35
var temperature = null;
typeof temperature
'object'

// 
var temperature = undefined;
typeof temperature
'undefined'


v11*/

//--------------

/*v15*/
 /* 
 //   devuelve en consola 
function sum_numbers() {
        var num1 = 5;
        var num2 = 2;
        var sum  = num1 + num2;
        console.log(sum);   
    }
     sum_numbers();

    //   devuelve en consola 

   function sum_arg(num1,num2) {
        var sum  = num1 + num2;
        return(sum);   
    }

    var average = sum_arg(2,3) / 2 ;
    console.log(average);

    //   devuelve en consola 
    function sum_arg(num1,num2) {
        var sum  = num1 + num2;
        return(sum);   
    }
      var average = sum_arg(2,3) / 2 ;
      console.log(average); 

    // ultimo ejercicio clase 

    function sum_arg(num1,num2) {
        var sum  = num1 + num2;
        return(sum);   
    }
    document.getElementById("sum_result").innerHTML = sum_arg(-27,55);
            */
/*v15*/


/*v16*/
/*
    var students = ["john", "Mary", "Paul"];
    var primeNumbers = [ 2, 3, 5, 7, 11, 13 ];
    var courses = [ "HTML", "Python", "PHP" ];

    // editar elementos array    
    // agrega al primero
    courses.unshift("Bootstrap");
    // agrega al ultimo
    courses.push("otrolenguaje");

    // Borra el primero
    courses.shift();
    // Borra el ultimo
    courses.pop();   

    // editar array por posicion [N°]
    courses[2] = "maque";


    // extraer parte of un array
    var students = [ "Peter" , "Joana", "Andrew", "Julio", "Kate", "Marie" ];
    console.log( students.slice(0,4) ); // posicion 1 a 5
    console.log( students.slice(-3,) ); // ultimas 3


    var IMPUESTOS = "rt123456789"
   console.log( IMPUESTOS.slice(0,10));
*/
/*v16*/

/*v17*/
/*
var employee = {
    'name': 'James Taylor',
    'yearOfBirth': 1948,
    'ID': 'SBJ0001',
    'role': 'IT Analyst'
}


employee.role = 'IT Manager';
employee.pasport = '12354678';
*/
var courses = [
    {
        'title': 'Learn code in Python 3',
        'reviews': 6802,
        'students': 130129,
        'categories': ['programming', 'technology']
    },

    {
        'title': 'Learn PHP -  Beginner to Advanced',
        'reviews': 1204,
        'students': 30521,
        'categories': ['web development', 'programming']
    },

    {
        'title': 'Learn Microsoft Excel 2020',
        'reviews': 4209,
        'students': 18560,
        'categories': ['productivity', 'business']
    }
    
];

/*v17*/
