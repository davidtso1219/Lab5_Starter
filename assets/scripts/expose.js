// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
    const horn_selection = document.getElementById("horn-select");
    const horn_img = document.querySelector("img");
    const horn_audio = document.querySelector("audio");
    const play_button = document.querySelector("button");
    const volume_level = document.getElementById("volume");
    const vol_icon = document.querySelector("div#volume-controls img")

    horn_selection.addEventListener("change", select_audio);

    play_button.addEventListener("click", play_audio);

    volume_level.addEventListener("change", change_level);

    function select_audio() {
      const horn = horn_selection.value;
      if (horn === "air-horn") {
        horn_img.src = "assets/images/air-horn.svg";
        horn_audio.src = "assets/audio/air-horn.mp3";
        console.log(horn_audio.src);
      } else if (horn === "car-horn") {
        horn_img.src = "assets/images/car-horn.svg"
        horn_audio.src = "assets/audio/car-horn.mp3";
      } else if (horn === "party-horn") {
        horn_img.src = "assets/images/party-horn.svg"
        horn_audio.src = "assets/audio/party-horn.mp3";
      }
    }

    function play_audio() {
      horn_audio.play();
    }

    function change_level() {
      let volume_val = volume_level.value;
      // let vol_icon = volume_controls.img;
      console.log(volume_val);
      horn_audio.volume = volume_val/100;
      if (volume_val == 0) {
        vol_icon.src = "assets/icons/volume-level-0.svg";
      } else if ((1 <= volume_val) &&  (volume_val< 33)) {
        vol_icon.src = "assets/icons/volume-level-1.svg";
      } else if ((33 <= volume_val) && (volume_val < 67)) {
        vol_icon.src = "assets/icons/volume-level-2.svg";
      } else {
        vol_icon.src = "assets/icons/volume-level-3.svg";
      }
    }



}