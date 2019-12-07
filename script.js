document.addEventListener('DOMContentLoaded', app);
let canvas;
let context;
//tema - grafic cu linii
function app() {
    console.log("testam")

    initCanvas();

    let btn = document.querySelector('#btnHistogram');
    btn.addEventListener('click', drawHistogram);
}
function drawHistogram() {
    console.log("apelat")
}

function initCanvas() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
}