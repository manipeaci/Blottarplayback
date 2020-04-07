function updateTimers(startTime) {

    // Two helper functions
    let appendZero = (n) => (n <= 9) ? "0" + n : n;
    let round = (n) => Math.floor(n);

    // Display the start time
    let time = [
        startTime.getHours(),
        startTime.getMinutes()
    ].map(appendZero);

    startTimeText.innerHTML = `${time[0]}:${time[1]}`;

    // Display the countdown
    function displayCountDown() {
        let difference = distance();
        if (difference < 0) {
            clearInterval(updateCountDown);
        }
        else {
            let fullTime = [
                (difference % (1000 * 60 ** 3)) / (1000 * 60 ** 2),
                (difference % (1000 * 60 ** 2)) / (1000 * 60),
                (difference % (1000 * 60)) / 1000
            ].map(round).map(appendZero);
            countdown.innerHTML = (`${fullTime[0]}:${fullTime[1]}:${fullTime[2]}`);
        }
    }

    let updateCountDown = setInterval(displayCountDown, 500);
}

updateTimers(startTime);