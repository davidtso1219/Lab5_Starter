// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti()

function init() {
  // TODO

  let audio_sound = document.querySelector('#aud-sound');
  const hornSelect = document.getElementById("horn-select");
  hornSelect.addEventListener("change", () => hornSelected(hornSelect.value, audio_sound));

  const volume_slider = document.getElementById("volume");
  volume_slider.addEventListener("mouseup", () => audioVolumeChanged(volume_slider.value, volume_slider.max, audio_sound))

  //const audio = document.getElementsByClassName("hidden");
  const btn_play_audio = document.getElementById("play-sound");
  btn_play_audio.addEventListener("click", () => {
    if(hornSelect.value == "party-horn"){
      jsConfetti.addConfetti();
      audio_sound.play();
    }
    else{
      audio_sound.play();
    }
  });
}

function hornSelected(selected_value, audio) {
  //const optionSelected = hornSelect.value;
  const picture = document.getElementById("display-picture");
  //const audio = document.getElementById("aud-sound");
  //picture.src = "assets/images/air-horn.svg";
  if(selected_value == "air-horn"){
    picture.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  }
  else if(selected_value == "car-horn"){
    picture.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  }
  else if(selected_value == "party-horn"){
    picture.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  }
}

function audioVolumeChanged(changed_value, max_value, audio){
  const audio_picture = document.getElementById("volume-picture");
  //const audio_volume = document.getElementById("aud-sound");
  let newVolume = (changed_value)/100;
  if(changed_value == 0){
    audio_picture.src = "assets/icons/volume-level-0.svg";
    audio.volume = 0;
  }
  else if(changed_value >= 1 && changed_value < 33){
    audio_picture.src = "assets/icons/volume-level-1.svg";
    audio.volume = newVolume;
  }
  else if(33 <= changed_value && changed_value < 67){
    audio_picture.src = "assets/icons/volume-level-2.svg";
    audio.volume = newVolume;
  }
  else if(67 <= changed_value && changed_value <= max_value){
    audio_picture.src = "assets/icons/volume-level-3.svg";
    audio.volume = newVolume;
  }
}