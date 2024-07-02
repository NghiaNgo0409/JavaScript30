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

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
