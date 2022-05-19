

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

// declarar variable nombre
var user_name = "Andi";
// mostrar en consola la variable
console.log(user_name);
// recuperar id por elemento y con propiedad de edicion html el contenido del mensaje del input 
document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";