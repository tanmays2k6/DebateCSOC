let countdown;
let time = 7 * 60; // initial 7 minutes
let isPaused = false;

function updateTimerDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timer").textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startDebate() {
    const motion = document.getElementById("motion-input").value.trim();
    const format = document.getElementById("format").value;

    if (!motion) {
    alert("Please enter a motion before starting.");
    return;
    }

    document.getElementById("motion-display").style.display = "block";
    document.getElementById("motion-text").textContent = motion;
    document.getElementById("selected-format").textContent = format;

    time = 7 * 60;
    isPaused = false;
    updateTimerDisplay();
    clearInterval(countdown);
    countdown = setInterval(runTimer, 1000);
}

function runTimer() {
    if (!isPaused) {
    if (time <= 0) {
        clearInterval(countdown);
        document.getElementById("timer").textContent = "00:00";
        alert("Time's up!");
    } else {
        time--;
        updateTimerDisplay();
    }
    }
}

function pauseTimer() {
    isPaused = !isPaused;
}

function resetTimer() {
    clearInterval(countdown);
    time = 7 * 60;
    updateTimerDisplay();
}