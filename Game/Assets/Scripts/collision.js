var padX = 10;
var padY = 75;
var grassTop = 500;

function bounds() {
    if (goblin.x >= CANVAS_WIDTH - (padX * 3)) {
        goblin.x = CANVAS_WIDTH - padX;
    } else if (goblin.x <= 0 + padX) {
        goblin.x = padX;
    }

    if (goblin.y >= CANVAS_HEIGHT - padY) {
        goblin.y = CANVAS_HEIGHT - padY;
    } else if (goblin.y <= grassTop + padY) {
        goblin.y = grassTop + padY;
    }
    console.log("x: " + goblin.x + " y: " + goblin.y);
}

function testHit() {
    var intersection = ndgmr.checkPixelCollision(goblin, bat, 0, true);
    if (intersection) {
        console.log("hit");
    }
}