const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skippers = player.querySelectorAll(".player__button");
const sliders = player.querySelectorAll(".player__slider");

function togglePlay() {
    const state = video.paused ? "play" : "pause";
    video[state]();

    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);
// progress.addEventListener('click', )
toggle.addEventListener("click", togglePlay);
skippers.forEach((skipper) => skipper.addEventListener("click", skip));
sliders.forEach((slider) =>
    slider.addEventListener("click", handleRangeUpdate)
);
sliders.forEach((slider) =>
    slider.addEventListener("mousemove", handleRangeUpdate)
);
