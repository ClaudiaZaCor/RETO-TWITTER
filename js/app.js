/*Versión 0.0.1: Agregamos un evento de click al botón al formulario. En el evento, obtenemos el texto y lo agregamos al HTML.*/
var twittear = document.getElementById('send-tweet');
var text = document.getElementById('text')
twittear.addEventListener('click', getTweet);

function getTweet(event) {
  var parrafo = document.createElement('p');
  parrafo.textContent = boxText.value;
  text.appendChild(parrafo);
  boxText.value = '';
}

/*Versión 0.0.2: No ingresar texto vacío (deshabilitar el botón de "twittear"). Contar la cantidad de caracteres de forma regresiva.*/
var boxText = document.getElementById('new-tweet');
var maxChar = document.getElementById('cont');
var countChar = 0;

boxText.addEventListener('keydown',spaceDisp)

function spaceDisp(event) {
  countChar = boxText.value.length;
  maxChar.textContent = 140 - countChar;
}
