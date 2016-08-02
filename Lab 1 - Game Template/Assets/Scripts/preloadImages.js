manifest = [
    {src:"TitleScreen.png", id:"title"},
    {src:"GameScreen.png", id:"background"},
    {src:"Instructions.png", id:"instructions"},
    {src:"GameOver.png", id:"gameover"},
    {src:"Sign.png", id:"levelsign"}
];
 
var queue;
 
function loadFiles() {
    queue = new createjs.LoadQueue(true, imgSrc);  //files are stored in 'images' directory
    queue.on("complete", loadComplete, this);  //when loading is done run 'loadComplete()'
    queue.loadManifest(manifest);  //load files listed in 'manifest'
}
 
var titleScreen;
var backgroundScreen;
var instructionScreen;
var gameoverScreen;
var levelFrame;

function loadComplete(evt) {
    //once the files are loaded, put them into usable objects
    titleScreen = new createjs.Bitmap(queue.getResult("title"));
    backgroundScreen = new createjs.Bitmap(queue.getResult("background"));
    instructionScreen = new createjs.Bitmap(queue.getResult("instructions"));
    gameoverScreen = new createjs.Bitmap(queue.getResult("gameover"));
    levelFrame = new createjs.Bitmap(queue.getResult("levelsign"));
    
    stage.addChild(titleScreen);
    stage.addChild(backgroundScreen);
    backgroundScreen.visible = false;
    
    stage.addChild(instructionScreen);
    instructionScreen.visible = false;
    
    stage.addChild(gameoverScreen);
    gameoverScreen.visible = false;
    
    stage.addChild(levelFrame);
    levelFrame.visible = false;
    stage.update();
}

loadFiles();