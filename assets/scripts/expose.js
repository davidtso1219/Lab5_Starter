// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  const jsConfetti = new JSConfetti();
  let img_element = document.querySelector("#expose > img");
  var select = document.getElementById("horn-select");
  let audio_objs = document.getElementsByClassName("hidden");
  let audio_obj = audio_objs[0];
  let slider = document.getElementById("volume");
  let slider_img = document.querySelector("#volume-controls > img");
  var options = select.options;
  let party = false;
  select.addEventListener('change', function() {
    var elem = options[select.selectedIndex];
    if(elem.value == "select"){
      img_element.src = "assets/images/no-image.png";
      audio_obj.src = "";
      party = false;
    }
    if(elem.value == "air-horn"){
      img_element.src = "assets/images/air-horn.svg";
      audio_obj.src = "assets/audio/air-horn.mp3";
      party = false;
    }
    if(elem.value == "car-horn"){
      img_element.src = "assets/images/car-horn.svg";
      audio_obj.src = "assets/audio/car-horn.mp3";
      party = false;
    }
    if(elem.value == "party-horn"){
      img_element.src = "assets/images/party-horn.svg";
      audio_obj.src = "assets/audio/party-horn.mp3";
      party = true;
    } 
  });
  slider.addEventListener('input', function() {
    if(slider.value == 0){
      slider_img.src = "assets/icons/volume-level-0.svg";
    }
    else if(slider.value < 34){
      slider_img.src = "assets/icons/volume-level-1.svg";
    }
    else if(slider.value < 67){
      slider_img.src = "assets/icons/volume-level-2.svg";
    }
    else {
      slider_img.src = "assets/icons/volume-level-3.svg";
    }
    audio_obj.volume = slider.value / 100;
    
  });
  let button = document.querySelector("button");
  button.addEventListener('click', function() {
    if(party){
      jsConfetti.addConfetti();
    }
    audio_obj.play();
  });
}