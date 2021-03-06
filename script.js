let canvas, context;
let dataJson = { "options": { "default": "Alegeti caracteristica", "firstCharact": "Investitii", "secondCharact": "Inflatia", "thirdCharact": "Cost ora de munca" }, "data": [{ "year": 1982, "countries": [{ "name": "Romania", "firstCharact": 41.5, "secondCharact": 43.1, "thirdCharact": 20.3 }, { "name": "Ungaria", "firstCharact": 32.9, "secondCharact": 12, "thirdCharact": 10 }, { "name": "Bulgaria", "firstCharact": 34.1, "secondCharact": 1.92, "thirdCharact": 20.4 }] }, { "year": 1983, "countries": [{ "name": "Romania", "firstCharact": 82.6, "secondCharact": 94.1, "thirdCharact": 24.3 }, { "name": "Ungaria", "firstCharact": 56.5, "secondCharact": 14.6, "thirdCharact": 7.6 }, { "name": "Bulgaria", "firstCharact": 40.9, "secondCharact": 0.64, "thirdCharact": 6.6 }] }, { "year": 1984, "countries": [{ "name": "Romania", "firstCharact": 90.5, "secondCharact": 22.6, "thirdCharact": 4 }, { "name": "Ungaria", "firstCharact": 140, "secondCharact": 12.7, "thirdCharact": 8 }, { "name": "Bulgaria", "firstCharact": 133.2, "secondCharact": 112.7, "thirdCharact": 12 }] }, { "year": 1985, "countries": [{ "name": "Romania", "firstCharact": 22.7, "secondCharact": 23.4, "thirdCharact": 3 }, { "name": "Ungaria", "firstCharact": 80, "secondCharact": 12.7, "thirdCharact": 8.9 }, { "name": "Bulgaria", "firstCharact": 32.2, "secondCharact": 0.22, "thirdCharact": 3.4 }] }, { "year": 1986, "countries": [{ "name": "Romania", "firstCharact": 24.3, "secondCharact": 15.5, "thirdCharact": 4.5 }, { "name": "Ungaria", "firstCharact": 78.7, "secondCharact": 12.2, "thirdCharact": 5.9 }, { "name": "Bulgaria", "firstCharact": 35.9, "secondCharact": 1.35, "thirdCharact": 7 }] }, { "year": 1987, "countries": [{ "name": "Romania", "firstCharact": 23.9, "secondCharact": 12.1, "thirdCharact": 8 }, { "name": "Ungaria", "firstCharact": 27.9, "secondCharact": 13, "thirdCharact": 7.8 }, { "name": "Bulgaria", "firstCharact": 32.9, "secondCharact": 0.645, "thirdCharact": 2.9 }] }, { "year": 1988, "countries": [{ "name": "Romania", "firstCharact": 27.2, "secondCharact": 10.5, "thirdCharact": 8.5 }, { "name": "Ungaria", "firstCharact": 78.12, "secondCharact": 8.1, "thirdCharact": 7 }, { "name": "Bulgaria", "firstCharact": 34.4, "secondCharact": 5.33, "thirdCharact": 5.33 }] }, { "year": 1989, "countries": [{ "name": "Romania", "firstCharact": 31.1, "secondCharact": 15.7, "thirdCharact": 2.3 }, { "name": "Ungaria", "firstCharact": 19.9, "secondCharact": 8.43, "thirdCharact": 8.12 }, { "name": "Bulgaria", "firstCharact": 31.1, "secondCharact": 6.73, "thirdCharact": 6.23 }] }, { "year": 1990, "countries": [{ "name": "Romania", "firstCharact": 33.2, "secondCharact": 15.9, "thirdCharact": 10 }, { "name": "Ungaria", "firstCharact": 112.5, "secondCharact": 28.1, "thirdCharact": 7.8 }, { "name": "Bulgaria", "firstCharact": 25.6, "secondCharact": 26.2, "thirdCharact": 6.1 }] }, { "year": 1991, "countries": [{ "name": "Romania", "firstCharact": 26.6, "secondCharact": 3.97, "thirdCharact": 5.9 }, { "name": "Ungaria", "firstCharact": 70.8, "secondCharact": 29.1, "thirdCharact": 10.3 }, { "name": "Bulgaria", "firstCharact": 22.6, "secondCharact": 227, "thirdCharact": 4.5 }] }, { "year": 1992, "countries": [{ "name": "Romania", "firstCharact": 27.1, "secondCharact": 3.53, "thirdCharact": 12 }, { "name": "Ungaria", "firstCharact": 67.5, "secondCharact": 21.5, "thirdCharact": 3.4 }, { "name": "Bulgaria", "firstCharact": 19.9, "secondCharact": 59.6, "thirdCharact": 2.9 }] }, { "year": 1993, "countries": [{ "name": "Romania", "firstCharact": 28, "secondCharact": 4.01, "thirdCharact": 9.8 }, { "name": "Ungaria", "firstCharact": 12.9, "secondCharact": 21.3, "thirdCharact": 4.5 }, { "name": "Bulgaria", "firstCharact": 15.3, "secondCharact": 51.1, "thirdCharact": 3.4 }] }, { "year": 1994, "countries": [{ "name": "Romania", "firstCharact": 26.8, "secondCharact": 4.63, "thirdCharact": 4.9 }, { "name": "Ungaria", "firstCharact": 22.4, "secondCharact": 19.7, "thirdCharact": 5.1 }, { "name": "Bulgaria", "firstCharact": 9.39, "secondCharact": 72.7, "thirdCharact": 3.12 }] }, { "year": 1995, "countries": [{ "name": "Romania", "firstCharact": 25.6, "secondCharact": 3.42, "thirdCharact": 8.2 }, { "name": "Ungaria", "firstCharact": 40.3, "secondCharact": 19.5, "thirdCharact": 4.45 }, { "name": "Bulgaria", "firstCharact": 15.7, "secondCharact": 62.4, "thirdCharact": 4.59 }] }, { "year": 1996, "countries": [{ "name": "Romania", "firstCharact": 24.7, "secondCharact": 1.69, "thirdCharact": 15 }, { "name": "Ungaria", "firstCharact": 45.9, "secondCharact": 22, "thirdCharact": 4.89 }, { "name": "Bulgaria", "firstCharact": 0.3, "secondCharact": 103, "thirdCharact": 2.1 }] }, { "year": 1997, "countries": [{ "name": "Romania", "firstCharact": 25.2, "secondCharact": 2.59, "thirdCharact": 2.3 }, { "name": "Ungaria", "firstCharact": 67.8, "secondCharact": 20, "thirdCharact": 5 }, { "name": "Bulgaria", "firstCharact": 8.87, "secondCharact": 110, "thirdCharact": 2.2 }] }, { "year": 1998, "countries": [{ "name": "Romania", "firstCharact": 24, "secondCharact": 2.05, "thirdCharact": 7.8 }, { "name": "Ungaria", "firstCharact": 64.5, "secondCharact": 13.6, "thirdCharact": 7 }, { "name": "Bulgaria", "firstCharact": 18.5, "secondCharact": 32.3, "thirdCharact": 3.89 }] }, { "year": 1999, "countries": [{ "name": "Romania", "firstCharact": 24.4, "secondCharact": 5.28, "thirdCharact": 3.2 }, { "name": "Ungaria", "firstCharact": 78.2, "secondCharact": 8.07, "thirdCharact": 5.23 }, { "name": "Bulgaria", "firstCharact": 19.3, "secondCharact": 2.44, "thirdCharact": 4.45 }] }, { "year": 2000, "countries": [{ "name": "Romania", "firstCharact": 19.8, "secondCharact": 43.1, "thirdCharact": 4.48 }, { "name": "Ungaria", "firstCharact": 89.21, "secondCharact": 9.86, "thirdCharact": 6.12 }, { "name": "Bulgaria", "firstCharact": 19.2, "secondCharact": 7.32, "thirdCharact": 6.12 }] }, { "year": 2001, "countries": [{ "name": "Romania", "firstCharact": 22.6, "secondCharact": 43.1, "thirdCharact": 4.91 }, { "name": "Ungaria", "firstCharact": 50.2, "secondCharact": 11.6, "thirdCharact": 7.02 }, { "name": "Bulgaria", "firstCharact": 21.5, "secondCharact": 6.11, "thirdCharact": 6.05 }] }, { "year": 2002, "countries": [{ "name": "Romania", "firstCharact": 22.5, "secondCharact": 22.6, "thirdCharact": 5.25 }, { "name": "Ungaria", "firstCharact": 45.8, "secondCharact": 8.36, "thirdCharact": 7.1 }, { "name": "Bulgaria", "firstCharact": 20.7, "secondCharact": 3.77, "thirdCharact": 6.45 }] }, { "year": 2003, "countries": [{ "name": "Romania", "firstCharact": 22.7, "secondCharact": 23.4, "thirdCharact": 5.08 }, { "name": "Ungaria", "firstCharact": 89.2, "secondCharact": 5.54, "thirdCharact": 11.1 }, { "name": "Bulgaria", "firstCharact": 22.2, "secondCharact": 2.27, "thirdCharact": 4.94 }] }, { "year": 2004, "countries": [{ "name": "Romania", "firstCharact": 24.3, "secondCharact": 15.5, "thirdCharact": 5.67 }, { "name": "Ungaria", "firstCharact": 123.8, "secondCharact": 4.99, "thirdCharact": 10.3 }, { "name": "Bulgaria", "firstCharact": 23.6, "secondCharact": 5.66, "thirdCharact": 5.1 }] }, { "year": 2005, "countries": [{ "name": "Romania", "firstCharact": 23.9, "secondCharact": 12.1, "thirdCharact": 6.16 }, { "name": "Ungaria", "firstCharact": 78.8, "secondCharact": 2.43, "thirdCharact": 12.1 }, { "name": "Bulgaria", "firstCharact": 27.9, "secondCharact": 6.51, "thirdCharact": 5.28 }] }, { "year": 2006, "countries": [{ "name": "Romania", "firstCharact": 27.2, "secondCharact": 10.5, "thirdCharact": 7.1 }, { "name": "Ungaria", "firstCharact": 70, "secondCharact": 3.54, "thirdCharact": 13.1 }, { "name": "Bulgaria", "firstCharact": 32.3, "secondCharact": 6.74, "thirdCharact": 5.4 }] }, { "year": 2007, "countries": [{ "name": "Romania", "firstCharact": 31.1, "secondCharact": 15.7, "thirdCharact": 7.96 }, { "name": "Ungaria", "firstCharact": 76, "secondCharact": 5.41, "thirdCharact": 13.8 }, { "name": "Bulgaria", "firstCharact": 33.6, "secondCharact": 11.1, "thirdCharact": 50.84 }] }, { "year": 2008, "countries": [{ "name": "Romania", "firstCharact": 33.2, "secondCharact": 15.9, "thirdCharact": 8 }, { "name": "Ungaria", "firstCharact": 89.2, "secondCharact": 5, "thirdCharact": 6.5 }, { "name": "Bulgaria", "firstCharact": 37, "secondCharact": 8.13, "thirdCharact": 6.94 }] }, { "year": 2009, "countries": [{ "name": "Romania", "firstCharact": 106.6, "secondCharact": 18.97, "thirdCharact": 19.03 }, { "name": "Ungaria", "firstCharact": 58.75, "secondCharact": 84.04, "thirdCharact": 15.8 }, { "name": "Bulgaria", "firstCharact": 28.6, "secondCharact": 4.05, "thirdCharact": 7.56 }] }, { "year": 2010, "countries": [{ "name": "Romania", "firstCharact": 27.1, "secondCharact": 3.53, "thirdCharact": 9.39 }, { "name": "Ungaria", "firstCharact": 89.1, "secondCharact": 2.33, "thirdCharact": 15.3 }, { "name": "Bulgaria", "firstCharact": 22.6, "secondCharact": 1.11, "thirdCharact": 8.32 }] }, { "year": 2011, "countries": [{ "name": "Romania", "firstCharact": 288, "secondCharact": 100.01, "thirdCharact": 9.63 }, { "name": "Ungaria", "firstCharact": 67.8, "secondCharact": 2.27, "thirdCharact": 15.3 }, { "name": "Bulgaria", "firstCharact": 21.5, "secondCharact": 5.98, "thirdCharact": 8.52 }] }, { "year": 2012, "countries": [{ "name": "Romania", "firstCharact": 26.8, "secondCharact": 4.63, "thirdCharact": 11.8 }, { "name": "Ungaria", "firstCharact": 41.12, "secondCharact": 103.38, "thirdCharact": 17.7 }, { "name": "Bulgaria", "firstCharact": 21.9, "secondCharact": 201.56, "thirdCharact": 9.67 }] }, { "year": 2013, "countries": [{ "name": "Romania", "firstCharact": 134.6, "secondCharact": 329.42, "thirdCharact": 12.1 }, { "name": "Ungaria", "firstCharact": 56.89, "secondCharact": 290.94, "thirdCharact": 18.4 }, { "name": "Bulgaria", "firstCharact": 121.3, "secondCharact": 90.7, "thirdCharact": 10.3 }] }, { "year": 2014, "countries": [{ "name": "Romania", "firstCharact": 247.7, "secondCharact": 100.69, "thirdCharact": 12.6 }, { "name": "Ungaria", "firstCharact": 77.89, "secondCharact": 3.38, "thirdCharact": 18.3 }, { "name": "Bulgaria", "firstCharact": 210.4, "secondCharact": 340.452, "thirdCharact": 11.3 }] }, { "year": 2015, "countries": [{ "name": "Romania", "firstCharact": 299.2, "secondCharact": 200.59, "thirdCharact": 13.1 }, { "name": "Ungaria", "firstCharact": 10, "secondCharact": 320.88, "thirdCharact": 18.4 }, { "name": "Bulgaria", "firstCharact": 21.2, "secondCharact": 2.21, "thirdCharact": 11.7 }] }, { "year": 2016, "countries": [{ "name": "Romania", "firstCharact": 24, "secondCharact": 200.05, "thirdCharact": 40.7 }, { "name": "Ungaria", "firstCharact": 165, "secondCharact": 321.959, "thirdCharact": 18.4 }, { "name": "Bulgaria", "firstCharact": 89.1, "secondCharact": 156.25, "thirdCharact": 90.5 }] }, { "year": 2017, "countries": [{ "name": "Romania", "firstCharact": 24.4, "secondCharact": 5.28, "thirdCharact": 17 }, { "name": "Ungaria", "firstCharact": 109, "secondCharact": 3.67, "thirdCharact": 17.8 }, { "name": "Bulgaria", "firstCharact": 20.9, "secondCharact": 1.18, "thirdCharact": 15.67 }] }] }

