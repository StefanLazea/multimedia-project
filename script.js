document.addEventListener('DOMContentLoaded', app);
const dataJson = { "options": { "firstCharact": "investments", "secondCharact": "inflation" }, "data": [{ "year": 2000, "countries": [{ "name": "Romania", "firstCharact": 19.8, "secondCharact": 43.1 }] }, { "year": 2001, "countries": [{ "name": "Romania", "firstCharact": 22.6, "secondCharact": 43.1 }] }] };
let canvas, context;
let canvasW, canvasH;
//tema - grafic cu linii
function app() {
    initCanvas();

    let btn = document.querySelector('#btnHistogram');
    btn.addEventListener('click', drawHistogram);
}

function drawHistogram() {
    let getLateralDiv = document.getElementById('lateral-bar');
    let chooseCharacteristic = document.createElement('select');
    populateDropDown(chooseCharacteristic);
    getLateralDiv.appendChild(chooseCharacteristic);

    context.clearRect(0, 0, canvasW, canvasH);
    data = [2, 10, 8, 9, 1, 3, 6, 10, 2, 4, 9, 12];

    drawBasicCanvasBackground('white', 'black');

    context.fillRect(0, 0, canvasW, canvasH);
    context.strokeRect(0, 0, canvasW, canvasH);


    context.fillStyle = 'orange';
    context.beginPath();

    const number = data.length;
    const w = canvasW / number;
    const f = canvasH / Math.max(...data);

    for (let i = 0; i < number; i++) {
        let hi = data[i] * f;
        context.rect(w * i, canvasH - hi, w, hi);
    }
    context.fill();
    context.lineWidth = 1;
    context.stroke();
}

function populateDropDown(dropdown) {

    for (let option in dataJson.options) {
        var op = new Option();
        op.value = 1
        op.text = dataJson.options[option];
        dropdown.add(op)
    }
    dropdown.style.display = "block"
    dropdown.style.margin = "10 auto"
}

function drawBasicCanvasBackground(fillColor, strokeStyle) {
    context.fillStyle = fillColor;
    context.strokeStyle = strokeStyle;
    context.lineWidth = 0;
}

function initCanvas() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    canvasH = canvas.height;
    canvasW = canvas.width;
}