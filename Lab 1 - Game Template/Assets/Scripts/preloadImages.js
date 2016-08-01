imgManifest = [
    {
        src : "TitleScreen.png",
        id  : "title"
    },
    {
        src : "GameScreen.png",
        id  : "background"
    },
    {
        src : "Instructions.png",
        id  : "instructions"
    },
    {
        src : "GameOver.png",
        id  : "gameover"
    },
    {
        src : "Sign.png",
        id  : "levelsign"
    }  
]
//var imgSrc = "Assets/Images/";
var queue;
var titleScreen;
function loadImages(){
    queue = new createjs.LoadQueue(true, imgSrc);
    queue.on("complete", loadImgComplete, this);
    queue.loadManifest(imgManifest);
}

function loadImgComplete(evt){
    titleScreen = new createjs.Bitmap(queue.getResult('title'));    //returns null
    //titleScreen = new createjs.Bitmap(imgManifest[0].src);        //Works
    backgroundScreen = new createjs.Bitmap(queue.getResult("background"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instructions"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
    levelFrame = new createjs.Bitmap(queue.getResult("levelsign"));
    
    stage.addChild(titleScreen);
    stage.update();
}

loadImages();