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
//    console.log(width);
    
  canvas = createCanvas(width, height);
  canvas.parent("centerside");
  canvas.position(left+10, top);
  canvas.style('z-index', '-1');
  canvas.style('width', '100%');

}

function mousePressed() {
  clear();
}

function draw() {
  ellipse(mouseX, mouseY, pmouseX, pmouseY);

}
