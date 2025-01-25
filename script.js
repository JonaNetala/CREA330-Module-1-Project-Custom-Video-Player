document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('#video');
  const playButton = document.querySelector('#play');
  const stopButton = document.querySelector('#stop');
  const progress = document.querySelector('#progress');
  const timestamp = document.querySelector('#timestamp');

  // Play / Pause Toggle
  function togglePlayPause() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  // Update Play Icon
  function updatePlayIcon() {
    playButton.innerHTML = video.paused
      ? '<i class="fa fa-play fa-2x"></i>'
      : '<i class="fa fa-pause fa-2x"></i>';
  }

  // Stop Video
  function stopVideo() {
    video.currentTime = 0;
    video.pause();
  }

  // Update Progress
  function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) mins = '0' + mins;

    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) secs = '0' + secs;

    timestamp.innerHTML = `${mins}:${secs}`;
  }

  // Set Video Time
  function setVideoTime() {
    video.currentTime = (+progress.value * video.duration) / 100;
  }

  // Event Listeners
  video.addEventListener('click', togglePlayPause);
  video.addEventListener('play', updatePlayIcon);
  video.addEventListener('pause', updatePlayIcon);
  video.addEventListener('timeupdate', updateProgress);

  playButton.addEventListener('click', togglePlayPause);
  stopButton.addEventListener('click', stopVideo);
  progress.addEventListener('change', setVideoTime);
});
