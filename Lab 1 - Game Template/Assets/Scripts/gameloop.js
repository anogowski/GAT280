var FPS = 30;

function loop() {
    SwitchState();
    //myText.text = gameTimer;
    stage.update();
}
createjs.Ticker.addEventListener("tick", loop);
createjs.Ticker.setFPS(FPS);

loop();