const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

/**
 * ToDo: 
 * a) Upload the video to youtube and point the video tag to play the video on youtube
 * b) Fix the input bar in the controls - better styles
 * c) on click on the timestamp switch +00:00 or -00:00
 * 
 */

// Play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// update play/pause icon
function updatePlayIcon() {
  play.innerHTML = video.paused ? 
  '<i class="fa fa-play fa-2x"></i>' :
  '<i class="fa fa-pause fa-2x"></i>'
}

// Calculates minutes based on the time
function calculateMinutes(time) {
  let mins = Math.floor(time / 60);
  return mins < 10 ? `0${String(mins)}`: mins;
}
// Calculates seconds based on the time
function calculateSeconds(time) {
  let secs = Math.floor(time % 60);
  return secs < 10 ? `0${String(secs)}` : secs;
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  timestamp.innerHTML = `${calculateMinutes(video.currentTime)}:${calculateSeconds(video.currentTime)} / ${calculateMinutes(video.duration)}:${calculateSeconds(video.duration)}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
