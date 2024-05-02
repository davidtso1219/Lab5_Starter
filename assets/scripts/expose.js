// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO

  const img_display = document.querySelector("img");
  //console.log(img_display);
  const horn_select = document.getElementById("horn-select");

  const audio_display = document.querySelector("audio");

  const button = document.querySelector("button");

  horn_select.addEventListener("change", changePicture);
  /*
  This function chnages the image upon selecting the value

  e.target.value is the value name of what you have selected
   */
  let partyhorn = '';
  function changePicture(e){
    partyhorn = e.target.value;
    let ImageChange="assets/images/"+ e.target.value + ".svg";
    img_display.src=ImageChange;
    //changes the audio
    let audioChange= "assets/audio/" + e.target.value + ".mp3";
    audio_display.src=audioChange;
  }
  /*
  button.addEventListener("click", (event) => {
    audio_display.play();
  });
  */
 
  button.addEventListener("click", (event) =>{
    audio_display.play();
    if (partyhorn == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();

    }
  });
  



  const volDiv = document.getElementById("volume-controls");
  const volControl = document.getElementById("volume");

  const Volimg = volDiv.querySelector("img");
  
  volControl.addEventListener("change", VolPicture);

  function VolPicture(e){
    let volume = volControl.value;
    if(volume == 0){
      Volimg.src="assets/icons/volume-level-0.svg";
      audio_display.volume = 0;
    }
    if(volume >= 1 && volume < 33){
      Volimg.src="assets/icons/volume-level-1.svg";
      audio_display.volume = 0.33;
    }
    if(volume >= 33 && volume < 67){
      Volimg.src="assets/icons/volume-level-2.svg";
      audio_display.volume = 0.67;

    }
    if(volume >= 67){
      Volimg.src="assets/icons/volume-level-3.svg";
      audio_display.volume = 1;
    }

  }




}