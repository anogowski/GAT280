var Title = "Title";
var Menu = "Menu";
var Play ="Play";
var GameOver = "GameOver";
 

var GameState = Title;


function SwitchState()
{
    switch(GameState)
        {
            case Title:               
                titleScreen.addEventListener("click", function(event) {
                    levelFrame.visible = true;
                    backgroundScreen.visible = true;
                    walk.visible = true;
                    titleScreen.visble = false;
                    tweenObj();
                    GameState = Menu;
                console.log("TitleEnd");
                });
                break;
                
            case Menu:
                levelFrame.addEventListener("click", function(event) {
                    GameState = Play; 
                    levelFrame.visible = false;

                    console.log("MenuEnd");
                });
                break;
                
            case Play:
                console.log(gameTimer);
                if (gameTimer > 20)
                {
                    backgroundScreen.visible = false;
                    walk.visible = false;
                    gameoverScreen.visible = true;
                    GameState = GameOver; 
                    console.log("PlayEnd");
                }
                break;
            
            case GameOver:
                gameoverScreen.addEventListener("click",  function(event) {
                    gameoverScreen.visible = false;
                    resetGameTimer()
                    GameState = Title;
                    console.log("GameOverEnd");
                });            
                break;
        }
}

var myTween;
 
function tweenComplete(tween) {
    console.log("Tween Complete!");
}
 
function tweenObj() {
    myTween = createjs.Tween.get(levelFrame,{loop:false})
        .wait(500)
        .to({x:200, y:200, rotation:0}, 1500, createjs.Ease.bounceOut)
        .wait(2000)
        .to({y:400, rotation:0}, 1000, createjs.Ease.backIn)
        .call(tweenComplete);
 
}
