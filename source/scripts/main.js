var wbScale = 1200;
var gridDefaultColor = "#444";
var gridDefaultSpcing = 20;

var workbench = document.querySelector("#workbench");
    workbench.width = wbScale;
    workbench.height = wbScale;

var wbContext = workbench.getContext("2d");

function drawGrid(spacing) {

}

function drawLine(mode, multiplier, color, width) {

    var startPoint;
    var endPoint;

    if(mode === "horisontal") {
        startPoint = [gridDefaultSpcing, gridDefaultSpcing * multiplier];
        endPoint = [wbScale - gridDefaultSpcing, gridDefaultSpcing * multiplier];
    };

    if(mode === "vertical") {
        startPoint = [gridDefaultSpcing  * multiplier, gridDefaultSpcing]; // x y 
        endPoint = [gridDefaultSpcing * multiplier, wbScale - gridDefaultSpcing]; // x y
    }

    wbContext.lineWidth = width;
    wbContext.strokeStyle = color;
    wbContext.beginPath();
    wbContext.moveTo(startPoint[0], startPoint[1]);
    wbContext.lineTo(endPoint[0], endPoint[1]);
    wbContext.stroke();
}

for(let i = 1; i < wbScale / gridDefaultSpcing; i++) {
    drawLine("horisontal", i, "#444", 0.2);
    drawLine("vertical", i, "#444", 0.2);
}


