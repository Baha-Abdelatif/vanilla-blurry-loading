const progressBox = document.querySelector('.progress_value');
const blurred = document.querySelector('main');
let progress = 0;
const mapNumbers = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
const progression = setInterval(() => {
  const invertedProgress = mapNumbers(progress, 0, 100, 100, 0);
  progressBox.innerHTML = `${progress}%`;
  blurred.style.opacity = mapNumbers(progress, 0, 100, 10, 0);
  blurred.style.backdropFilter = `blur(${invertedProgress}px) grayscale(${invertedProgress}%)`;
  progress++;
  if (progress > 100) {
    blurred.classList.remove('blurred');
    clearInterval(progression);
  }
}, 75);
