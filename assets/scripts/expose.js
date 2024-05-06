// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let audioElem = document.querySelector(".hidden");
  audioElem.volume = 0.5;

  //add event listener to the drop down menu. Listen to 'input'. When changed, call function to update
  //image & set correct audio file.
  document.getElementById("horn-select").addEventListener('input', function(opt) {
    const displayImg = document.querySelector("img");

    switch(opt.target.value){
      case "air-horn":
        displayImg.src = "assets/images/air-horn.svg";
        audioElem.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        displayImg.src = "assets/images/car-horn.svg";
        audioElem.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        displayImg.src = "assets/images/party-horn.svg";
        audioElem.src = "assets/audio/party-horn.mp3";
        break;
    }
  }) 

  //add event listener to the slider. Listen to 'change'. When changed, call function to update the sound.
  document.getElementById("volume").addEventListener('change', function(slider){
    audioElem.volume = slider.target.value/100;

    updateVolumeDisplay(slider.target.value);
  })

  function updateVolumeDisplay(volume){
    //Selects img element that's a child of element of id "volume-controls"
    const volumeDisp = document.querySelector("#volume-controls").querySelector("img");

    if (volume == 0){
      volumeDisp.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33){
      volumeDisp.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67){
      volumeDisp.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeDisp.src = "assets/icons/volume-level-3.svg";
    }
  }
  
  //add event listener to the button. Listen to 'click'. When clicked, call function to play the sound.
  //Function:
    //Play the corresponding sound for the selected horn at the specified volume.
    //IF the party horn is selected, shoot confetti. (Use library to accomplish this)
  const jsConfetti = new JSConfetti();
  
  document.querySelector("button").addEventListener('click', function(){
    audioElem.currentTime = 0;
    audioElem.play();

    if (document.getElementById("horn-select").value == "party-horn"){
      jsConfetti.addConfetti({
        confettiColors: [
          '#ff0a54', '#ffff7e', '#12ff96', '#9913ff', '#f144f1', '#23ffaa',
        ],
        confettiRadius: 6,
        confettiNumber: 500,
        height: window.innerHeight,
        width: window.innerWidth
      })
      console.log("confetiti");
    }
  })
}