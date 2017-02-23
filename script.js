const hourContainer = document.getElementById("hours");
const minuteContainer = document.getElementById("minutes");
const secondContainer = document.getElementById("seconds");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
setInterval(increaseTime, 1000);

let hours = 0;
let minutes = 0;
let seconds = 0;
let timeBoolean;

setTime();

function numberFormat(a) {
  if (a >= 10) {
    return a.toString();
  } else {
    return "0" + a.toString();
  }
}

function increaseTime() {
    if (timeBoolean) {
      seconds ++;
      console.log(seconds);
      if (seconds == 60) {
        seconds = 0;
        minutes ++;
      }

      if ( minutes == 60) {
        minutes = 0;
        hours ++;
      }
      setTime();
    }
  }

  function setTime() {
    hourContainer.textContent = numberFormat(hours);
    minuteContainer.textContent = numberFormat(minutes);
    secondContainer.textContent = numberFormat(seconds);
  }

startButton.addEventListener('click', function() {
  timeBoolean = true;
});
stopButton.addEventListener('click', function() {
  timeBoolean = false;
});
resetButton.addEventListener('click', function(){
  timeBoolean = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  setTime();
});
