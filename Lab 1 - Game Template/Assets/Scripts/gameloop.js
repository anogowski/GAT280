var FPS = 30;
function loop() {
    runGameTimer();
    stage.update();
}
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);

loop();
