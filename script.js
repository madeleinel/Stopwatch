const hourContainer = document.getElementById("hours");
const minuteContainer = document.getElementById("minutes");
const secondContainer = document.getElementById("seconds");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

setTime();

function numberFormat(a) {
  if (a >= 10) {
    return a.toString();
  } else {
    return "0" + a.toString();
  }
}

function increaseTime() {
    seconds ++;

    if (seconds == 60) {
      seconds = 0;
      minutes ++;
    }

    if ( minutes == 60 ) {
      minutes = 0;
      hours ++;
    }
    setTime();
  }

  function setTime() {
    hourContainer.textContent = numberFormat(hours);
    minuteContainer.textContent = numberFormat(minutes);
    secondContainer.textContent = numberFormat(seconds);
  }

startButton.addEventListener('click', function() {
  setInterval(increaseTime, 1000);
});