let getLateralDiv;
let countries;
let canvasW, canvasH;
let table;
let btnClearCanvas;
let btnDrawHistogram;
let btnBubbleChart;
let selectYears;
let yearLabel;
let verticalNumberOfLinesOx;
let horizontalNumberOfLinesOy;
let interval;
let isChartAction = false;
const grid = 30;
const xDistance = 25;
const yDistance = 1;
const xStartingPoint = 1;
const yStartingPoint = 1;

document.addEventListener('DOMContentLoaded', app);

function app() {
    getLateralDiv = document.getElementById('lateral-bar');
    table = document.querySelector("table");
    yearLabel = document.getElementById("displayYear");

    initCanvas();

    btnDrawHistogram = document.querySelector('#btnHistogram');
    btnDrawHistogram.addEventListener('click', initHistogramInterface);

    btnClearCanvas = document.querySelector('#btnClearHistogram');
    btnClearCanvas.addEventListener('click', clearCanvas);

    btnBubbleChart = document.querySelector("#btnBubbleChart");
    btnBubbleChart.addEventListener('click', initBubleChart);

    let paragraf = document.querySelector('#graficParagraf');
    paragraf.append(addDropwdown('selectYears'));
    selectYears = document.querySelector('#selectYears');
    populateDropDown(selectYears, getYearsFromJson());

    selectYears.addEventListener('change', createTable, false);
}

