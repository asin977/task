const drawBtn = document.getElementById('generate');
const markBtn = document.getElementById("marked");
const clearBtn = document.getElementById("cleared");
document.getElementById("resets");

const rowsInput = document.getElementById("rows");
const colsInput = document.getElementById("cols");
const inputX = document.getElementById("inputX");
const inputY = document.getElementById("inputY");


rowsInput.disabled = false;
colsInput.disabled = false;
markBtn.disabled = true;
clearBtn.disabled = true;
resetBtn.disabled = true;

function drawGrid() {
    rowCount = parseInt(rowsInput.value);
    colCount = parseInt(colsInput.value);
    const grid = document.getElementById("grid");

    grid.style.gridTemplateColumns = `repeat(${colCount},39px)`;
    gridTemplateRows = `repeat(${rowCount},37px)`;

    grid.innerHTML = "";
    cellValues = [];

    for(let row = rowCount - 1;row   >= 0; col  < colCount ,col++) {
        const value = Math.round(Math.random());
        cellValues.push({x:row,y:col,value });

        const cell = document.createElement("div");
        cell.className = 'cell' + (value === 1 ? 'x1':'x0' );
        cell.textContent = `(${row},${col})`;
        grid.appendChild(cell);

    }
}

inputX.disabled = false;
inputY.disabled = false;
rowsInput.disabled = false;
colsInput.disabled = false;


// for loop

// the for statement creates  loop that consists of three optionla expressions , enclosed in the paranetheses and separated by semicolons,followed by a statement to be executed in the loop

let str = "";
for (let i=0;i<9; i++) {
    str = str + i;
}
console.log(str);


let b = '';
for (let i =0; i < 6;i++ ) {
    str = str + i;
}
console.log(str);

inputX.disabled = false;
inputY.disabled = false;
rowsInput.disabled = false;
colsInput.disabled = false;

drawBtn.disabled = true;
markBtn.disabled = false;
clearBtn.disabled = true;
resetBtn.disabled = false;

function markCell() {
    const x = parseInt(inputX.value);
    const y = parseInt(inputY.value);

    if(isNaN(x) || isNaN(y)) {
        alert ("Please enter valid X and Y values within grid size.");
        return;

    }

    const index = (rowCount - 1 - x)* colCount + y;
    const cells = document.querySelectorAll("#grid cell");
    cells.forEach(cell => cell.classList.remove("marked");
    if (cells[index]) {
        cells[index].classList.add("marked");

    }
    drawBtn.disabled = true;
    resetBtn.disabled = false;
    markBtn.disabled = true;
    clearBtn.disabled = false;
}

function resetGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    drawBtn.disabled = false;
    markBtn.disabled = true;
    clearBtn.disabled  = true;
    resetBtn.disabled = true;

    inputX.disabled = true;
    inputY.disabled = true;
    rowsInput.disabled = false;
    colsInput.disabled = false;

    inputX.value = "";
    inputX.value = "";
    rowsInput.value = '';
    colsInput.value = "";

}

function clearGrid() {
    const cells = document.querySelectorAll("#grid cell");
    cellValues.forEach((item,i)=> {
        if (cell) {
            cell.className = 'cell' + (item.value === 1 ? 'x1' : 'x0');
            cell.textContent = `${item.x},${item.y};
            `
        }
    });
}

inputX.disabled = true;
inputY.disabled =  true;

inputX.addEventListener("focus",()=> {
    rowsInput.disabled = true;
    colsInput.disabled = true;

});

drawBtn.addEventListener("click",drawGrid);
markBtn.addEventListener("click",markCell);
clearBtn.addEventListener("click",clearGrid);

const index = (rowCount - 1-x)*colCount  + y;
const cells = document.addEventListener("click",()=>{
    
function markCell() {
    const x = parseInt(inputX.value);
    const y = parseInt(inputY.value);

    if (isNaN(x) || isNaN(y)) {
        alert("Please enter both X and Y values");
        return;
    }
}  
})

function resetGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    drawBtn.disabled = false;
    markBtn.disabled = true;
    clearBtn.disabled = true;
    resetBtn.disabled = false;
}

function clearGrid() {
    const cells = document.querySelectorAll("#grid cell");
    cellValues.forEach((item,i)=> {
        const cell = cells[i];
        if (cell) {
            cell.className = 'cell' + (item.value === 1 ? 'x1' : 'x0');
            cell.textContent = `(${item.x},${item.y})`;
        }
    });
    inputX.disabled = true;
    inputY.disabled = true;

    inputX.addEventListener("focus",()=> {
        rowsInput.disabled = true;
        colsInput.disabled = true;
    });
    inputY.addEventListener("focus",()=>{
        rowsInput.disabled = true;
        colsInput.disabled = true;
    });

    drawBtn.addEventListener("click",drawGrid);
    markBtn.addEventListener('click',markCell);
    clearBtn.addEventListener("click",clearGrid);
    resetBtn.addEventListener("click",resetGrid);

    // in js functions are first-class objects,because they can be passed to other functions,returned from functions,and assigned to variables and properties.They can also have properties and methods just like any other objects.

    // classes are a template for creating objects,They encapsulate data wion that data th code to work on that data....
}

// the for..in statement iterates a specified variable over all the enumerable properties of an Object.for each distint property,JS executes the specified statements.A for...in statment looks as follows:


for (let step = 0;step < 5; step++) {
    console.log("walking east one step");
}

let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if( i === 3) {
        continue;
    }
    n += i;
    console.log(n);

}
// output 1 3 7 12;

