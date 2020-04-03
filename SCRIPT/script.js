// Static initial values
Howler["_volume"] = 0.5;
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