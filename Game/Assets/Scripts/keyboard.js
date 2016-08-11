var KEYCODE_LEFT = 37;
var KEYCODE_UP = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;
var KEYCODE_W = 87;
var KEYCODE_A = 65;
var KEYCODE_S = 83;
var KEYCODE_D = 68;
var KEYCODE_SPACE = 32;

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
    case KEYCODE_W:
        if (!wDown) {
            console.log(evt.keyCode + " down");
            wDown = !wDown;
        }
        return false;
    case KEYCODE_A:
        if (!aDown) {
            console.log(evt.keyCode + " down");
            aDown = !aDown;
        }
        return false;
    case KEYCODE_S:
        if (!sDown) {
            console.log(evt.keyCode + " down");
            sDown = !sDown;
        }
        return false;
    case KEYCODE_D:
        if (!dDown) {
            console.log(evt.keyCode + " down");
            dDown = !dDown;
        }
        return false;
    case KEYCODE_SPACE:
        if (!spaceDown) {
            console.log(evt.keyCode + " down");
            spaceDown = !spaceDown;
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
    case KEYCODE_W:
        if (wDown) {
            console.log(evt.keyCode + " up");
            wDown = !wDown;
        }
        break;
    case KEYCODE_A:
        if (aDown) {
            console.log(evt.keyCode + " up");
            aDown = !aDown;
        }
        break;
    case KEYCODE_S:
        if (sDown) {
            console.log(evt.keyCode + " up");
            sDown = !sDown;
        }
        break;
    case KEYCODE_D:
        if (dDown) {
            console.log(evt.keyCode + " up");
            dDown = !dDown;
        }
        break;
    case KEYCODE_SPACE:
        if (spaceDown) {
            console.log(evt.keyCode + " up");
            spaceDown = !spaceDown;
        }
        break;
    }
}


document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;