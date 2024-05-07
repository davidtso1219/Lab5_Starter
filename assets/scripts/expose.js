// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornChoose = document.getElementById("horn-select");
  const imageType = document.getElementsByTagName("img")[0];
  const soundType = document.getElementsByTagName("audio")[0];
  const pressButton = document.getElementsByTagName("button")[0];
  const party = new JSConfetti();

  hornChoose.addEventListener("change", updateType);
  pressButton.addEventListener("click", pressReaction);
  const volumeBar = document.getElementById("volume");
  const volumeSymbol = document.getElementsByTagName("img")[1];
  volumeBar.addEventListener("change", updateVolume);


  function updateType(){
    soundType.src = "assets/audio/" + hornChoose.value + ".mp3";
    imageType.src = "assets/images/" + hornChoose.value + ".svg";
    imageType.alt(imageType.value);
  }
  function pressReaction(){
    soundType.play();
    if(hornChoose.value == "party-horn"){party.addConfetti();}
  }
  function updateVolume(){
    var scale = "";

    if(volumeBar.value == 0){scale = "0";}
    else if(volumeBar.value < 33){scale = "1";}
    else if(volumeBar.value < 67){scale = "2";}
    else if(volumeBar.value > 67){scale = "3";}
    volumeSymbol.src = "assets/icons/volume-level-" + scale + ".svg";
    volumeSymbol.alt = "Volume level " + scale;
    soundType.volume = volumeBar.value / 100;
  }

}