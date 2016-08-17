var padX = 10;
var padY = 75;
var grassTop = 300;

function bounds() {
    if (goblin.x >= CANVAS_WIDTH - (padX * 5)) {
        goblin.x = CANVAS_WIDTH - (padX * 5);
    } else if (goblin.x <= 0 + padX) {
        goblin.x = padX;
    }

    if (goblin.y >= CANVAS_HEIGHT - padY) {
        goblin.y = CANVAS_HEIGHT - padY;
    } else if (goblin.y <= grassTop + padY) {
        goblin.y = grassTop + padY;
    }
}

function testHit() {
    for (i = 0; i < numBats; ++i) {
        var intersection = ndgmr.checkPixelCollision(goblin, bats[i], 1, true);
        if (intersection) {
            if (attacking) {} else {
                affectHealth(-10);
            }
            bats[i].visible = false;
        }
    }
}