

/*alert("prueba de alerta");*/

//Comentarios 
console.log("Statement 1");
console.log("Statement 2");


// V4 - trabajando con el DOM = Document Object Model

/* Llamar al contenido del html */
//document.getElementById("blue_box").innerHTML;
/*  editar el contenido */
//document.getElementById("blue_box").innerHTML = "lala";
/*  editar el contenido + html interno */
//document.getElementById("blue_box").innerHTML = "<h1>lala</h1>";
/*  editar el contenido + html interno y mostrarlo por consola */
console.log( document.getElementById("blue_box").innerHTML = "<h1>lala</h1>");
