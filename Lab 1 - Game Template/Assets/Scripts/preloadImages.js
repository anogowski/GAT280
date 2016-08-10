var queue;
var sprites, walk, buttons;
var blockArray = [];
var blockArrayLength = 3;
var titleScreen;
var backgroundScreen;
var instructionScreen;
var gameoverScreen;
var levelFrame;
var menuX;
var menuY;
var isMuted = false;
manifest = [
    {
        src: "TitleScreen.png",
        id: "title"
    },
    {
        src: "GameScreen.png",
        id: "background"
    },
    {
        src: "Instructions.png",
        id: "instructions"
    },
    {
        src: "GameOver.png",
        id: "gameover"
    },
    {
        src: "Sign.png",
        id: "levelsign"
    },
    {
        src: "sprites.png",
        id: "mySprites"
    },
    {
        src: "buttons.png",
        id: "button"
    }
];


function loadFiles() {
    queue = new createjs.LoadQueue(true, imgSrc); //files are stored in 'images' directory
    queue.on("complete", loadComplete, this); //when loading is done run 'loadComplete()'
    queue.loadManifest(manifest); //load files listed in 'manifest'
}


function loadComplete(evt) {
    //once the files are loaded, put them into usable objects
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    backgroundScreen = new createjs.Bitmap(queue.getResult("background"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instructions"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
    levelFrame = new createjs.Bitmap(queue.getResult("levelsign"));

    addBackGroundToStage();
    addSpritesToStage();
    addButtonsToStage();
    stage.update();

}

function addBackGroundToStage() {
    stage.addChild(titleScreen);
    stage.addChild(backgroundScreen);
    backgroundScreen.visible = false;

    stage.addChild(instructionScreen);
    instructionScreen.visible = false;

    stage.addChild(gameoverScreen);
    gameoverScreen.visible = false;

    stage.addChild(levelFrame);
    menuX = (CANVAS_WIDTH / 2);
    menuY = (CANVAS_HEIGHT / 2);
    levelFrame.x = menuX;
    levelFrame.y = menuY;
    levelFrame.visible = false;

    stage.addChild(myText);
    myText.visible = false;

    stage.addChild(mouseText);
    mouseText.visible = false;
}

function addSpritesToStage() {
    var walkSheet = new createjs.SpriteSheet({
        images: [queue.getResult("mySprites")],
        frames: [[160, 0, 19, 49, 0, 10.05, 48.6], [179, 0, 34, 44, 0, 17.05, 43.6], [213, 0, 22, 46, 0, 9.05, 45.6], [235, 0, 17, 49, 0, 8.05, 48.6], [0, 49, 25, 49, 0, 10.05, 48.6], [25, 49, 31, 46, 0, 14.05, 45.6], [56, 49, 33, 44, 0, 16.05, 43.6], [89, 49, 30, 44, 0, 17.05, 43.6], [119, 49, 28, 46, 0, 17.05, 45.6], [147, 49, 19, 49, 0, 10.05, 48.6], [166, 49, 23, 49, 0, 14.05, 48.6], [189, 49, 31, 46, 0, 16.05, 45.6], [220, 49, 34, 44, 0, 17.05, 43.6], [0, 98, 19, 49, 0, 9.05, 48.6], [19, 98, 34, 44, 0, 17.05, 43.6], [53, 98, 22, 46, 0, 13.05, 45.6], [75, 98, 17, 49, 0, 9.05, 48.6], [92, 98, 25, 49, 0, 15.05, 48.6], [117, 98, 31, 46, 0, 17.05, 45.6], [148, 98, 33, 44, 0, 17.05, 43.6], [181, 98, 30, 44, 0, 13.05, 43.6], [211, 98, 28, 46, 0, 11.05, 45.6], [0, 147, 19, 49, 0, 9.05, 48.6], [19, 147, 23, 49, 0, 9.05, 48.6], [42, 147, 31, 46, 0, 15.05, 45.6], [73, 147, 34, 44, 0, 17.05, 43.6]],
        animations: {
            standRight: [0, 0, "standRight"],
            walkRight: [1, 12, "walkRight", .5],
            standLeft: [13, 13, "standLeft"],
            walkLeft: [14, 25, "walkLeft", .5]
        }
    });

    walk = new createjs.Sprite(walkSheet); //create a sprite from the frame and animation data
    walk.x = CANVAS_WIDTH / 2;
    walk.y = 500;
    walk.gotoAndPlay("walkRight"); //loops through the animation frames (1-12) as defined above
    stage.addChild(walk);
    walk.visible = false;
}



function addButtonsToStage() {
    var buttonSheet = new createjs.SpriteSheet({
        images: [queue.getResult("button")],
        frames: [[0, 0, 94, 33, 0, 1, 1], [94, 0, 94, 33, 0, 1, 1], [0, 33, 94, 33, 0, 1, 1], [94, 33, 94, 33, 0, 1, 1], [0, 66, 94, 33, 0, 1, 1], [94, 66, 94, 33, 0, 1, 1], [0, 99, 94, 33, 0, 1, 1], [94, 99, 94, 33, 0, 1, 1], [0, 132, 94, 33, 0, 1, 1], [94, 132, 94, 33, 0, 1, 1], [0, 165, 94, 33, 0, 1, 1], [94, 165, 94, 33, 0, 1, 1], [0, 198, 94, 33, 0, 1, 1], [94, 198, 94, 33, 0, 1, 1], [0, 231, 94, 33, 0, 1, 1], [94, 231, 31, 31, 0, 0, 0], [125, 231, 31, 31, 0, 0, 0]],
        animations: {
            playUp: [0, 0, "playUp"],
            playOver: [1, 1, "playOver"],
            playDown: [2, 2, "playDown"],
            instructUp: [3, 3, "instructUp"],
            instructOver: [4, 4, "instructOver"],
            instructDown: [5, 5, "instructDown"],
            menuUp: [6, 6, "menuUp"],
            menuOver: [7, 7, "menuOver"],
            menuDown: [8, 8, "menuDown"],
            continueUp: [9, 9, "continueUp"],
            continueOver: [10, 10, "continueOver"],
            continueDown: [11, 11, "continueDown"],
            playAgainUp: [12, 12, "playAgainUp"],
            playAgainOver: [13, 13, "playAgainOver"],
            playAgainDown: [14, 14, "playAgainDown"],
            muteOff: [15, 15, "muteOff"],
            muteOn: [16, 16, "muteOn"]
        }
    });
    buttons = new createjs.Sprite(buttonSheet);
    buttons.x = CANVAS_WIDTH / 2 - 25;
    buttons.y = CANVAS_HEIGHT / 2;

    for (i = 0; i < blockArrayLength; i++) {
        buttons.x = CANVAS_WIDTH / 2 - 20;
        buttons.y = CANVAS_HEIGHT / 2 + i * 50;
        buttons.gotoAndStop(i * 3);
        blockArray.push(buttons.clone());
    }

    buttons.x = 10;
    buttons.y = CANVAS_HEIGHT - 40;
    buttons.gotoAndStop(15);
    blockArray.push(buttons.clone());


    for (j = 0; j < blockArray.length; j++) {
        stage.addChild(blockArray[j]);
    }
}

loadFiles();