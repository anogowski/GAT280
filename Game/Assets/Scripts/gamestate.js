var Setup = "Setup";
var Title = "Title";
var Menu = "Menu";
var Play = "Play";
var GameOver = "GameOver";
var Instuctions = "Instructions";
var container;
var levelText;
var score;
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

        blockArray[3].addEventListener("click", function (event) {
            if (isMuted) {
                blockArray[3].gotoAndStop(15);
                isMuted = !isMuted;
                bgm.volume = 0.5;
            } else {
                blockArray[3].gotoAndStop(16);
                isMuted = !isMuted;
                bgm.volume = 0;
            }
        });

        container = new createjs.Container();
        levelText = new createjs.Text(1, "15px Arial", "#FFF");
        levelText.x = 100;
        levelText.y = 100;
        levelFrame.x = 0;
        levelFrame.y = 0;
        levelFrame.visible = true;
        container.addChild(levelFrame, levelText);
        container.x = CANVAS_WIDTH / 2 - 100;
        container.y = CANVAS_HEIGHT / 2;
        container.visible = false;
        stage.addChild(container);

        score = new createjs.Text("Score: " + 100, "15px Arial", "#F00");
        score.x = 5;
        score.y = 5;
        score.visible = false;
        stage.addChild(score);
        GameState = Title;
        break;
    case Title:
        break;

    case Menu:

        break;

    case Play:
        runGameTimer();
        myText.text = "Time: " + gameTimer;
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
    container.visible = false;
    score.visible = true;

    GameState = Play;
}

function tweenObj() {

    container.visible = true;
    container.y = -200;
    myTween = createjs.Tween.get(container, {
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
    container.visible = false;
    backgroundScreen.visible = false;
    gameoverScreen.visible = false;
    instructionScreen.visible = false;
    score.visible = false;
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
    container.visible = false;
    backgroundScreen.visible = true;
    gameoverScreen.visible = false;
    score.visible = false;
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
    container.visible = false;
    backgroundScreen.visible = true;
    gameoverScreen.visible = false;
    score.visible = false;
    myText.visible = false;
    mouseText.visible = false;
    resetGameTimer();
    blockArray[0].visible = true;
    blockArray[1].visible = false;
    blockArray[2].visible = true;
}

function GameOverStart() {
    titleScreen.visible = false;
    container.visible = false;
    backgroundScreen.visible = false;
    gameoverScreen.visible = true;
    instructionScreen.visible = false;
    score.visible = true;
    myText.visible = false;
    mouseText.visible = false;
    resetGameTimer();
    blockArray[0].visible = true;
    blockArray[1].visible = true;
    blockArray[2].visible = true;
}