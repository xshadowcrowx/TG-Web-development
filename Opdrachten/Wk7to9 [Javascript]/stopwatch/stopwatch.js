// Convert time to a format of hours, minutes, seconds, and milliseconds

function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("display").innerHTML = txt;
  console.log('Display re-initialized...')
}

// Create "start", "pause" and "reset" functions

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
  //showButton("PAUSE");
  console.log('pushed: start') 
}

function pause() {
  clearInterval(timerInterval);
  //showButton("PLAY");
  console.log('pushed: pause')
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  //showButton("PLAY");
  console.log('pushed: stop')
}

// Create event listeners

let startButton = document.getElementById("startB");
let pauseButton = document.getElementById("pauseB");
let stopButton = document.getElementById("stopB");

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
stopButton.addEventListener("click", reset);



let startIsOn = false;
/*  make variable startIsOn
    add conditional logic to start buntton if(!startIsOn).
    control execution of functions using truthy / falsy.
*/



    /* *********************************************************** */
    /*              GRAVEYARD OF FAILED EXPERIMENTS                */
    /* *********************************************************** */
    
    // #1. using the Date() constructor
    //
    //     Description:
    //     I'm able to set seconds and hours, but minutes defaults to
    //     to 456. Abandoned in favor of other aproach...

    /*
    
    let clock = new Date();
    console.log(clock)

    console.log("-------TIME--------")

    clock.setSeconds(0);
    clock.setMinutes(0);
    clock.setHours(0);

    console.log(clock.getSeconds() + " seconds");
    console.log(clock.getMilliseconds() + " minutes");
    console.log(clock.getHours() + " hours");
    
    */