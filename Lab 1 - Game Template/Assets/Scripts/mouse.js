var mouseX, mouseY;
var mouseText;

function mouseInit() {
    stage.on("stagemousemove", function(evt) {
    mouseX = Math.floor(evt.stageX);
    mouseY = Math.floor(evt.stageY);
    });
    mouseText = new createjs.Text("x: " +mouseX + " y: " + mouseY, "12px Arial", "#000000");  
    mouseText.x = 100;
    mouseText.y = 150;
}

mouseInit();



function addText(){
    stage.addChild(myText);
    stage.addChild(mouseText);
}

addText();