/**
 * Function inits the canvas and hides the other elements from the ui.
 * Also calls the function responsible for drawing the buble chart.
 */
function initBubleChart() {
    clearCanvas();
    isChartAction = true;
    canvas.style.display = "block";
    table.style.display = "none";
    btnClearCanvas.style.display = "block";
    btnBubbleChart.style.background = "#13ed4d";
    btnBubbleChart.style.borderColor = "transparent";
    btnDrawHistogram.style.background = "#d4d6d5";

    drawBubbleChart();
}

/**
 * Function calls the drawAxis method for the axis.
 * And sets the interval and the functions to be called in the animation.
 */
function drawBubbleChart() {
    verticalNumberOfLinesOx = Math.floor(canvasH / grid);
    horizontalNumberOfLinesOy = Math.floor(canvasW / grid);

    for (let i = 0; i < verticalNumberOfLinesOx; i++) {
        drawAxis(i, xDistance, 0, grid * i + 0.5, canvasW, grid * i + 0.5);
    }

    for (i = 0; i <= horizontalNumberOfLinesOy; i++) {
        drawAxis(i, yDistance, grid * i + 0.5, 0, grid * i + 0.5, canvasH);
    }
    // move to the intersection of Ox with Oy
    context.translate(yDistance * grid, xDistance * grid);

    for (i = 1; i < (horizontalNumberOfLinesOy - yDistance); i++) {
        // false is for specifing that is not the Oy axis
        drawAxisMarks(i, grid * i + 0.5, grid * i + 0.5, false);
    }

    for (i = 1; i < xDistance; i++) {
        // true -> Oy axis; because it created upside down
        drawAxisMarks(i, grid * i + 0.5, grid * i + 0.5, true);
    }
    context.translate(-yDistance * grid, -xDistance * grid);

    //set interval
    years = getYearsFromJson();
    context.color
    context.font = "bold 15px Arial"
    context.fillText(dataJson.options["firstCharact"], (canvasW / grid) * xDistance + 100,
        (canvasH / grid) * xDistance + 120)
    context.fillText(dataJson.options["secondCharact"], (canvasW / grid) * yDistance + 20,
        (canvasH / grid) * yDistance)
    context.translate(yDistance * grid, xDistance * grid);

    let startYear = years[0], endYear = years[years.length - 1];
    let currentYear = startYear;
    interval = setInterval(function () {
        if (currentYear <= endYear) {
            data = getDataByYear(currentYear);
            updateLabel(currentYear);
            drawBubbles(data);
            currentYear++;
        } else {
            clearInterval(interval);
        }
    }, 200);
}

