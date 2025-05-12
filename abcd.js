const drawBtn = document.getElementById("generate");
const markBtn = document.getElementById("marked");
const clearBtn = document.getElementById("cleared");
const resetBtn = document.getElementById("resets");

const rowsInput = document.getElementById("rows");

const colsInput = document.getElementById("cols");

const inputX = document.getElementById("inputX");

const inputY = document.getElementById("inputY");

rowsInput.disabled = false;
colsInput.disabled = false;
markBtn.disabled = true;
clearBtn.disabled = true;
resetBtn.disabled = true;

let cellValues = [];
let rowCount = 0;
let colCount = 0;

function drawGrid()   {
    rowCount = parseInt(rowsInput.value);
    colCount = parseInt(colsInput.value);
    const grid = document.getElementById("grid");

    grid.style.gridTemplateColumns = `repeat(${colCount},39px)`;
    grid.style.gridTemplateRows = `repeat(${rowCount},37px)`;
    grid.innerHTML = "";
    cellValues = [];

    for (let row = rowCount - 1; row >= 0; row--) {
        for (let col = 0; col < colCount; col++) {
            const value = Math.round(Math.random());
            cellValues.push({x:row,y:col,value});

            const cell = document.createElement("div");
            cell.className = 'cell' + (value === 1 ? 'x1' : 'x0');
            cell.textContent = `(${row},${col})`;
            grid.appendChild(cell);
        }
    }

}