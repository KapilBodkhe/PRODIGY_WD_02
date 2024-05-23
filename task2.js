let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let lapsContainer = document.querySelector(".laps"); // Reference to laps container
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
    lapsContainer.innerHTML = ""; // Clear laps container
}); 

document.getElementById("lap-timer").addEventListener("click", () => { // Event listener for Lap button
    let lapTime = formatTime(hours) + " : " + formatTime(minutes) + " : " + formatTime(seconds) + " : " + formatMilliseconds(milliseconds);
    let lapDisplay = document.createElement("div");
    lapDisplay.textContent = lapTime;
    lapsContainer.appendChild(lapDisplay);
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    timeRef.innerHTML = formatTime(hours) + " : " + formatTime(minutes) + " : " + formatTime(seconds) + " : " + formatMilliseconds(milliseconds);
}

function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

function formatMilliseconds(ms) {
    return (ms < 10 ? "00" : ms < 100 ? "0" : "") + ms;
}

