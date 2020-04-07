function playTiger() {
    tigerRag.seek(- distance() / 1000);
    tigerRag.play();
}

tigerRag.on('load', function () {
    if (distance() > 0) {
        setTimeout(playTiger, distance());
    }
    else if (distance() > - tigerRag['_duration'] * 1000) {
        playTiger();
        blottartuban.classList.add('dance');
        setTimeout(itsOver, distance() + tigerRag['_duration'] * 1000)
    }
    else {
        itsOver();
    }
});

function itsOver() {
    countdown.innerHTML = "Det är tyvärr över :(";
    blottartuban.classList.remove('dance');
}