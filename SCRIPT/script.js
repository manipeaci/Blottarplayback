// Initial values

Howler._volume = 0.5;
let startHour = 16;
let startMinute = 44;

let appendZero = (n) => (n <= 9) ? "0" + n : n;
let round = (n) => Math.floor(n);

startTimeText = document.getElementById("starttime");
startTimeText.innerHTML = `${appendZero(startHour)}:${appendZero(startMinute)}`;


//
let tiger = {
    length: 213.2985 * 1000,
    sound: new Howl({
        src: ['SOUNDS/Tiger_Rag.mp3'],
        sprite: {
            "main": [0, this.length],
        }
    }),
    start() {
        if (time.timeLeft > tiger.length) {
            setTimeout(start, time.timeLeft);
        }
        else {
            this.sound['_sprite'].main[0] = -time.timeLeft();
            this.sound['_sprite'].main[1] = this.length;
            this.sound.play("main");
        }
    },
    updateSprite() {
    }

}

let time = {
    dateStart: (function () {
        let date = new Date();
        date.setHours(startHour, startMinute, 50, 0);
        return date.getTime();
    })(),
    dateNow: function () {
        let date = new Date;
        return date.getTime();
    },
    timeLeft: function () {
        return time.dateStart - time.dateNow();
    },
    milliToFullTime(milli) {
        let h = appendZero(round(milli % (86400000) / (1000 * 60 * 60)));
        let m = appendZero(round(milli % (1000 * 60 * 60) / (1000 * 60)));
        let s = appendZero(round(milli % (1000 * 60) / (1000)));

        return `${h}:${m}:${s}`;
    },
    timeLeftText() {
        return this.milliToFullTime(time.timeLeft());
    }
};

(function updateTextObject() {
    let timeContainer = document.getElementById('countdown');
    function setText() {
        if (time.timeLeft() > 0) {
            timeContainer.innerHTML = time.timeLeftText();
        }
        else {
            clearInterval(update);
            tiger.start();
        }
    }
    update = setInterval(setText, 500);
})();

let volume = document.getElementById('volume');
volume.addEventListener('change', () => {
    Howler.volume(volume.value / 100);
});
