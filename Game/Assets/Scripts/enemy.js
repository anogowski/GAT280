var numVisibleEnemies = 3;
var currentVisibleEnemies = 0;
var enemiesToBeVisible = [];
var batStartSpeed = 3;
var batSpeed = 3;
var batMaxSpeed = 6;
var scoreToIncrease = 50;

function setVisibleEnemies() {
    if (score > scoreToIncrease) {
        numVisibleEnemies = score / scoreToIncrease;
        batSpeed = batStartSpeed + score / scoreToIncrease;
    } else {
        numVisibleEnemies = 3;
    }
    if (numVisibleEnemies > numBats) {
        numVisibleEnemies = numBats;
    }
    if (batSpeed > batMaxSpeed) {
        batSpeed = batMaxSpeed;
    }
}

function checkVisibleEnemies() {
    currentVisibleEnemies = 0;
    for (i = 0; i < numBats; ++i) {
        if (bats[i].visible) {
            ++currentVisibleEnemies;
        }
    }
}

function spawnEnemies() {
    while (currentVisibleEnemies < numVisibleEnemies) {
        temp = getRandomInt(0, numBats - 1);
        if (!(bats[temp].visible)) {

            enemiesToBeVisible.push(temp);
            ++currentVisibleEnemies;
            console.log("currentVisibleEnemies");
        }
    }

    while (enemiesToBeVisible.length > 0) {
        temp = enemiesToBeVisible.pop();
        bats[temp].visible = true;
    }
}

function moveBats() {
    for (i = 0; i < numBats; ++i) {
        if (bats[i].visible) {
            bats[i].x += bats[i].dirX * batSpeed;
            if (bats[i].dirX === -1 && bats[i].x < bats[i].boundX) {
                bats[i].x = bats[i].originX;
            } else if (bats[i].dirX === 1 && bats[i].x > bats[i].boundX) {
                bats[i].x = bats[i].originX;
            }
        }
    }
}