/**
 * Updates the label for the buble chart.
 * @param {String} year 
 */
function updateLabel(year) {
    yearLabel.innerText = year;
    yearLabel.style.fontSize = "x-large";
    yearLabel.style.display = "block";
}

/**
 * The function is responsible of drawing the bubbles according to the data
 * provided; 
 * The data is given for a certain year.
 * @param {data} data 
 */
function drawBubbles(data) {

    data.forEach((data) => {
        context.beginPath();
        if (data.name === "Romania") {
            drawBubble(data, "#e56139", "black")
        }
        if (data.name === "Ungaria") {
            drawBubble(data, "#50eb31", "black")
        }
        if (data.name === "Bulgaria") {
            drawBubble(data, "#3090f0", "black")
        }
    })
}

/**
 * Draws the bubble given the parameters
 * @param {data} data - data; for ex, for Romania, it have the charactistics
 * @param {*} color - color for the circle
 * @param {*} nameColor - color for the text
 */
function drawBubble(data, color, nameColor) {
    context.fillStyle = color;
    context.arc(grid + data.firstCharact + 100, -(grid + data.secondCharact + 50), data.thirdCharact, 0, 2 * Math.PI);
    context.fill();
    context.stroke();

    context.fillStyle = nameColor;
    context.font = "bold 16px Arial";
    context.fillText(data.name.substring(0, 2), grid + data.firstCharact + 100, -(grid + data.secondCharact + 60));
}
/**
 * 
 * @param {*} index index from the foreach statement
 * @param {*} linePosition 
 * @param {*} moveToX 
 * @param {*} moveToY 
 * @param {*} lineToX 
 * @param {*} lineToY 
 */
