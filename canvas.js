var canvas;
var mic;

function windowResized() {
    //console.log('resized');
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {


//    var element = document.getElementById('centerside');
//    var positionInfo = element.getBoundingClientRect();
//
//    var height = positionInfo.height;
    var height = $("#module-draw").height();
    var width = $("#module-draw").width();

    canvas = createCanvas(width, height);
    canvas.parent("module-draw");
    
    canvas.style('z-index', '-1');
    canvas.style('position', 'static');

    frameRate(60);
}


function draw() {
    ellipse(mouseX-150, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
    $("canvas")[0].getContext('2d').clearRect(0, 0, width, height);
}

