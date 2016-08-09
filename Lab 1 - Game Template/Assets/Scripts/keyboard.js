var KEYCODE_LEFT = 37;
var KEYCODE_UP = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;

var leftDown = false;
var upDown = false;
var rightDown = false;
var downDown = false;
var wDown = false;
var aDown = false;
var sDown = false;
var dDown = false;
var spaceDown = false;

function handleKeyDown(evt) {
    if (!evt) {
        var evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        if (!leftDown) {
            console.log(evt.keyCode + " down");
            leftDown = !leftDown;
        }
        return false;
    case KEYCODE_RIGHT:
        if (!rightDown) {
            console.log(evt.keyCode + " down");
            rightDown = !rightDown;
        }
        return false;
    case KEYCODE_UP:
        if (!upDown) {
            console.log(evt.keyCode + " down");
            upDown = !upDown;
        }
        return false;
    case KEYCODE_DOWN:
        if (!downDown) {
            console.log(evt.keyCode + " down");
            downDown = !downDown;
        }
        return false;
    }
}

function handleKeyUp(evt) {
    if (!evt) {
        var evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        if (leftDown) {
            console.log(evt.keyCode + " up");
            leftDown = !leftDown;
        }
        break;
    case KEYCODE_RIGHT:
        if (rightDown) {
            console.log(evt.keyCode + " up");
            rightDown = !rightDown;
        }
        break;
    case KEYCODE_UP:
        if (upDown) {
            console.log(evt.keyCode + " up");
            upDown = !upDown;
        }
        break;
    case KEYCODE_DOWN:
        if (downDown) {
            console.log(evt.keyCode + " up");
            downDown = !downDown;
        }
        break;
    }
}


document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;