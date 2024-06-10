// sketch.js

let noiseOffset = 0.0;
let noiseIncrement = 0.02; // Faster increment for more noticeable movement
let baseRadius = 150; // Base radius of the shape
let noiseFactor = 50; // Factor for noise variation
let mouseOverNoiseFactor = 100; // Factor for noise variation when mouse is over
let currentNoiseFactor = noiseFactor; // Current noise factor

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(255); // White background
    fill(0, 0, 0, 70); // Black amorphous object with some transparency
    translate(width / 2, height / 2);
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += 0.1) {
        let radius =
            baseRadius +
            map(
                noise(noiseOffset + cos(angle), noiseOffset + sin(angle)),
                0,
                1,
                -currentNoiseFactor,
                currentNoiseFactor
            );
        let x = radius * cos(angle);
        let y = radius * sin(angle);
        vertex(x, y);
    }
    endShape(CLOSE);
    noiseOffset += noiseIncrement;
    filter(BLUR, 8); // Reduced blur to prevent heavy processing
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    currentNoiseFactor = mouseOverNoiseFactor; // Increase noise factor when mouse is over
}

function mouseOut() {
    currentNoiseFactor = noiseFactor; // Revert noise factor when mouse is out
}
