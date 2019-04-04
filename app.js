var r = [];
var move = [true, true, true];
var saba = false;
var sabaImage;

function preload() {
    sabaImage = loadImage("saba.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    frameRate(10);
    imageMode(CENTER);
    r = [int(random(39800, 40000)), int(random(39800, 40000)), int(random(39800, 40000))];
}

function draw() {
    background(255);
    textAlign(CENTER, CENTER);
    for (var i = 0; i < 3; i++) {
        if (r[i] > 40000) r[i] = 39800;
        textSize(80);
        text(String.fromCodePoint(r[i] + 1), width / 2 + i * 110 - 110, height / 2 - 100);
        textSize(100);
        text(String.fromCodePoint(r[i]), width / 2 + i * 110 - 110, height / 2);
        textSize(80);
        text(String.fromCodePoint(r[i] - 1), width / 2 + i * 110 - 110, height / 2 + 100);
        text(String.fromCodePoint(8592 + i), width / 2 + i * 110 - 110, height / 2 + 200);
        text(String.fromCodePoint(8595) + "再開", width / 2, height / 2 + 300);
        if (r[i] === 39894) {
            image(sabaImage, width / 4 * (i + 1), 100);
            if (saba) move[i] = false;
        }
        if (move[i]) r[i]++;
    }
}

function mousePressed() {
    if (mouseX < width / 2 - 110 + 40 && mouseX > width / 2 - 110 - 40 && mouseY < height / 2 + 200 + 40 && mouseY > height / 2 + 200 - 40) {
        move[0] = false;
    }
    if (mouseX < width / 2 + 40 && mouseX > width / 2 - 40 && mouseY < height / 2 + 200 + 40 && mouseY > height / 2 + 200 - 40) {
        move[1] = false;
    }
    if (mouseX < width / 2 + 110 + 40 && mouseX > width / 2 + 110 - 40 && mouseY < height / 2 + 200 + 40 && mouseY > height / 2 + 200 - 40) {
        move[2] = false;
    }
    if (mouseX < width / 2 + 100 && mouseX > width / 2 - 100 && mouseY < height / 2 + 340 && mouseY > height / 2 + 260) {
        allMove();
    }
}

function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW:
            move[0] = false;
            break;
        case UP_ARROW:
            move[1] = false;
            break;
        case RIGHT_ARROW:
            move[2] = false;
            break;
        case DOWN_ARROW:
            allMove();
            break;
        case ENTER:
            saba = true;
            break;
    }
}

function allMove() {
    for (var f = 0; f < 3; f++) {
        move[f] = true;
    }
}