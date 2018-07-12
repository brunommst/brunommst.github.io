var canvas;
var mic;

function windowResized() {
    //console.log('resized');
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {


    var element = document.getElementById('centerside');
    var positionInfo = element.getBoundingClientRect();

    var height = positionInfo.height;
    var width = $("#centerside").width();
    var top = positionInfo.top;
    var left = positionInfo.left;
    var right = positionInfo.right;

    canvas = createCanvas(width, height);
    canvas.parent("centerside");

    if (windowWidth > 600) {
        canvas.position(left+30, top);
    } else {
        canvas.position(left, top);
    }
    canvas.style('z-index', '-1');
    canvas.style('width', '100vw');

    frameRate(60);
}


function draw() {
    ellipse(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
    $("canvas")[0].getContext('2d').clearRect(0, 0, width, height);
}

