// expose.js
window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
function init() {
  jsConfetti.addConfetti()
    var getSelect = document.querySelector("select");
    var getButton = document.querySelector("button");
    var getImg = document.querySelector('img[alt="No image selected"]');
    var getAudio = document.getElementById("volume");
    var changeAudio = document.querySelector("audio");
    var getVolume = document.querySelector('img[alt="Volume level 2"]');
    
    getSelect.addEventListener('click', function() {
       if (this.value == "air-horn"){
         getImg.src= 'assets/images/air-horn.svg';
       }
       else if (this.value == "car-horn"){
        getImg.src= 'assets/images/car-horn.svg';
      }
      else if (this.value == "party-horn"){
        getImg.src= 'assets/images/party-horn.svg';
      }
      
    })

    getAudio.addEventListener('input', function() {
      if (getAudio.value == 0){
        getVolume.src= 'assets/icons/volume-level-0.svg';
      }
      else if (this.value >= 1 && this.value < 33){
        getVolume.src = 'assets/icons/volume-level-1.svg';
     }
     else if (this.value >= 33 && this.value < 67){ 
      getVolume.src ='assets/icons/volume-level-2.svg';
     }else if(this.value > 67){
      getVolume.src ='assets/icons/volume-level-3.svg';
     }
     changeAudio.volume = getAudio.value/100;
   })
   
    getButton.addEventListener('click', function(){
      if (getSelect.value == "party-horn"){
        changeAudio.src= 'assets/audio/party-horn.mp3';
        jsConfetti.addConfetti();
       } else if (getSelect.value == "car-horn"){
        changeAudio.src = 'assets/audio/car-horn.mp3';
      }else if(getSelect.value == "air-horn") {
        changeAudio.src = 'assets/audio/air-horn.mp3';
      }
      changeAudio.play();
    })
  
}
