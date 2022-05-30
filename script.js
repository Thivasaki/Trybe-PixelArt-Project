const colors = document.getElementsByClassName('color');
const pixelGrid = document.getElementById('pixel-board');
const pixelToColor = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');
const generateBoard = document.getElementById('generate-board');

function colorPalette() {
  colors[0].style.backgroundColor = 'black';
  for (let i = 1; i < 4; i += 1) {
    colors[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }
}

function minGrid() {
  for (let i = 0; i < 25; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelGrid.appendChild(createPixel);
  }
}

function maxGrid() {
  for (let i = 0; i < 2500; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelGrid.appendChild(createPixel);
  }
}

function deleteAllGrid() {
  while (pixelGrid.hasChildNodes()) {
    pixelGrid.removeChild(pixelGrid.firstChild);
  }
}

function alertRed() {
  if (document.getElementById('board-size').value === '') {
    return alert('Board inválido!');
  }
}

function changeGrid() {
  alertRed();
  deleteAllGrid();
  for (let i = 0; i < parseInt(document.getElementById('board-size').value, 10) ** 2; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelGrid.appendChild(createPixel);
  }
  pixelGrid.style.maxWidth = 42 * parseInt(document.getElementById('board-size').value, 10) + 'px';
}

function minMaxGrid() {
  if (parseInt(document.getElementById('board-size').value, 10) < 5) {
    deleteAllGrid();
    minGrid();
  } else if (parseInt(document.getElementById('board-size').value, 10) > 50) {
    deleteAllGrid();
    maxGrid();
  } else {
    changeGrid();
  }
}

function startBlack() {
  colors[0].classList.add('selected');
  return alert('COMEÇA COM A COR PRETA');
}

function selectColor(event) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.contains('selected')) {
      colors[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function paintPixel(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function clearPixelBoard() {
  for (let i = 0; i < pixelToColor.length; i += 1) {
    pixelToColor[i].style.backgroundColor = 'white';
  }
}

colorPalette();
minGrid();

window.onload = startBlack;

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', selectColor);
}

for (let i = 0; i < pixelToColor.length; i += 1) {
  pixelToColor[i].addEventListener('click', paintPixel);
}

clearButton.addEventListener('click', clearPixelBoard);
generateBoard.addEventListener('click', minMaxGrid);
