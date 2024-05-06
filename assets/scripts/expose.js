// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  const horn_select = document.getElementById("horn-select");
  const pic = document.getElementsByTagName("img")[0];
  const audio = document.getElementsByClassName("hidden")[0];
  const btn = document.getElementsByTagName("button")[0];
  const input_volume = document.getElementById("volume");
  const pic_horn = document.getElementsByTagName("img")[1];

  const confetti = new JSConfetti()
  
  function showConfetti() {
    confetti.addConfetti()
  }

  //change different picture and horn resource
  horn_select.addEventListener("change", function() {
    const select_value = horn_select.selectedOptions[0].getAttribute("value");
    if(select_value == "air-horn") {
      pic.setAttribute("src", "./assets/images/air-horn.svg");
      audio.setAttribute("src", "./assets/audio/air-horn.mp3");
    } else if(select_value == "car-horn") {
      pic.setAttribute("src", "./assets/images/car-horn.svg");
      audio.setAttribute("src", "./assets/audio/car-horn.mp3");
    } else if(select_value == "party-horn") {
      pic.setAttribute("src", "./assets/images/party-horn.svg");
      audio.setAttribute("src", "./assets/audio/party-horn.mp3");
    }
  })

  //click to play the horn
  btn.addEventListener("click", function() {
    audio.play();
    if(horn_select.selectedOptions[0].getAttribute("value") == "party-horn") {
      showConfetti();
    }
  })

  //change the horn icons when changing the volumn
  volume.addEventListener("input", function() {
    const volume = input_volume.value;
    audio.volume = volume * 0.01;
    if(audio.volume == 0) {
      pic_horn.setAttribute("src", "./assets/icons/volume-level-0.svg");
    } else if(volume > 1 && volume < 33) {
      pic_horn.setAttribute("src", "./assets/icons/volume-level-1.svg");
    } else if(volume > 32 && volume < 67) {
      pic_horn.setAttribute("src", "./assets/icons/volume-level-2.svg");
    } else if(volume > 66) {
      pic_horn.setAttribute("src", "./assets/icons/volume-level-3.svg");
    }
  })
}