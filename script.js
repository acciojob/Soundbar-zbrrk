//your JS code here. If required.
// List of sound file names (without extension)
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Get the container div
const buttons = document.getElementById("buttons");

// Create one button per sound
sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });

  buttons.appendChild(btn);
});

// Create a Stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", stopSounds);
buttons.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  // Stop all currently playing audio elements
  const audios = document.getElementsByTagName("audio");
  for (let i = 0; i < audios.length; i++) {
    audios[i].pause();
    audios[i].currentTime = 0;
  }
}
