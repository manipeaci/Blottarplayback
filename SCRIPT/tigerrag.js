// Functions for the audio.
// Needs untilTime() and tigerRagMp3



// Error-messages for console:
tigerRagMp3.on('play', function () {
    console.info("%c'Tiger Rag' playing! 🐯", "color: green");
    document.getElementById('blottartuban').classList.add("dance");
});
tigerRagMp3.on('end', function () { console.info("'Tiger Rag' has ended"); });

// Setting the volume:
let volume = document.getElementById('volume');
volume.addEventListener('change', () => {
    Howler.volume(volume.value / 100);
    localStorage.volume = volume.value / 100;
});

function playTiger() {
    tigerRagMp3.seek((-untilTime()) / 1000);
    tigerRagMp3.play();
}

tigerRagMp3.on('load', function () {
    ragLength = tigerRagMp3['_duration'] * 1000;

    if (untilTime() > 0) {
        setTimeout(playTiger, untilTime());
        console.info("You have to wait");
    }
    else if (untilTime() > -ragLength) {
        console.info("%c'Tiger Rag' coming up.", "color: grey");
        playTiger();
    }
    else {
        document.getElementById("countdown").innerHTML = "Nu är det slut :)"
    }
});

