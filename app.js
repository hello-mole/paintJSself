const canvas = document.getElementById("jscanvas");
const range = document.getElementById("jsrange");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jscolorbtn");
const clear = document.getElementById("jsclear");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const CANVAS_SIZE = 400;
const INITIAL_COLOR = "#343a40"

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let painting = false;
let full = false;

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
    if(event.button === 0){
    painting = true;}
}

function stopPainting(event){
    painting = false;
}

function handleChangeColor(event){
    changedColor = event.target.style.backgroundColor
    ctx.strokeStyle = changedColor;
}

function handleResetCanvas(event){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function handleChangeMode(event){
    if(!full){
        full = true;
        mode.innerText = "full";
    } else {
        full = false;
        mode.innerText = "paint";
    }
}

function changeCanvasColor(event){
    ctx.fillStyle = ctx.strokeStyle
    if(full){
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleSave(event){
    const image = canvas.toDataURL('image/png');
    const link = document.createElement("a");
    link.href = image;
    link.download = "paintJS";
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("click", changeCanvasColor);
    canvas.addEventListener("contextmenu", e => e.preventDefault())
}

if(range){
    range.addEventListener("input", handleBrushSize)
}

Array.from(colors).forEach(color => color.addEventListener("click", handleChangeColor))

if(clear){
    clear.addEventListener("click", handleResetCanvas);
}

if(mode){
    mode.addEventListener("click", handleChangeMode);
}

if(save){
    save.addEventListener("click", handleSave);
}