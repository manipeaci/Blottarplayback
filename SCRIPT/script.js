// Static initial values
if (localStorage.volume === undefined) {
    localStorage.volume = 0.5;
    Howler["_volume"] = 0.5;
} else {
    Howler["_volume"] = localStorage.volume;
    document.getElementById("volume").value = localStorage.volume * 100;
}

let startTime = new Date('April 4, 2020 12:00:00')
let tigerRagMp3 = new Howl({
    src: ['SOUNDS/Tiger_Rag.mp3'],
});

// Relative values, based on current Time
function untilTime() {
    let now = new Date()
    now = now.getTime();
    return startTime - now;
}