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

function drawGrid() {
  rowCount = parseInt(rowsInput.value);
  colCount = parseInt(colsInput.value);
  const grid = document.getElementById("grid");

  grid.style.gridTemplateColumns = `repeat(${colCount}, 39px)`;
  grid.style.gridTemplateRows = `repeat(${rowCount}, 37px)`;
  grid.innerHTML = '';
  cellValues = [];

  for (let row = rowCount - 1; row >= 0; row--) {
    for (let col = 0; col < colCount; col++) {
      const value = Math.round(Math.random());
      cellValues.push({ x: row, y: col, value });

      const cell = document.createElement('div');
      cell.className = 'cell ' + (value === 1 ? 'x1' : 'x0');
      cell.textContent = `(${row},${col})`;
      grid.appendChild(cell);
    }
  }

  inputX.disabled = false;
  inputY.disabled = false;
  rowsInput.disabled = false;
  colsInput.disabled = false;

  drawBtn.disabled = true;
  markBtn.disabled = false;
  clearBtn.disabled = false;
  resetBtn.disabled = false;
}

function markCell() {
  const x = parseInt(inputX.value);
  const y = parseInt(inputY.value);

  if (isNaN(x) || isNaN(y)) {
    alert("Please enter both X and Y values.");
    return;
  }

  if (x < 0 || y < 0 || x >= rowCount || y >= colCount) {
    alert("Please enter valid X and Y values within grid size.");
    return;
  }

  const index = (rowCount - 1 - x) * colCount + y;
  const cells = document.querySelectorAll('#grid .cell');
  cells.forEach(cell => cell.classList.remove("marked"));
  if (cells[index]) {
    cells[index].classList.add("marked");
  }
  drawBtn.disabled = true;
  resetBtn.disabled = false;
  markBtn.disabled = true;
  clearBtn.disabled = false;
}

function resetGrid() {
  const grid = document.getElementById("grid");
  grid.innerHTML = '';

  drawBtn.disabled = false;
  markBtn.disabled = true;
  clearBtn.disabled = true;
  resetBtn.disabled = true;


  inputX.disabled = true;
  inputY.disabled = true;
  rowsInput.disabled = false;
  colsInput.disabled = false;

  
  inputX.value = '';
  inputY.value = '';
  rowsInput.value = '';
  colsInput.value = '';
}

function clearGrid() {
  const cells = document.querySelectorAll("#grid .cell");
  cellValues.forEach((item, i) => {
    const cell = cells[i];
    if (cell) {
      cell.className = 'cell ' + (item.value === 1 ? 'x1' : 'x0');
      cell.textContent = `(${item.x},${item.y})`;
    }
  });
}


inputX.disabled = true;
inputY.disabled = true;


inputX.addEventListener("focus", () => {
  rowsInput.disabled = true;
  colsInput.disabled = true;
});
inputY.addEventListener("focus", () => {
  rowsInput.disabled = true;
  colsInput.disabled = true;
});


drawBtn.addEventListener("click", drawGrid);
markBtn.addEventListener("click", markCell);
clearBtn.addEventListener("click", clearGrid);
resetBtn.addEventListener("click", resetGrid);






