const contendor = document.getElementById("test");
const botonRES = document.getElementById("boton");
const resultadoTEST = document.getElementById("resultado");

const preguntas = [
    {
        pregunta: "1. Tuviste contacto con pacientes Covid positivo?",
        respuestas: {

            A: "si", B: "no"
        }, respuestaCorrecta: "A"
    },
    {
        pregunta: "1. Tuviste fiebre en los ultimos dias?",
        respuestas: {

            A: "si", B: "no"
        }, respuestaCorrecta: "A"
    },
    {
        pregunta: "1. Tuviste tos?",
        respuestas: {

            A: "si", B: "no"
        }, respuestaCorrecta: "A"
    },
    {
        pregunta: "1. Te sientes cansado?",
        respuestas: {

            A: "si", B: "no"
        }, respuestaCorrecta: "A"
    },
    {
        pregunta: "1. Tienes olfato?",
        respuestas: {

            A: "si", B: "no"
        }, respuestaCorrecta: "A"
    }
];
function mostrarTest() {
    const preguntasYrespuestas = [];

    preguntas.forEach((preguntaActual, numeroDePregunta) => {

    const respuestas = [];
        for (letraRespuesta in preguntaActual.respuestas){
            respuestas.push(
        `
        <label>
        <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}">
        ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
        </label>`
        );
        } preguntasYrespuestas.push(
        `<div class="cuestion"> ${preguntaActual.pregunta} </div>
        <div class="respuestas"> ${respuestas.join('')} </div>`   
        );
    });

    contendor.innerHTML = preguntasYrespuestas.join('');
} mostrarTest();

function mostrarResultado(){
    const respuestas = contendor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;

    preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta]; 
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (todasLasRespuestas.querySelector(checkboxRespuestas)|| {}).value;
      
    if (respuestaElegida === preguntaActual.respuestaCorrecta){
          respuestasCorrectas++; 
        
          respuestas[numeroDePregunta].style.color='blue';
      }
      else {
          respuestas[numeroDePregunta].style.color='red';
      }
    });
    resultadoTEST.innerHTML='Usted ha acertado ' + respuestasCorrectas + ' preguntas de un total de ' + preguntas.length; 
}
botonRES.addEventListener('click', mostrarResultado); 
