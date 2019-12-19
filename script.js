const dataJson = { "options": { "default": "Alegeti caracteristica", "firstCharact": "investments", "secondCharact": "inflation" }, "data": [{ "year": 2000, "countries": [{ "name": "Romania", "firstCharact": 19.8, "secondCharact": 43.1 }] }, { "year": 2001, "countries": [{ "name": "Romania", "firstCharact": 22.6, "secondCharact": 43.1 }] }, { "year": 2002, "countries": [{ "name": "Romania", "firstCharact": 22.5, "secondCharact": 22.6 }] }, { "year": 2003, "countries": [{ "name": "Romania", "firstCharact": 22.7, "secondCharact": 23.4 }] }, { "year": 2004, "countries": [{ "name": "Romania", "firstCharact": 24.3, "secondCharact": 15.5 }] }, { "year": 2005, "countries": [{ "name": "Romania", "firstCharact": 23.9, "secondCharact": 12.1 }] }, { "year": 2006, "countries": [{ "name": "Romania", "firstCharact": 27.2, "secondCharact": 10.5 }] }, { "year": 2007, "countries": [{ "name": "Romania", "firstCharact": 31.1, "secondCharact": 15.7 }] }, { "year": 2008, "countries": [{ "name": "Romania", "firstCharact": 33.2, "secondCharact": 15.9 }] }, { "year": 2009, "countries": [{ "name": "Romania", "firstCharact": 26.6, "secondCharact": 3.97 }] }, { "year": 2010, "countries": [{ "name": "Romania", "firstCharact": 27.1, "secondCharact": 3.53 }] }, { "year": 2011, "countries": [{ "name": "Romania", "firstCharact": 28, "secondCharact": 4.01 }] }, { "year": 2012, "countries": [{ "name": "Romania", "firstCharact": 26.8, "secondCharact": 4.63 }] }, { "year": 2013, "countries": [{ "name": "Romania", "firstCharact": 25.6, "secondCharact": 3.42 }] }, { "year": 2014, "countries": [{ "name": "Romania", "firstCharact": 24.7, "secondCharact": 1.69 }] }, { "year": 2015, "countries": [{ "name": "Romania", "firstCharact": 25.2, "secondCharact": 2.59 }] }, { "year": 2016, "countries": [{ "name": "Romania", "firstCharact": 24, "secondCharact": 2.05 }] }, { "year": 2017, "countries": [{ "name": "Romania", "firstCharact": 24.4, "secondCharact": 5.28 }] }] }
let canvas, context;
let canvasW, canvasH;
document.addEventListener('DOMContentLoaded', app);

function app() {
    initCanvas();
    let btn = document.querySelector('#btnHistogram');
    btn.addEventListener('click', createInterfaceHistogram);
    let btnClearCanvas = document.querySelector('#btnClearHistogram');
    btnClearCanvas.addEventListener('click', clearCanvas);
}

function createInterfaceHistogram() {
    let getLateralDiv = document.getElementById('lateral-bar');

    if (getLateralDiv.children.length === 2) {

        if (getLateralDiv.children.length < 3) {
            addDropwdown(getLateralDiv, "selectCharact");
            let select = document.querySelector('#selectCharact');
            populateCharactDropDown(select);
            addDropwdown(getLateralDiv, "selectCountry");
            let selectCountry = document.querySelector('#selectCharact');
            selectCountry.style.display = "block"
            selectCountry.style.margin = "10 auto"
        }

        select.addEventListener('mouseup', () => {
            firstDropdownSelected = select.value;
            // console.log(parseInt(firstDropdownSelected) === 1);
            // if we don't select de default dropdown
            if (parseInt(firstDropdownSelected) != 0) {
                const countries = getCountriesFromJson();
                console.log(countries)

                let countryData = []
                dataJson.data.map(year => {
                    year.countries.map(indexCountry => {
                        if (indexCountry.name === "Romania") {
                            countryData.push(indexCountry.firstCharact);
                        }
                    })
                });
                console.log(countryData)

                drawHistogramContent(countryData);
            }
        })
    }
}

function clearCanvas() {
    console.log("Canvas cleared")
    context.clearRect(0, 0, canvasW, canvasW);
    context.strokeStyle = "black";
    context.fillStyle = "black";
}

function drawHistogramContent(data) {
    context.clearRect(0, 0, canvasW, canvasH);

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

function addDropwdown(getLateralDiv, id) {
    let select;
    select = document.createElement('select');
    select.id = id
    getLateralDiv.appendChild(select);
}

function populateCharactDropDown(dropdown) {
    let index = 0;
    for (let option in dataJson.options) {
        var op = new Option();
        op.value = index++;
        op.text = dataJson.options[option];
        dropdown.add(op)
    }

    dropdown.style.display = "block"
    dropdown.style.margin = "10 auto"
}

function getCountriesFromJson() {
    const countries = [];
    dataJson.data.map(year => {
        year.countries.map(country => {
            countries.indexOf(country.name) ? countries.push(country.name) : null
        })
    })
    return countries;
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