var video;
const volume = document.querySelector("#volume");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
  video = document.querySelector("#player1");
  video.autoplay = false;
  video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
  video.play();
  displayVolume();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
  video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
  if (video.playbackRate > 0.1) {
    video.playbackRate -= 0.1;
	  console.log("Current Spped: ", video.playbackRate);
  }
});

document.querySelector("#faster").addEventListener("click", function() {
  video.playbackRate += 0.1;
	console.log("Current Spped: ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
  video.currentTime += 10;
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
	console.log("Current Video Location: ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(e) {
  e.target.textContent = video.muted ? "Mute": "Unmute" ;
  video.muted = true;
});

document.querySelector("#slider").addEventListener("input", function(e) {
	console.log("slider Video", e.target.value);
  video.volume = e.target.value / 100;
  displayVolume();
});

document.querySelector("#vintage").addEventListener("click", function(e) {
  if (!video.classList.contains("oldSchool")) {
    video.classList.add("oldSchool");
  }
});

document.querySelector("#orig").addEventListener("click", function(e) {
  if (video.classList.contains("oldSchool")) {
    video.classList.remove("oldSchool");
  }
});


function displayVolume() {
  const value = video.volume * 100;
  volume.textContent = `${value} %`;
}

