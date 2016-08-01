var imgSrc = "Assets/Images/";
manifest = [
    {src:"sprites.png", id:"mySprites"},
    {src:"buttons.png", id:"button"}
];
 
var sprites, walk;
 
function loadComplete(evt) {
    //define the frames frome the loaded sprite sheet 
    //the frames data comes from the sprite sheet export from Flash
    //animations assigns labels to particular sets of frames so they can be accessed by that label
    var walkSheet = new createjs.SpriteSheet({
        images: [queue.getResult("mySprites")],
        frames: [[160,0,19,49,0,10.05,48.6],[179,0,34,44,0,17.05,43.6],[213,0,22,46,0,9.05,45.6],[235,0,17,49,0,8.05,48.6],[0,49,25,49,0,10.05,48.6],[25,49,31,46,0,14.05,45.6],[56,49,33,44,0,16.05,43.6],[89,49,30,44,0,17.05,43.6],[119,49,28,46,0,17.05,45.6],[147,49,19,49,0,10.05,48.6],[166,49,23,49,0,14.05,48.6],[189,49,31,46,0,16.05,45.6],[220,49,34,44,0,17.05,43.6],[0,98,19,49,0,9.05,48.6],[19,98,34,44,0,17.05,43.6],[53,98,22,46,0,13.05,45.6],[75,98,17,49,0,9.05,48.6],[92,98,25,49,0,15.05,48.6],[117,98,31,46,0,17.05,45.6],[148,98,33,44,0,17.05,43.6],[181,98,30,44,0,13.05,43.6],[211,98,28,46,0,11.05,45.6],[0,147,19,49,0,9.05,48.6],[19,147,23,49,0,9.05,48.6],[42,147,31,46,0,15.05,45.6],[73,147,34,44,0,17.05,43.6]],
        animations: {
            standRight: [0, 0, "standRight"],
            walkRight: [1, 12, "walkRight", .5],
            standLeft: [13, 13, "standLeft"],
            walkLeft: [14, 25, "walkLeft", .5]
        }     
    });

    walk = new createjs.Sprite(walkSheet);  //create a sprite from the frame and animation data
    walk.x=100;
    walk.y=200;
    walk.gotoAndPlay("walkRight");  //loops through the animation frames (1-12) as defined above
    stage.addChild(walk);
}
 
function loadFiles() {
    queue = new createjs.LoadQueue(true, imgSrc);
    queue.on("complete", loadComplete, this);
    queue.loadManifest(manifest);
}

loadFiles();