const drawBtn = document.getElementById("generate");
const markBtn = document.getElementById("marked");
const clearBtn = document.getElementById("cleared");
const resetBtn = document.getElementById("resets");

const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const inputX = document.getElementById("inputX");
const inputY = document.getElementById("inputY");

const canvas = document.getElementById("axisCanvas");
const ctx = canvas.getContext("2d");

let rowCount = 0;
let colCount = 0;

rowsInput.disabled = false;
colsInput.disabled = false;
markBtn.disabled = true;
clearBtn.disabled = true;
resetBtn.disabled = true;

inputX.disabled = true;
inputY.disabled = true;

function drawAxis() {
  rowCount = parseInt(rowsInput.value);
  colCount = parseInt(colsInput.value);

  if (isNaN(rowCount) || isNaN(colCount) || rowCount <= 0 || colCount <= 0) {
    alert("Please enter valid axis limits.");
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw X-axis
  ctx.beginPath();
  ctx.moveTo(0, canvas.height - 1);
  ctx.lineTo(canvas.width, canvas.height - 1);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw Y-axis
  ctx.beginPath();
  ctx.moveTo(1, 0);
  ctx.lineTo(1, canvas.height);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  drawBtn.disabled = true;
  markBtn.disabled = false;
  clearBtn.disabled = false;
  resetBtn.disabled = false;

  inputX.disabled = false;
  inputY.disabled = false;
}

function plotPoint() {
  const x = parseInt(inputX.value);
  const y = parseInt(inputY.value);

  if (isNaN(x) || isNaN(y)) {
    alert("Please enter both X and Y values.");
    return;
  }

  if (x < 0 || y < 0 || x > colCount || y > rowCount) {
    alert("Point out of bounds.");
    return;
  }

  const canvasX = (x / colCount) * canvas.width;
  const canvasY = canvas.height - (y / rowCount) * canvas.height;

 
  ctx.beginPath();
  ctx.arc(canvasX, canvasY, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
}

function clearPoints() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Redraw axes
  drawAxis();
}

function resetAll() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  rowsInput.value = '';
  colsInput.value = '';
  inputX.value = '';
  inputY.value = '';

  drawBtn.disabled = false;
  markBtn.disabled = true;
  clearBtn.disabled = true;
  resetBtn.disabled = true;

  inputX.disabled = true;
  inputY.disabled = true;
}

drawBtn.addEventListener("click", drawAxis);
markBtn.addEventListener("click", plotPoint);
clearBtn.addEventListener("click", clearPoints);
resetBtn.addEventListener("click", resetAll);

inputX.addEventListener("focus", () => {
  rowsInput.disabled = true;
  colsInput.disabled = true;
});
inputY.addEventListener("focus", () => {
  rowsInput.disabled = true;
  colsInput.disabled = true;
});
