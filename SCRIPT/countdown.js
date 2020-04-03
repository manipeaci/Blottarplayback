
// Hanterar bara den visuella tiden på sidan.
// id: starttime - för adresserad tid.
// id: countdown - för nedräkningen.
//
// Behöver bara var. "startHour" och "StartMinute"

function updateTimers(startTime) {
    let appendZero = (n) => (n <= 9) ? "0" + n : n;
    let round = (n) => Math.floor(n);

    let milliToHour = (milli) => appendZero(round(milli % (1000 * 60 * 60 * 60) / (1000 * 60 * 60)));
    let milliToMinute = (milli) => appendZero(round(milli % (1000 * 60 * 60) / (1000 * 60)));
    let milliToSecond = (milli) => appendZero(round(milli % (1000 * 60) / (1000)));

    startTimeText = document.getElementById("starttime");
    startTimeText.innerHTML = `${milliToHour(startTime)}:${milliToMinute(startTime)}`;

    let countdown = document.getElementById('countdown');
    let interval = setInterval(() => {
        let now = new Date().getTime();
        let difference = startTime - now;
        if (difference < 0) {
            clearInterval(interval);
            tigerRagMp3.on('play', function () {
                countdown.innerHTML = "Nu kör vi!";
            });
            tigerRagMp3.on('end', function () {
                countdown.innerHTML = "Nu är det slut!";
            });
        }
        else {
            let h = milliToHour(difference);
            let m = milliToMinute(difference);
            let s = milliToSecond(difference);
            countdown.innerHTML = (`${h}:${m}:${s}`);
        }
    }, 500);
}

updateTimers(startTime);