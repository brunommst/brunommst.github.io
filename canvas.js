var canvas;
var mic;
var value = 255;

function windowResized() {
    //console.log('resized');
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    var height = $("#module-draw").outerHeight();
    var width = $("#module-draw").outerWidth();

    canvas = createCanvas(width, height);
    canvas.parent("module-draw");
    
    canvas.style('z-index', '-1');
    canvas.style('position', 'static');

    frameRate(60);
}


function draw() {
    fill(value);
    ellipse(mouseX-50, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
    $("canvas")[0].getContext('2d').clearRect(0, 0, width, height);
}

function keyTyped() {
    if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }    
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

