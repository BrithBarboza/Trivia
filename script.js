const btn = document.getElementById('btn');
const nombre = document.getElementById('nombre');
const form1 = document.getElementById('form1');
const div = document.getElementById('flotante');

//Botón jugar
btn.addEventListener('click', () =>{
  if(nombre.value == "") {
    alert('Ingresa tu nombre')
  } else{
    document.getElementById("saludo").innerHTML = "¡Hola, " + nombre.value + "!";
    div.style.display = '';
    form1.style.display = 'none'; 
  }
});
//div contiene el primer forms
//form1 contiene las preguntas
//.addEventListener sets up a function that will be called whenever the specified event is delivered to the target.

//Botón Comprueba respuestas
const b1 = document.getElementById('b1')
b1.addEventListener('click', () => {
  
  if (document.getElementById('r1_1').checked) {
  document.getElementById("respuesta1Jugador").innerHTML = "Tus respuestas: <br> <br> Respuesta 1 es correcta <br>";
  } else {
  document.getElementById("respuesta1Jugador").innerHTML = "Tus respuestas: <br> <br> Respuesta 1 es incorrecta <br>";}
  //.innerHTML añade html dentro de un elemento base a su Id
  //.getElementById selecciona los elementos de cierto 
  //.checked el round button esta seleccionado

  if (document.getElementById('r2_3').checked) {
  document.getElementById("respuesta2Jugador").innerHTML = "Respuesta 2 es correcta <br>";
  } else {
  document.getElementById("respuesta2Jugador").innerHTML = "Respuesta 2 es incorrecta <br>";}

  if (document.getElementById('r3_2').checked) {
  document.getElementById("respuesta3Jugador").innerHTML = "Respuesta 3 es correcta <br> <br> ";
  } else {
  document.getElementById("respuesta3Jugador").innerHTML = "Respuesta 3 es incorrecta <br> <br> ";}

  document.getElementById("respuestasCorrectas").innerHTML = "Respuestas correctas: <br> <br> La conciencia del límite último de Carlos Calderón Fajardo <br>  Ciro Alegría  <br> Alejandra Pizarnik";

/*
function resultado() {}:
Hacer funcion que calcule puntaje
*/

/*function (){};
Hacer funcion para calidar 3 botones marcados
*/

});

//Al dar clic a Volver a Jugar
const b2 = document.getElementById('b2')
b2.addEventListener('click', () => {
  document.getElementById("form1").reset();
  document.getElementById("form2").reset();
  form1.style.display = '';
  div.style.display = 'none';

  //none oculta las preguntas, '' las muestra
  document.getElementById("respuesta1Jugador").innerText = "";
  document.getElementById("respuesta2Jugador").innerText = "";
  document.getElementById("respuesta3Jugador").innerText = "";
  document.getElementById("respuestasCorrectas").innerHTML = ""
  //vaciar datos del juego anterior
  });
  
