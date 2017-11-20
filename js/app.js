/*Versión 0.0.1: Agregamos un evento de click al botón al formulario. En el evento, obtenemos el texto y lo agregamos al HTML.*/
var boton = document.getElementById('send-tweet');
var text = document.getElementById('tweets-container');
var parrafo = document.createElement('p');

boton.addEventListener('click', getTweet);

function getTweet(event) {
  var parrafo = document.createElement('p');
  parrafo.classList.add('paragraph');
  parrafo.textContent = addTime() + ' ' + boxText.value;
  text.appendChild(parrafo);
  boxText.value = '';
  maxChar.textContent = "140";
}

/*Versión 0.0.2: No ingresar texto vacío (deshabilitar el botón de "twittear"). Contar la cantidad de caracteres de forma regresiva.*/
var boxText = document.getElementById('new-tweet');
var maxChar = document.getElementById('cont');
var countChar = 0;

boxText.addEventListener('keyup',spaceDisp);
boxText.addEventListener('keyup',resize);

function spaceDisp(event) {
  var limitChar = 140;
  countChar = boxText.value.length;
  maxChar.textContent = limitChar - countChar;
  if (countChar > 0 && countChar <= 140) {
    boton.disabled = false;
  } else boton.disabled = true;
}

/*Versión 0.0.4 y Versión 0.0.5 (Extra)*/
function resize(){
  var area = this;
  boxText.style.cssText = 'height:' + boxText.scrollHeight + 'px';
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
