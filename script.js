document.addEventListener('DOMContentLoaded', app);
let canvas, context;
let canvasW, canvasH;
//tema - grafic cu linii
function app() {
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
    canvasH = canvas.height;
    canvasW = canvas.width;
}