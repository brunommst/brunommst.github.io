// Sketch Two
var t = function (p) {

    p.setup = function () {
    var canvasDiv = document.getElementById('c2');
    var cwidth = canvasDiv.offsetWidth;
    var cheight = canvasDiv.offsetHeight;
        p.createCanvas(cwidth, cheight);
        p.pixelDensity(2);
        p.background(0);
    }

    p.draw = function () {
        p.fill('rgba(255,255,255,0.4)');
        p.stroke(0)
        p.ellipse(p.mouseX, p.mouseY, p.width * .4, p.height * .4);
    }

    p.touchStarted = function () {
        p.fill('rgba(255,255,255,0.4)');
        p.stroke(0)
        for (var i = 0; i < p.touches; i++) {
            p.ellipse(p.mouseX, p.mouseY, p.width * .4, p.height * .4);
        }
    }

    p.mousePressed = function () {
        p.clear();
    }

    p.windowResized = function() {
        var canvasDiv = document.getElementById('c2');
    var cwidth = canvasDiv.offsetWidth;
    var cheight = canvasDiv.offsetHeight;
        p.resizeCanvas(cwidth, cheight);
    }
};
var myp5 = new p5(t, 'c2');
