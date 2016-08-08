var KEYCODE_LEFT = 37;
var KEYCODE_UP = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;

function handleKeyDown(evt) {
    if (!evt) {
        var evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_RIGHT:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_UP:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_DOWN:
        console.log(evt.keyCode + " down");
        return false;
    }
}

function handleKeyUp(evt) {
    if (!evt) {
        var evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_RIGHT:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_UP:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_DOWN:
        console.log(evt.keyCode + " up");
        break;
    }
}

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;