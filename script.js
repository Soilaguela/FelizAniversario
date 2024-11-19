const music = document.getElementById('background-music');
const musicControl = document.querySelector('.music-control');

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicControl.textContent = '🎵 Pausar Música';
  } else {
    music.pause();
    musicControl.textContent = '🎵 Tocar Música';
  }
}
