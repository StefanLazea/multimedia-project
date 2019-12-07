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
    data = [2, 10, 8, 9, 1, 3, 6]

    drawBasicCanvasBackground('white', 'black');

    context.fillRect(0, 0, canvasW, canvasH);
    context.strokeRect(0, 0, canvasW, canvasH);


    context.fillStyle = 'red';
    context.beginPath();

    const number = data.length;
    const w = canvasW / number;
    const f = canvasH / Math.max(...data);

    for (let i = 0; i < number; i++) {
        let hi = data[i] * f;
        context.rect(w * i, canvasH - hi, w, hi);
    }
    context.fill();
    context.stroke();
}
function drawBasicCanvasBackground(fillColor, strokeStyle) {
    context.fillStyle = fillColor;
    context.strokeStyle = strokeStyle;
}
function initCanvas() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    canvasH = canvas.height;
    canvasW = canvas.width;
}