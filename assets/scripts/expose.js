// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  // Horn Selection
  // event.target.value is the selected option
  const selectHorn = document.querySelector("#horn-select");
  const hornImage = document.querySelector('img[src="assets/images/no-image.png"]');
  const hornAudio = document.querySelector('.hidden');
  let selectedHorn = 0;
  selectHorn.addEventListener("change", (event) => {
    // If air horn is selected
    if (event.target.value == "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornImage.alt = "Air Horn";
      hornAudio.src = "assets/audio/air-horn.mp3";
      selectedHorn = 1;
    }
    // If car horn is selected
    if (event.target.value == "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      hornImage.alt = "Car Horn";
      hornAudio.src = "assets/audio/car-horn.mp3";
      selectedHorn = 2;
    }
    // If party horn is selected
    if (event.target.value == "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      hornImage.alt = "Party Horn";
      hornAudio.src = "assets/audio/party-horn.mp3";
      selectedHorn = 3;
    }
  });

  // Volume Change
  const volumeControl = document.getElementById("volume");
  const volumeImage = document.querySelector('img[src="assets/icons/volume-level-2.svg"]');
  const audioSource = document.querySelector('.hidden');
  volumeControl.addEventListener("input", function(event) {
    // If the volume is 0, the mute icon should be displayed
    if (volumeControl.value == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
      volumeImage.alt = "Volume level 0";
      audioSource.volume = 0;
    }
    // If the volume is from 1 to < 33, first volume level should be displayed
    if (volumeControl.value >= 1 && volumeControl.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
      volumeImage.alt = "Volume level 1";
      audioSource.volume = (volumeControl.value/100);
    }
    // If the volume is from 33 to < 67, second volume level should be displayed
    if (volumeControl.value >= 33 && volumeControl.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
      volumeImage.alt = "Volume level 2";
      audioSource.volume = (volumeControl.value/100);
    }
    // If the volume is 67 and up, third volume level should be displayed
    if (volumeControl.value >= 67) {
      volumeImage.src = "assets/icons/volume-level-3.svg";
      volumeImage.alt = "Volume level 3";
      audioSource.volume = (volumeControl.value/100);
    }
  });

  // Play Sound Button
  const audioButton = document.querySelector('button');
  const jsConfetti = new JSConfetti()
  audioButton.addEventListener("click", event => {
    if (selectedHorn == 3) {
      jsConfetti.addConfetti({
        emojis: ['😎', '🔥', '😝', '❤️‍🔥', '😵‍💫', '💯s'],
     })
    }
    audioSource.play();

  });
}