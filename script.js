let drawingField = document.querySelector('.drawingField');
let newCanvasBtn = document.querySelector('.newCanvas');
let blackBrushBtn = document.querySelector('.blackBrush');
let pencilBtn = document.querySelector('.pencil');
let rainbowBtn = document.querySelector('.rainbowBrush')

let currentBrush = 'black'


// generate 16 x 16 grid on page load
for (i = 1; i <= 16 * 16; i++) {
    const square = document.createElement('div');
    square.style.height = "50px";
    square.style.width = "50px";
    square.style.boxSizing = "border-box";
    square.classList.add("box");
    square.addEventListener('mouseover', changeColor);
    drawingField.appendChild(square);
}

// eventListeners and functions to change brush selection

function changeBlackBrush() {
    currentBrush = "black";
}

function changeRainbowBrush() {
    currentBrush = "rainbow";
}

function changePencil() {
    currentBrush = "pencil";
}

blackBrushBtn.addEventListener('click', changeBlackBrush);
pencilBtn.addEventListener('click', changePencil);
rainbowBtn.addEventListener('click', changeRainbowBrush);

function changeColor(e) {

    if (currentBrush === "rainbow") {
        let customColor = randomColor()
        this.style.background = `${customColor}`;
    } else if (currentBrush === "black") {
        this.style.background = "black";
    } else if (currentBrush === "pencil") {
    }
    
}

newCanvasBtn.addEventListener('click', newGrid)

function newGrid() {
    squaresPerSide = prompt('How many squares per side? (Max 100)');

    if (squaresPerSide === null) {
        return;       
    }

    if (squaresPerSide > 100) {
        alert('Please choose a number below or equal to 100.')
        newGrid()
    } else {drawingField.innerHTML = ""

    let squareWidthHeight = drawingField.clientHeight / squaresPerSide

    for (i = 1; i <= squaresPerSide ** 2; i++) {
        const square = document.createElement('div');
        square.style.height = `${squareWidthHeight}px`;
        square.style.width = `${squareWidthHeight}px`;
        square.style.boxSizing = "border-box";
        square.classList.add("box");
        square.addEventListener('mouseover', changeColor);
        drawingField.appendChild(square);
    }
}
 
    
}

function randomColor() {
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    return `rgb(${red}, ${blue}, ${green})`;
} 