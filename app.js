const canvas = document.getElementById("jscanvas");
const range = document.getElementById("jsrange");
const ctx = canvas.getContext('2d');

const FIRST_COLOR = "#343a40";
const CANVAS_SIZE = 400;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.strokeStyle = FIRST_COLOR;

let painting = false
let x = 0;
let y = 0;
const rect = canvas.getBoundingClientRect();

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
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

function handleMouseOut(event){
    painting = false;
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseout", handleMouseOut);
}