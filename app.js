const canvas = document.getElementById("jscanvas");
const range = document.getElementById("jsrange");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jscolorbtn");

const CANVAS_SIZE = 400;
const INITIAL_COLOR = "#343a40"

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;

function handleBrushSize(event){
    brushSize = range.value;
    ctx.lineWidth = brushSize;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startPainting(event){
    painting = true;
}

function stopPainting(event){
    painting = false;
}

function handleChangeColor(event){
    changedColor = event.target.style.backgroundColor
    ctx.strokeStyle = changedColor;
}

Array.from(colors).forEach(color => color.addEventListener("click", handleChangeColor))

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
}

if(range){
    range.addEventListener("input", handleBrushSize)
}