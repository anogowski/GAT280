var buttonSheet = new createjs.SpriteSheet({
images: [queue.getResult("button")],
frames: [[0,0,94,33,0,1,1],[94,0,94,33,0,1,1],[0,33,94,33,0,1,1],[94,33,94,33,0,1,1],[0,66,94,33,0,1,1],[94,66,94,33,0,1,1],[0,99,94,33,0,1,1],[94,99,94,33,0,1,1],[0,132,94,33,0,1,1],[94,132,94,33,0,1,1],[0,165,94,33,0,1,1],[94,165,94,33,0,1,1],[0,198,94,33,0,1,1],[94,198,94,33,0,1,1],[0,231,94,33,0,1,1],[94,231,31,31,0,0,0],[125,231,31,31,0,0,0]],
animations: {
playUp: [0, 0, "playUp"],
playOver: [1, 1, "playOver"],
playDown: [2, 2, "playDown"],
instructUp: [3, 3, "instructUp"],
instructOver: [4, 4, "instructOver"],
instructDown: [5, 5, "instructDown"],
menuUp: [6, 6, "menuUp"],
menuOver: [7, 7, "menuOver"],
menuDown: [8, 8, "menuDown"],
continueUp: [9, 9, "continueUp"],
continueOver: [10, 10, "continueOver"],
continueDown: [11, 11, "continueDown"],
playAgainUp: [12, 12, "playAgainUp"],
playAgainOver: [13, 13, "playAgainOver"],
playAgainDown: [14, 14, "playAgainDown"],
muteOff: [15, 15, "muteOff"],
muteOn: [16, 16, "muteOn"]
}
}); 