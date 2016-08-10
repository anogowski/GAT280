var aduioQueue;

aduioManifest = [
    {
        src: "rhinoceros.mp3",
        id: "bgm"
    }
];

function loadAudioComplete(evt) {

    //play a sound that had been preloaded
    createjs.Sound.play("bgm");

    //set loop to -1 to make it continuous
    createjs.Sound.play("music", {
        loop: -1
    });
}

function loadAudioFiles() {
    //use the following to use 'mp3' if 'ogg' doesn't work on browser
    //createjs.Sound.alternateExtensions = ["mp3"];
    aduioQueue = new createjs.LoadQueue(true, audioSrc);

    //be sure to install the createjs sound plugin or your sounds won't play
    aduioQueue.installPlugin(createjs.Sound);

    aduioQueue.on("complete", loadAudioComplete, this);
    aduioQueue.loadManifest(aduioManifest);
}
loadAudioFiles();