const intro = document.getElementById("intro");
const contenido = document.querySelector(".contenido");
const video = document.getElementById("bg-video");
const musicBtn = document.getElementById("musicBtn");
const volumeSlider = document.getElementById("volumeSlider");

video.muted = true;
video.volume = 1;

intro.addEventListener("click", async () => {
  intro.style.display = "none";
  contenido.classList.remove("hidden");

  video.currentTime = 0;
  video.muted = false;
  video.volume = 1;

  try {
    await video.play();
  } catch (error) {
    console.log(error);
  }

  musicBtn.textContent = "🔊 Music";
});

musicBtn.addEventListener("click", () => {
  video.muted = !video.muted;

  if (video.muted) {
    musicBtn.textContent = "🔇 Music";
  } else {
    musicBtn.textContent = "🔊 Music";
    video.play();
  }
});

volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value / 100;

  if (video.volume === 0) {
    video.muted = true;
    musicBtn.textContent = "🔇 Music";
  } else {
    video.muted = false;
    musicBtn.textContent = "🔊 Music";
  }
});