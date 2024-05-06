// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.querySelector('#horn-select');
  hornSelect.addEventListener('input', setHornImgAudio);

  const inputVolume = document.querySelector('#volume');
  inputVolume.addEventListener('change', setAudio);

  const playButton = document.querySelector('button');
  playButton.addEventListener('click', playSound);
}

const jsConfetti = new JSConfetti();


/**
 * Set image and audio file on selection
 */
function setHornImgAudio() {
  // set image
  const img = document.querySelector('img');
  let imgSrc = `assets/images/${this.value}.svg`;
  img.src = imgSrc;

  // set audio
  const audio = document.querySelector('audio');
  audio.src = `assets/audio/${this.value}.mp3`;
}

/**
 * Set audio volume icon and audio volume level
 */
function setAudio() {
  // set volume image icon
  let level = this.value;
  const audioIcon = document.querySelector('div img');
  if (level == 0) {
    audioIcon.src = "assets/icons/volume-level-0.svg";
  } else if ((level > 0) && (level < 33)) {
    audioIcon.src = "assets/icons/volume-level-1.svg";
  } else if ((level >= 33) && (level < 67)) {
    audioIcon.src = "assets/icons/volume-level-2.svg";
  } else {
    audioIcon.src = "assets/icons/volume-level-3.svg";
  }

  // set audio volume level
  const audio = document.querySelector('audio');
  console.log(audio);
  audio.volume = (level/100);
  console.log(audio.volume);
}

function playSound() {
  const audio = document.querySelector('audio');
  audio.play();

  const hornSelect = document.querySelector('#horn-select');
  if (hornSelect.value == 'party-horn') {
    jsConfetti.addConfetti();
  }
  
}

