let drawingField = document.querySelector('.drawingField');
let newCanvasBtn = document.querySelector('.newCanvas');
let blackBrushBtn = document.querySelector('.blackBrush');
let pencilBtn = document.querySelector('.pencil');
let rainbowBtn = document.querySelector('.rainbowBrush')
let currentBrush = 'black'
let mouseState = ""

//set mouse state depending on currently up or down
document.body.addEventListener('mousedown', setMouseDown)
document.body.addEventListener('mouseup', setMouseUp)

function setMouseDown() {
    mouseState = "down"
}

function setMouseUp() {
    mouseState = "up"
}

// generate 16 x 16 grid on page load
for (i = 1; i <= 16 * 16; i++) {
    const square = document.createElement('div');
    square.style.height = "50px";
    square.style.width = "50px";
    square.style.boxSizing = "border-box";
    square.classList.add("box");
    square.setAttribute('draggable', false);
    square.addEventListener('mouseover', changeColor);
    square.addEventListener('mousedown', function(e){
        e.preventDefault();
    })
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
    if (mouseState === 'down') {
        if (currentBrush === "rainbow") {
            let customColor = randomColor()
            this.style.background = `${customColor}`;
        } else if (currentBrush === "black") {
            this.style.background = "rgb(0, 0, 0)";
        } else if (currentBrush === "pencil") {
            let currentRGBA = this.style.backgroundColor;
            switch(currentRGBA) {
                case 'rgba(0, 0, 0, 0.1)':
                    this.style.background = 'rgba(0, 0, 0, 0.2)';
                    break;
                case 'rgba(0, 0, 0, 0.2)':
                    this.style.background = 'rgba(0, 0, 0, 0.3)';
                    break;
                case 'rgba(0, 0, 0, 0.3)':
                    this.style.background = 'rgba(0, 0, 0, 0.4)';
                    break;
                case 'rgba(0, 0, 0, 0.4)':
                    this.style.background = 'rgba(0, 0, 0, 0.5)';
                    break;
                case 'rgba(0, 0, 0, 0.5)':
                    this.style.background = 'rgba(0, 0, 0, 0.6)';
                    break;
                case 'rgba(0, 0, 0, 0.6)':
                    this.style.background = 'rgba(0, 0, 0, 0.7)';
                    break;
                case 'rgba(0, 0, 0, 0.7)':
                    this.style.background = 'rgba(0, 0, 0, 0.8)';
                    break;
                case 'rgba(0, 0, 0, 0.8)':
                    this.style.background = 'rgba(0, 0, 0, 0.9)';
                    break;
                case 'rgba(0, 0, 0, 0.9)':
                    this.style.background = 'rgb(0, 0, 0)';
                    break;
                case 'rgb(0, 0, 0)':
                    this.style.background = 'rgba(0, 0, 0)';
                    break;
                default:
                    this.style.background = 'rgba(0, 0, 0, 0.1)';
            }
        }
    } else {
        return;
    }
    
}


// create new grid on 'New Canvas' button press
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
        square.setAttribute('draggable', "false");
        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', function(e){
            e.preventDefault();
        })
        
        drawingField.appendChild(square);
    }
}
 
    
}
// determine color randomly 
function randomColor() {
    let red = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    return `rgb(${red}, ${blue}, ${green})`;
} 