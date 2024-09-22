const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const start = document.getElementById("start-btn");
const reset = document.getElementById("reset-btn");
const timeDisplay = document.getElementById("time-display");
const stop = document.getElementById("stop-btn");

let intervalID;
let totalTime;
function updateDisplay(minutesInput, secondsInput) {
  // Display time in the format MM:SS
  timeDisplay.textContent = `${String(minutesInput).padStart(2, "0")}:${String(
    secondsInput
  ).padStart(2, "0")}`;
}

// Start button event listener
start.addEventListener("click", function () {
  let minutesInput = parseInt(minutes.value);
  let secondsInput = parseInt(seconds.value);

  if (isNaN(minutesInput)) minutesInput = 0;
  if (isNaN(secondsInput)) secondsInput = 0;

  totalTime = minutesInput * 60 + secondsInput;

  updateDisplay(minutesInput, secondsInput);

  clearInterval(intervalID);

  intervalID = setInterval(function () {
    if (totalTime > 0) {
      totalTime--;
      let displayminutes = Math.floor(totalTime / 60);
      let displayseconds = totalTime % 60;

      updateDisplay(displayminutes, displayseconds);
    } else {
      clearInterval(intervalID);
      alert("Time's up!");
      timeDisplay.textContent = "Time's Up!";
    }
  }, 1000);
});
reset.addEventListener("click", function () {
  timeDisplay.textContent = "00:00";
});

stop.addEventListener("click", function () {
  clearInterval(intervalID);
});
