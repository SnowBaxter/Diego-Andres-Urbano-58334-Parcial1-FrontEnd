let fillbar = document.querySelector(".fill");
let audios = "Audio1.mp3";



let audio = new Audio();
let currentSong = 0;

window.onload = playSong;



function playSong() {
  audio.src = audios;
  audio.play();
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
  }
}

