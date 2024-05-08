// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  console.log('hello');
  const jsConfetti = new JSConfetti();

  const dropDown = document.getElementById("horn-select");
  const hornImage = document.querySelector("[alt='No image selected']");
  //['attributeName'='attributeValue']".
  const slideBar = document.querySelector("[min='0']");
  const volImage = document.querySelector("[src='assets/icons/volume-level-2.svg'");

  const audioButton = document.querySelector("button");
  const audioSource = document.querySelector("[class='hidden']");

  audioSource.setAttribute('volume', "0.5");



  dropDown.addEventListener("change", function hornSelected(event) {
    if(event.target.value =='air-horn')
    {
      hornImage.setAttribute('src', 'assets/images/air-horn.svg');
      audioSource.setAttribute('src', 'assets/audio/air-horn.mp3');
    }
    if(event.target.value =='car-horn')
    {
      hornImage.setAttribute('src', 'assets/images/car-horn.svg');
      audioSource.setAttribute('src', 'assets/audio/car-horn.mp3');
    }
    if(event.target.value =='party-horn')
    {
      hornImage.setAttribute('src', 'assets/images/party-horn.svg');
      audioSource.setAttribute('src', 'assets/audio/party-horn.mp3');
    }
  });
  slideBar.addEventListener("input", function volChanged(event){
    if(event.target.value == 0)
    {
      volImage.setAttribute('src', 'assets/icons/volume-level-0.svg');
    }
    else if(event.target.value < 33)
    {
      volImage.setAttribute('src', 'assets/icons/volume-level-1.svg');
    }
    else if(event.target.value < 67)
    {
      volImage.setAttribute('src', 'assets/icons/volume-level-2.svg');
    }
    else
    {
      volImage.setAttribute('src', 'assets/icons/volume-level-3.svg');
    }
    audioSource.setAttribute('volume', event.target.value*0.01);
  });

  audioButton.addEventListener("click", function playSound() {
    console.log(audioSource.getAttribute('volume'));
    audioSource.load();
    audioSource.play();
    jsConfetti.addConfetti();
  });
}