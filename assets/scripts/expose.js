// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selector = document.querySelector("select");
  const hornImage = document.querySelector("img");
  const playSoundBtn = document.querySelector("button");
  const audio = document.querySelector("audio");
  const volumeSlider = document.querySelector("[type='range']");
  const audioVolumeIcon = document.getElementById("volume-controls").querySelector("img");
  const JsConfetti = new JSConfetti();
  selector.addEventListener("change", (event) => {
    if (event.target.value == "air-horn") {
      hornImage.src = "./assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }
    else if (event.target.value == "car-horn") {
      hornImage.src = "./assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    else {
      hornImage.src = "./assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  });

  volumeSlider.addEventListener("input", (event) => {
    let volume = event.target.value;
    if (volume == 0) {
      audioVolumeIcon.src = "assets/icons/volume-level-0.svg";
      audio.volume = 0;
    }
    else if (volume < 33) {
      audioVolumeIcon.src = "assets/icons/volume-level-1.svg";
      audio.volume = volume/100;
    }
    else if (volume < 67) {
      audioVolumeIcon.src = "assets/icons/volume-level-2.svg";
      audio.volume = volume/100;
    }
    else {
      audioVolumeIcon.src = "assets/icons/volume-level-3.svg";
      audio.volume = volume/100;
    }
  });

  playSoundBtn.addEventListener("click", (event) => {
    audio.play();
    if (selector.value == "party-horn") {
      JsConfetti.addConfetti({
        initialPosition: 1000,
       });
    }
  });
}
