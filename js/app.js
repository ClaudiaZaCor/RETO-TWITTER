/*Versión 0.0.1: Agregamos un evento de click al botón al formulario. En el evento, obtenemos el texto y lo agregamos al HTML.*/
var boton = document.getElementById('send-tweet');
var text = document.getElementById('tweets-container');
var parrafo = document.createElement('p');/*donde se almacena mi tweet*/
boton.addEventListener('click', getTweet);

function getTweet(event) {
  var parrafo = document.createElement('p');
  parrafo.classList.add('paragraph');
  parrafo.textContent = addTime() + ' ' + boxText.value;
  text.appendChild(parrafo);
  boxText.value = '';
  maxChar.textContent = "140";/*recuerda que no regresaba a su contenido original, dentro podemos agregar q se ejecute una funcion que valide los epacios vacios con condicionales if else*/
}

/*Versión 0.0.6 (Extra): Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm.*/
function addTime(event){
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
    if (minute < 10) {
      minute = '0' + minute;
    }
  var updatedTime = hour + ' : ' + minute + ' ';
  return updatedTime;
}

/*Versión 0.0.2: No ingresar texto vacío (deshabilitar el botón de "twittear"). Contar la cantidad de caracteres de forma regresiva.*/
var boxText = document.getElementById('new-tweet');
var maxChar = document.getElementById('cont');
var countChar = 0;

boxText.addEventListener('keyup',spaceDisp)

function spaceDisp(event) {
  var limitChar = 140;
  countChar = boxText.value.length;
  maxChar.textContent = limitChar - countChar;
}
