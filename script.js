const hourContainer = document.getElementById("hours");
const minuteContainer = document.getElementById("minutes");
const secondContainer = document.getElementById("seconds");

let hours = 10;
let minutes = 0;
let seconds = 0;

hourContainer.textContent = numberFormat(hours);
minuteContainer.textContent = numberFormat(minutes);
secondContainer.textContent = numberFormat(seconds);

function numberFormat(a) {
  if (a >= 10) {
    return a.toString();
  } else {
    return "0" + a.toString();
  }
}








// Setting up the buttons

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
