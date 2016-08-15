function testHit() {
    var intersection = ndgmr.checkPixelCollision(goblin, bat, 0, true);
    if (intersection) {
        console.log("hit");
    }
}