function drawAxis(index, linePosition, moveToX, moveToY, lineToX, lineToY) {
    context.beginPath();
    context.lineWidth = 1;
    if (index === linePosition) {
        context.strokeStyle = "#000000";
    } else {
        context.strokeStyle = "#d4d6d5";
    }

    context.moveTo(moveToX, moveToY);
    context.lineTo(lineToX, lineToY);
    context.stroke();
}

/**
 * Draws the ticks from the axis;
 * 
 * @param {} index 
 * @param {*} moveTo 
 * @param {*} lineTo 
 * @param {*} isOy 
 */
function drawAxisMarks(index, moveTo, lineTo, isOy) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    if (index % 2 === 0) {
        if (isOy) {
            context.moveTo(-10, -moveTo);
            context.lineTo(10, -lineTo);
        } else {
            context.moveTo(moveTo, -10);
            context.lineTo(lineTo, 10);
        }
    } else {
        if (isOy) {
            context.moveTo(0, -moveTo);
            context.lineTo(1, -lineTo);
        } else {
            context.moveTo(moveTo, 0);
            context.lineTo(lineTo, 1);
        }
    }
    context.stroke();
}

//method for init components in the user interface
function initHistogramInterface() {
    //show canvas 
    btnBubbleChart.style.background = "#d4d6d5"
    btnDrawHistogram.style.background = "#13ed4d"
    btnDrawHistogram.style.borderColor = "transparent"
    canvas.style.display = "block";
    table.style.display = "none";

    btnClearCanvas.style.display = "block";

    let selectCharact = document.getElementById("selectCharact");
    let selectCountry = document.getElementById("selectCountry");

    //get countries
    countries = getCountriesFromJson();

    //get select and populate them with the data from json
    populateDropDown(selectCharact, dataJson.options);
    populateDropDown(selectCountry, countries);

    //check for changes in the way canvas is designed
    selectCharact.addEventListener('mouseup', () => {
        firstDropdownSelected = selectCharact.value;
        //error handler pentru cand se alege doar o data
        // if we don't select de default dropdown
        selectCountry.addEventListener('mouseup', () => {
            btnBubbleChart.style.background = "#d4d6d5";
            btnDrawHistogram.style.background = "#13ed4d";
            yearLabel.style.display = "none";
            context.beginPath();
            secondDropDown = selectCountry.value;
            canvas.style.display = "block";
            table.style.display = "none";

            if (isChartAction === true) {
                context.translate(-yDistance * grid, -xDistance * grid);
                clearInterval(interval);
                isChartAction = false;
            }
            draw(firstDropdownSelected, secondDropDown);
        });
    })

}

