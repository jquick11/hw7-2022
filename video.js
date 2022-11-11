var video;
const volume = document.querySelector("#volume");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
  video = document.querySelector("#player1");
  video.autoplay = false;
	console.log("Auto play set to false")
  video.loop = false;
	console.log("Loop is set to false")
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
	console.log("Slow down video");
  const speed90Per = video.playbackRate * 90/100;
  video.playbackRate = speed90Per;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
  const speed110Per = video.playbackRate * 100/90;
  video.playbackRate = speed110Per;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
  video.currentTime += 10;
  if (video.currentTime >= video.duration) {
    video.currentTime = 0;
  }
	console.log("Current Video time is ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(e) {
  const label = () => video.muted ? "Mute": "Unmute";
  e.target.textContent = label();
  video.muted = !video.muted;
	console.log(label());
});

document.querySelector("#slider").addEventListener("click", function() {
  console.log('Volume is', video.volume)
	video.volume = this.value / 100;
  console.log('Volume is', video.volume)

console.log(document.querySelector('#volume'))
  document.querySelector('#volume').innerHTML = video.volume * 100 + '%';

});

document.querySelector("#vintage").addEventListener("click", function() {
  if (!video.classList.contains("oldSchool")) {
    video.classList.add("oldSchool");
  }
});

document.querySelector("#orig").addEventListener("click", function() {
  if (video.classList.contains("oldSchool")) {
    video.classList.remove("oldSchool");
  }
});



