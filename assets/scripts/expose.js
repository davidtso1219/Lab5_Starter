// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Drop-drop input
  var drop_elem = document.getElementById("horn-select");
  drop_elem.addEventListener("change", hornDropDown);

  // Slider
  var vol_elem = document.getElementById("volume");
  vol_elem.addEventListener("input", volumeSlider);

  // Button
  var btn_elem = document.querySelector("#expose button");
  btn_elem.addEventListener("click", playSound);


}

function hornDropDown(){
  // Chosen horn
  var horn_val = document.getElementById("horn-select").value;

  var aud = document.getElementsByClassName("hidden");
  var horn_img = document.querySelector("#expose img");

  // If air horn
  if (horn_val === "air-horn") {
    horn_img.src = "assets/images/air-horn.svg";
    aud.src = "assets/audio/air-horn.mp3";
  } 
  // If car horn
  else if (horn_val === "car-horn") {
    horn_img.src = "assets/images/car-horn.svg";
    aud.src = "assets/audio/car-horn.mp3";
  } 
  // If party horn
  else if (horn_val === "party-horn") {
    horn_img.src = "assets/images/party-horn.svg";
    aud.src = "assets/audio/party-horn.mp3";
  }
}

function volumeSlider(){
  // Slider volume 
  var vol_val = document.getElementById("volume").value;

  var aud = document.getElementsByClassName("hidden");
  var vol_img = document.querySelector("#volume-controls img");

  // Volume changes with slider
  aud.volume = vol_val / 100;
  
  // If volume is 0
  if (vol_val == 0){
    vol_img.src = "assets/icons/volume-level-0.svg";
  }
  // If volume is 1 to 33
  else if (vol_val > 0 && vol_val < 34){
    vol_img.src = "assets/icons/volume-level-1.svg";
  }
  // If volume is 34 to 66
  else if (vol_val > 33 && vol_val < 67){
    vol_img.src = "assets/icons/volume-level-2.svg";
  }
  // If volume is 67+
  else if (vol_val > 66){
    vol_img.src = "assets/icons/volume-level-3.svg";
  }
}

  function playSound(){
    var aud = document.getElementsByClassName("hidden").src;
    var horn_type = document.getElementById("horn-select").value;
    var vol_val = document.getElementById("volume").value;


    let full_aud = new Audio(aud);

    // Volume changes updates with slider
    full_aud.volume = vol_val / 100;
    full_aud.play();

    if (horn_type == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }

}

