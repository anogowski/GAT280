var numVisibleEnemies = 3;
var currentVisibleEnemies = 0;
var enemiesToBeVisible = [];
var batSpeed = 2;

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
//            bats[i].x += bats[i].dirX * batSpeed;
   //            console.log("dirX: " + bats[i].dirX)
   //            console.log(bats[i].x);
        }
    }
}