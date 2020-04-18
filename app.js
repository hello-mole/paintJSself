const canvas = document.getElementById("jscanvas");
const range = document.getElementById("jsrange");
const ctx = canvas.getContext('2d');

const CANVAS_SIZE = 400;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = "#343a40";
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

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
}

if(range){
    range.addEventListener("input", handleBrushSize)
}