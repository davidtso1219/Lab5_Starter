// expose.js

window.addEventListener('DOMContentLoaded', init);

let imageElem;
let audioElem;
let volumeIconElem;
let currentSound;
let confetti;

function init() {
    imageElem = document.querySelector("#expose > img");
    audioElem = document.querySelector("#expose > audio");
    volumeIconElem = document.querySelector("#volume-controls > img");
    confetti = new JSConfetti();

    audioElem.volume = 0.5;   // initial value

    document.getElementById("horn-select").addEventListener("change", (event) => {
        currentSound = event.target.value;
        imageElem.src = `/assets/images/${currentSound}.svg`;
        audioElem.src = `/assets/audio/${currentSound}.mp3`;
    })

    document.getElementById("volume").addEventListener("change", (event) => {
        const volume = +event.target.value;
        audioElem.volume = volume / 100.0;

        const level = Math.ceil((volume + (volume === 33)) / 33);

        volumeIconElem.src = `assets/icons/volume-level-${level}.svg`;
        volumeIconElem.alt = `Volume level ${level}`
    })

    document.querySelector("#expose > button").addEventListener("click", () => {
        if (currentSound === undefined) {
            return;
        }

        audioElem.pause();
        audioElem.currentTime = 0;
        audioElem.play();

        if (currentSound === "party-horn") {
            confetti.addConfetti();
        }
    })
}
