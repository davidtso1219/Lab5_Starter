document.addEventListener('DOMContentLoaded', function(){

  let dropdown = document.getElementById("horn-select");
  var image = document.getElementById("horn-image");

  var audio = document.querySelector("audio");
  var selectedOpt;

  let volumeSlider = document.getElementById("volume");
  let volumeIcon = document.querySelector("#volume-controls img");

  let playButton = document.querySelector("button");

  dropdown.addEventListener("change", function(){
    selectedOpt = dropdown.value; // assign selected option to selectedOpt variable
    var imagePath = "";

    if(selectedOpt == "air-horn"){
      imagePath = "assets/images/air-horn.svg"
    }
    else if(selectedOpt == "car-horn"){
      imagePath = "assets/images/car-horn.svg";
    }
    else if(selectedOpt == "party-horn"){
      imagePath = "assets/images/party-horn.svg";
    }
    else{
      imagePath = "assets/images/no-image.png"; 
    }
    image.src = imagePath;
    
    // Update audio source here as well
    updateAudio();
  });

  // Function to update audio source based on selected option
  function updateAudio() {
    let audioPath = ""
    if(selectedOpt == "air-horn"){
      audioPath = "assets/audio/air-horn.mp3"
    }
    else if(selectedOpt == "car-horn"){
      audioPath = "assets/audio/car-horn.mp3";
    }
    else if(selectedOpt == "party-horn"){
      audioPath = "assets/audio/party-horn.mp3";
    }
    audio.src = audioPath;
  }

  volumeSlider.addEventListener("input", function() {
    updateVolumeIcon();
    updateAudioVolume();
  });

  function updateAudioVolume() {
    audio.volume = volumeSlider.value / 100;
  }
  

  function updateVolumeIcon() {
    let volume = volumeSlider.value;

    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
      volumeIcon.alt = "Volume level 0";
    } else if (volume <= 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
      volumeIcon.alt = "Volume level 1";
    } else if (volume <= 66) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
      volumeIcon.alt = "Volume level 2";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
      volumeIcon.alt = "Volume level 3";
    }
  }

  //function that uodates slider val
  playButton.addEventListener("click", function() {
    updateAudio();
    if(selectedOpt == "party-horn") {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     })
    }
    audio.play();
  });

});
  
