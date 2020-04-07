// DOM-objects
let volume = document.getElementById('volume');
let blottartuban = document.getElementById('blottartuban');
let startTimeText = document.getElementById("starttime");
let countdown = document.getElementById('countdown');

// Set Start time and distance, used in all the timers.
const startTime = new Date('April 7, 2020 15:35:60')

let distance = () => {
    let now = new Date()
    now = now.getTime();
    return startTime - now;
};

// Sounds
let tigerRag = new Howl({ src: ['SOUNDS/Tiger_Rag.mp3'] });

// Getting and setting initial volume values from Local Storage.
if (localStorage.volume === undefined) {
    localStorage.volume = 0.5;
    Howler["_volume"] = 0.5;
} else {
    Howler["_volume"] = localStorage.volume;
    volume.value = localStorage.volume * 100;
}

// Listen for volume change, update Howler and Local Storage.
volume.addEventListener('change', () => {
    Howler.volume(volume.value / 100);
    localStorage.volume = volume.value / 100;
});