// create table
function createTable() {
    btnDrawHistogram.style.background = "#d4d6d5";
    btnBubbleChart.style.background = "#d4d6d5"
    // hide canvas
    if (isChartAction === true) {
        table.style.marginTop = canvasH + 100;
        table.style.marginLeft = "-270px";

    } else {
        canvas.style.display = "none";
        yearLabel.style.display = "none";
    }
    // display as block the table
    table.style.display = "block"

    //get selected year
    const selectedYear = selectYears.options[this.value].text;
    // get the array of objects containing the informations from the selected year
    const yearsData = getDataByYear(parseInt(selectedYear));

    const caption = document.querySelector("caption");
    caption.innerText = `Lista date din anul ${selectedYear}`;


    const thead = document.querySelector("thead");
    // deletes the first row, to make sure we don't do duplicated values
    thead.deleteRow(0);

    //Adds the first row for the header part of the table
    const row = document.createElement('tr');
    thead.appendChild(row);

    initCustomHeader(row, "Caracteristica");

    const tbody = document.querySelector('tbody');

    // if the year is changed; this checks when the number of 
    // rows in tbody is the number of chracteristics 
    // if this value is true, means that the data was loaded before in the table
    // so, we have duplicate data; 
    let numberOfCharact = Object.keys(dataJson.options).length - 1;
    if (tbody.rows.length === numberOfCharact) {
        while (numberOfCharact !== 0) {
            tbody.deleteRow(0);
            numberOfCharact--;
        }
    }

    initRows(tbody);

    yearsData.forEach((item) => {
        // Add countries name in the thead row of the table
        initCustomHeader(row, item.name);

        // add values in the cell for the right parameters
        Object.keys(item).forEach((key) => {
            if (key !== "name") {
                // the id is formed from key pluw Row
                const id = key + "Row";
                const row = document.getElementById(id);
                //adds the cell value to the current row and adds the value from the object
                addCellOnRow(row, item[key]);
            }
        })
    });
}

/**
 * creates rows
 * add values for rows cell according to the json options
 * those rows are appended to the tbody
 * @param {*} tbody 
 */
function initRows(tbody) {
    Object.keys(dataJson.options).forEach((key) => {
        if (key !== "default") {
            const tableRow = document.createElement("tr");
            tableRow.id = key + "Row";

            tbody.append(tableRow);
            // adds the first cells for the characteristics column
            const row = document.getElementById(tableRow.id);
            addCellOnRow(row, dataJson.options[key]);
        }
    })
}

/**
 * Add values to row's cell.
 * @param {*} row - the current row 
 * @param {*} item - the item that should be added as cell value
 */
function addCellOnRow(row, item) {
    const cell = document.createElement("td");
    cell.innerText = item;
    row.append(cell);
}

