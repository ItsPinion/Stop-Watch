let sec = 0;
let min = 0;
let hour = 0;
let day = 0;
let week = 0;
const secEle = document.getElementById("sec") as HTMLElement;
const minEle = document.getElementById("min") as HTMLElement;
const hourEle = document.getElementById("hour") as HTMLElement;
const dayEle = document.getElementById("day") as HTMLElement;
const weekEle = document.getElementById("week") as HTMLElement;
const menu = document.getElementById("menu") as HTMLElement;
const timeStop = document.getElementById("time-stop") as HTMLElement;
const timeReset = document.getElementById("time-reset") as HTMLElement;

let run = false;

document.getElementById("stop-button")!.addEventListener("click", () => {
  document.getElementById("stop-watch")!.classList.remove("hide");
  menu.classList.add("hide");
});

setInterval(() => {
  if (run) {
    sec++;
    secEle.textContent = "" + sec;
    if (sec > 60) {
      sec = 0;
      min++;
      minEle.textContent = "" + min;
    }
    if (min > 60) {
      min = 0;
      hour++;
      hourEle.textContent = "" + hour;
    }
    if (hour > 24) {
      hour = 0;
      day++;
      dayEle.textContent = "" + day;
    }
    if (day > 7) {
      day = 0;
      week++;
      weekEle.textContent = "" + week;
    }
  }
}, 1000);

timeStop.addEventListener("click", () => {
  run = !run;
  timeStop.textContent = timeStop.textContent === "Start" ? "Stop" : "Start";
  timeReset.classList.remove("hide");
});

timeReset.addEventListener("click", () => {
  run = !run;
  timeStop.textContent = timeStop.textContent === "Start" ? "Stop" : "Start";

  timeReset.classList.add("hide");

  secEle.textContent = "0";
  minEle.textContent = "0";
  hourEle.textContent = "0";
  dayEle.textContent = "0";
  weekEle.textContent = "0";
  sec = 0;
  min = 0;
  hour = 0;
  day = 0;
  week = 0;
});