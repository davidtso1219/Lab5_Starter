// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById('horn-select');
    const volumeInput = document.getElementById('volume');
    const volumeIcon = document.querySelector('#volume-controls img');
    const playButton = document.querySelector('button');
    const audio = document.querySelector('audio');

    hornSelect.addEventListener('change', updateHorn);
    volumeInput.addEventListener('input', updateVolume);
    playButton.addEventListener('click', playSound);

    function updateHorn() {
        const horn = hornSelect.value;
        const hornImage = document.querySelector('img');

        hornImage.src = `assets/images/${horn}.svg`;
        audio.src = `assets/audio/${horn}.mp3`;
    }

    function updateVolume() {
        const volume = volumeInput.value;

        if (volume == 0) {
            volumeIcon.src = 'assets/icons/volume-level-0.svg';
        } else if (volume < 33) {
            volumeIcon.src = 'assets/icons/volume-level-1.svg';
        } else if (volume < 67) {
            volumeIcon.src = 'assets/icons/volume-level-2.svg';
        } else {
            volumeIcon.src = 'assets/icons/volume-level-3.svg';
        }

        audio.volume = volume / 100;
    }

    function playSound() {
        audio.play();

        if (hornSelect.value === 'party-horn') {
          const jsConfetti = new JSConfetti();
          jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            emojiSize: 50,
            confettiNumber: 200,
            origin: { x: 100, y: 100 }
         })
        }
    }
}