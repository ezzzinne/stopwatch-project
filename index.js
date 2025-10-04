const startStopBtn = document.getElementById("start-stop-btn");
const resetBtn = document.getElementById("reset-btn");
const ms = document.getElementById("ms");
const secs = document.getElementById("secs");
const mins = document.getElementById("mins");
const hrs = document.getElementById("hours");
const toggleBtn = document.getElementById("toggle-btn");
const body = document.querySelector("body");

// initialization
let millisecs = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeId;

// timer functionality 
function timer (updateTimer) {
    startStopBtn.addEventListener("click", () => {
        if(!timeId) {
            timeId = setInterval(updateTimer, 10);
            startStopBtn.innerText = "Stop";
        } else {
            clearInterval(timeId);
            timeId = null;
            startStopBtn.innerText = "Start";
        }
    });

    resetBtn.addEventListener("click", () => {
        clearInterval(timeId);
        timeId = null;
        millisecs = 0;
        ms.innerText = millisecs.toString().padStart(3, "0");
        seconds = 0;
        secs.innerText = seconds.toString().padStart(2, "0");
        minutes = 0;
        mins.innerText = minutes.toString().padStart(2, "0") + ":";
        hours = 0;
        hrs.innerText = hours.toString().padStart(2, "0") + ":";
        startStopBtn.innerText = "Start";
    })
}
timer(updateTimer);

// function to update timer
function updateTimer () {
    millisecs += 10;
    ms.innerText = millisecs.toString().padStart(3, "0");

    if(millisecs >= 1000) {
        millisecs = 0;
        seconds++;
        secs.innerText = seconds.toString().padStart(2, "0");
    }
    
    if (seconds === 60) { 
        seconds = 0;
        minutes++;
        mins.innerText = minutes.toString().padStart(2, "0") + ":";
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
        hrs.innerText = hours.toString().padStart(2, "0") + ":";
    }
}

// light/dark mode functionality
body.classList.add("light");
toggleBtn.addEventListener("click", () => {
    if(body.classList.contains("light")) {
        body.classList.replace("light", "dark");
        toggleBtn.innerText = "Light Mode";
    } else {
        body.classList.replace("dark", "light");
        toggleBtn.innerText = "Dark Mode";
    }
})