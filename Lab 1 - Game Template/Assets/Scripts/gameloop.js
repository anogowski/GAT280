var FPS = 30;
function loop() {
    runGameTimer();
    //SwitchState();
    stage.update();
}
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);

loop();