/**
 * Adds a table header using a given text
 * 
 * @param {*} row - current row
 * @param {*} headerName - specifies the value to be inserted as a table header
 */
function initCustomHeader(row, headerName) {
    const th = document.createElement('th');
    th.innerText = headerName;
    row.appendChild(th);
}

// method draws the histogram given the selected values
function draw(charactSelectValue, countrySelectValue) {
    const countryName = countries[countrySelectValue];
    let countryData = []
    if (parseInt(charactSelectValue) === 1) {
        dataJson.data.map(year => {
            year.countries.map(indexCountry => {
                if (indexCountry.name === countryName) {
                    countryData.push(indexCountry.firstCharact);
                }
            })
        });
        drawHistogramContent(countryData);
    }

    if (parseInt(charactSelectValue) === 2) {
        dataJson.data.map(year => {
            year.countries.map(indexCountry => {
                if (indexCountry.name === countryName) {
                    countryData.push(indexCountry.secondCharact);
                }
            })
        });
        drawHistogramContent(countryData);
    }

    if (parseInt(charactSelectValue) === 3) {
        dataJson.data.map(year => {
            year.countries.map(indexCountry => {
                if (indexCountry.name === countryName) {
                    countryData.push(indexCountry.thirdCharact);
                }
            })
        });
        drawHistogramContent(countryData);
    }
}

// clears canvas
// todo: remove selects and buttons in the interface
function clearCanvas() {
    if (isChartAction === true) {
        table.style.marginTop = "5%";
        table.style.display = "none";
        yearLabel.style.display = "none";
        context.translate(-yDistance * grid, -xDistance * grid);
        clearInterval(interval);
        isChartAction = false;
    }
    console.log("Canvas cleared");
    context.clearRect(0, 0, canvasW, canvasW);
    context.strokeStyle = "black";
    context.fillStyle = "black";
    btnClearCanvas.style.display = "none";
}

// method that draws the histogram; initial phase without data
function drawHistogramContent(data) {
    context.clearRect(0, 0, canvasW, canvasH);

    drawBasicCanvasBackground('white', 'black');

    context.fillRect(0, 0, canvasW, canvasH);
    context.strokeRect(0, 0, canvasW, canvasH);

    context.fillStyle = 'orange';
    context.beginPath();

    const number = data.length;
    const widthMedia = canvasW / number;
    const heightUnit = canvasH / Math.max(...data);
    for (let step = 0; step < number; step++) {
        let heightPerData = data[step] * heightUnit;
        context.rect(widthMedia * step, canvasH - heightPerData, widthMedia, heightPerData);
        context.font = "bold 16px Arial";
        context.fillText(getYearsFromJson()[step], widthMedia * step, canvasH - heightPerData);
    }

    context.fill();
    context.lineWidth = 1;
    context.stroke();
}

// method that adds a dropdown to the lateral div
function addDropwdown(id) {
    let select = document.createElement('select');
    select.id = id;
    return select;
}

// method that populates the dropdown's values with given data
function populateDropDown(dropdown, data) {
    let index = 0;
    for (let option in data) {
        var op = new Option();
        op.value = index++;
        op.text = data[option];
        dropdown.add(op)
    }

    dropdown.style.display = "block"
    dropdown.style.margin = "10 auto"
}


function getCountriesFromJson() {
    const countries = [];
    dataJson.data.map(year => {
        year.countries.map(country => {
            index = countries.indexOf(country.name)
            countries[index] !== country.name ? countries.push(country.name) : null
        })
    })
    return countries;
}

// get years
function getYearsFromJson() {
    const years = [];
    dataJson.data.map(data => {
        years.push(data.year);
    })
    return years;
}

// get the data from json corresponding to the year given as param
function getDataByYear(year) {
    console.log("Data from " + year)
    let dataByYear;
    dataJson.data.map(data => {
        if (data.year === year) {
            dataByYear = data.countries;
        }
    });
    return dataByYear;
}

// draws the canvas background
function drawBasicCanvasBackground(fillColor, strokeStyle) {
    context.fillStyle = fillColor;
    context.strokeStyle = strokeStyle;
    context.lineWidth = 0;
}

// get the data for canvas
function initCanvas() {
    canvas = document.querySelector('canvas');
    context = canvas.getContext('2d');
    canvasH = canvas.height;
    canvasW = canvas.width;
}