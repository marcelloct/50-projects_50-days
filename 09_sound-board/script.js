const sounds = ["do", "re", "mi", "fa", "sol", "la", "si"];

sounds.forEach((sound) => {
  const btn = document.createElement("buton");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    //stopSounds();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSounds() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
