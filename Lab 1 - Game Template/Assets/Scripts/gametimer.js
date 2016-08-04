var frameCount, gameTimer;

function resetGameTimer() {
    frameCount = 0;
    gameTimer = 0;
}
var  myText = new createjs.Text(gameTimer, "12px Arial", "#000");  

function gameTimerSetup(){
    myText.x = 10;
    myText.y = 50; 
    stage.addChild(myText);
 
}
function runGameTimer() {
    ++frameCount;
    if(frameCount % (FPS/10) === 0) {
        gameTimer = frameCount / (FPS);
    }
}
resetGameTimer();
gameTimerSetup();
