// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // select portion
  let hornSelect = document.getElementById("horn-select");
  let image = document.querySelector("[alt='No image selected']");
  let audio = document.querySelector("audio");

  hornSelect.addEventListener("change", function () {
    let horn = hornSelect.value;

    image.alt = horn + " image";

    if (horn === 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if (horn === 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if (horn === 'party-horn') {
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  // volume adjustment portion
  let icon = document.querySelector("[alt='Volume level 2']");
  let volume = document.getElementById("volume");

  volume.addEventListener("input", function () {
    let volumeVal = volume.value;

    if (volumeVal == 0) {
      icon.src = 'assets/icons/volume-level-0.svg';
      icon.alt = 'volume-level-0';
    } else if (volumeVal < 33) {
      icon.src = 'assets/icons/volume-level-1.svg';
      icon.alt = 'volume-level-1';
    } else if (volumeVal < 67) {
      icon.src = 'assets/icons/volume-level-2.svg';
      icon.alt = 'volume-level-2';
    } else {
      icon.src = 'assets/icons/volume-level-3.svg';
      icon.alt = 'volume-level-3';
    }

    audio.volume = volumeVal / 100;
  });

  // button portion
  let button = document.querySelector("button");
  let jsConfetti = new JSConfetti();

  button.addEventListener("click", function () {
    audio.play();
    // I love the confetti sm!
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      })
    }

    audioElement.play();
  });
}