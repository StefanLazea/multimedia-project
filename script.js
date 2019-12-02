document.addEventListener('DOMContentLoaded', app);
let canvas;
let context;
//tema - grafic cu linii
function app() {
    console.log("testam")

    initCanvas();

    let btn = document.querySelector('#btnColor');
    btn.addEventListener('click', schimbaCuloare);
}
function schimbaCuloare() {
    console.log("apelat")
}

function initCanvas() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
}