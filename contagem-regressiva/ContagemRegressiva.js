const dataAlvo = new Date("july 08, 2020").getTime();
let dias, horas, minutos, segundos;
const regressiva = document.getElementById("regressiva");

const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

setInterval(function () {

  let dataAtual = new Date().getTime();
  let segundosF = (dataAlvo - dataAtual) / 1000;

  dias = parseInt(segundosF / 86400);
  segundosF = segundosF % 86400;

  horas = parseInt(segundosF / 3600);
  segundosF = segundosF % 3600;

  minutos = parseInt(segundosF / 60);
  segundos = parseInt(segundosF % 60);

  if (dias < 10) {
    dias = `0${dias}`
  }
  if (horas < 10) {
    horas = `0${horas}`
  }
  if (minutos < 10) {
    minutos = `0${minutos}`
  }
  if (segundos < 10) {
    segundos = `0${segundos}`
  }
  dia.innerText = dias;
  hora.innerText = horas;
  minuto.innerText = minutos;
  segundo.innerText = segundos;


}, 1000);