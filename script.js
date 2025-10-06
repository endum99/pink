const bgMusic = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("musicToggle");

let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    toggleBtn.textContent = "🔇 Musik";
  } else {
    bgMusic.play();
    toggleBtn.textContent = "🔊 Musik";
  }
  isPlaying = !isPlaying;
});

// Optional: Prevent form submission reload
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pesan Anda berhasil dikirim!");
  this.reset();
});
