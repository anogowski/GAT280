var Setup = "Setup";
var Title = "Title";
var Menu = "Menu";
var Play = "Play";
var GameOver = "GameOver";
var Instuctions = "Instructions";


var GameState = Setup;


function SwitchState() {
    switch (GameState) {
    case Setup:
        blockArray[0].addEventListener("click", function (event) {
            TitleEnd();
        });
        blockArray[1].addEventListener("click", function (event) {
            InstructionsStart();
        });
        blockArray[2].addEventListener("click", function (event) {
            MainMenu();
        });
        blockArray[2].visible = false;

        blockArray[2].x = CANVAS_WIDTH - 100;
        blockArray[2].y = 5;
        GameState = Title;
        break;
    case Title:
        break;

    case Menu:

        break;

    case Play:
        runGameTimer();
        myText.text = gameTimer;
        mouseText.text = "x: " + mouseX + " y: " + mouseY;
        if (gameTimer > 10) {
            GameOverStart();
        }
        break;

    case GameOver:

        break;
    }
}

var myTween;

function tweenComplete(tween) {
    console.log("Tween Complete!");
    myText.visible = true;
    mouseText.visible = true;
    levelFrame.visible = false;
    GameState = Play;
}

function tweenObj() {
    levelFrame.visible = true;
    levelFrame.x = CANVAS_WIDTH / 2 - 100;
    levelFrame.y = -200;

    myTween = createjs.Tween.get(levelFrame, {
            loop: false
        })
        .wait(500)
        .to({
            x: CANVAS_WIDTH / 2 - 100,
            y: CANVAS_HEIGHT / 2 - 75,
            rotation: 0
        }, 1500, createjs.Ease.bounceOut)
        .wait(2000)
        .to({
            y: 800,
            rotation: 0
        }, 1000, createjs.Ease.backIn)
        .call(tweenComplete);
}


function MainMenu() {
    titleScreen.visible = true;
    levelFrame.visible = false;
    backgroundScreen.visible = false;
    gameoverScreen.visible = false;
    instructionScreen.visible = false;
    walk.visible = false;
    myText.visible = false;
    mouseText.visible = false;
    resetGameTimer()
    blockArray[0].visible = true;
    blockArray[1].visible = true;
    blockArray[2].visible = false;

    GameState = Title;
}

function TitleEnd() {
    titleScreen.visible = false;
    instructionScreen.visible = false;
    levelFrame.visible = false;
    backgroundScreen.visible = true;
    gameoverScreen.visible = false;
    walk.visible = true;
    myText.visible = false;
    mouseText.visible = false;
    tweenObj();
    blockArray[0].visible = false;
    blockArray[1].visible = false;
    blockArray[2].visible = true;
    GameState = Menu;
}

function InstructionsStart() {
    titleScreen.visible = false;
    instructionScreen.visible = true;
    levelFrame.visible = false;
    backgroundScreen.visible = true;
    gameoverScreen.visible = false;
    walk.visible = false;
    myText.visible = false;
    mouseText.visible = false;
    resetGameTimer();
    blockArray[0].visible = true;
    blockArray[1].visible = false;
    blockArray[2].visible = true;
}

function GameOverStart() {
    titleScreen.visible = false;
    levelFrame.visible = false;
    backgroundScreen.visible = false;
    gameoverScreen.visible = true;
    instructionScreen.visible = false;
    walk.visible = false;
    myText.visible = false;
    mouseText.visible = false;
    resetGameTimer();
    blockArray[0].visible = true;
    blockArray[1].visible = true;
    blockArray[2].visible = true;
}