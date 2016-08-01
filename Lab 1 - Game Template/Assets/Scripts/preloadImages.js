manifest = [
    {
        src : "TitleScreen.png",
        id  : "Title"
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


var imgSrc = "Assets/Images/";

function loadImages(){
  var queue = new createjs.LoadQueue(true, imgSrc); 
    queue.on("complete", loadImgComplete, this);
    queue.loadManifest(manifest);
}

function loadImgComplete(evt){
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    backgroundScreen = new createjs.Bitmap(queue.getResult("background"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instructions"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
    levelFrame = new createjs.Bitmap(queue.getResult("levelsign"));
    titleScreen.visibility = true;
}

loadImages();