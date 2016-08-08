var Title = "Title";
var Menu = "Menu";
var Play = "Play";
var GameOver = "GameOver";


var GameState = Title;


function SwitchState() {
    switch (GameState) {
    case Title:
        titleScreen.addEventListener("click", function (event) {
            levelFrame.visible = true;
            backgroundScreen.visible = true;
            walk.visible = true;
            titleScreen.visible = false;
            tweenObj();
            GameState = Menu;
            console.log("TitleEnd");
        });
        break;

    case Menu:
        levelFrame.addEventListener("click", function (event) {
            levelFrame.visible = false;
            console.log("MenuEnd");
        });
        break;

    case Play:
        runGameTimer();
        console.log(gameTimer);
        myText.text = gameTimer;
        mouseText.Text = "x: " + mouseX + " y: " + mouseY;
        if (gameTimer > 10) {
            backgroundScreen.visible = false;
            walk.visible = false;
            gameoverScreen.visible = true;
            GameState = GameOver;
            console.log("PlayEnd");
        }
        break;

    case GameOver:
        gameoverScreen.addEventListener("click", function (event) {
            gameoverScreen.visible = false;
            resetGameTimer()
            GameState = Title;
            titleScreen.visible = true;
            console.log("GameOverEnd");
        });
        break;
    }
}

var myTween;

function tweenComplete(tween) {
    console.log("Tween Complete!");
    myText.visible = true;
    mouseText.visible = true;
    GameState = Play;
}

function tweenObj() {
    levelFrame.x = CANVAS_WIDTH / 2;
    levelFrame.y = -200;

    myTween = createjs.Tween.get(levelFrame, {
            loop: false
        })
        .wait(500)
        .to({
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2,
            rotation: 0
        }, 1500, createjs.Ease.bounceOut)
        .wait(2000)
        .to({
            y: 800,
            rotation: 0
        }, 1000, createjs.Ease.backIn)
        .call(tweenComplete);

}