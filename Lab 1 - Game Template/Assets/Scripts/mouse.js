var mouseX, mouseY;
var mouseText;

function mouseInit() {
    stage.on("stagemousemove", function (evt) {
        mouseX = Math.floor(evt.stageX);
        mouseY = Math.floor(evt.stageY);
    });

    mouseText = new createjs.Text("x: " + 0 + " y: " + 0, "12px Arial", "#000000");
    mouseText.x = 50;
    mouseText.y = 150;
}

mouseInit();