var date = new Date();
var cachedVersion = date.getTime();

manifest = [
    {
        src : "preloadImages.js?a=" + cachedVersion,
        id  : "preloadImages"
    },
    {
        src : "preloadSprites.js?a=" + cachedVersion,
        id  : "preloadSprites"
    },
    {
        src : "gamestate.js?a=" + cachedVersion,
        id  : "gamestate"
    },
    {
        src : "gametimer.js?a=" + cachedVersion,
        id  : "gametimer"
    },
    {
        src : "gameloop.js?a=" + cachedVersion,
        id  : "gameloop"
    },
    {
        src : "button.js?a=" + cachedVersion,
        id  : "button"
    },
    {
        src : "keyboard.js?a=" + cachedVersion,
        id  : "keyboard"
    }
]

var scriptSrc = "Assets/Scripts/";


function loadJs(){
    var request = new createjs.LoadQueue(true, scriptSrc);
    request.on("complete", loadJsComplete, this);
    request.loadManifest(manifest);
}

function loadJsComplete(evt){
console.log("JS Complete");    
}
