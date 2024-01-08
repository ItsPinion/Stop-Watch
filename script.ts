const sec = document.getElementById("sec") as HTMLInputElement;
const min = document.getElementById("min") as HTMLInputElement;
const hour = document.getElementById("hour") as HTMLInputElement;
const day = document.getElementById("day") as HTMLInputElement;
const week = document.getElementById("week") as HTMLInputElement;
const menu = document.getElementById("menu") as HTMLElement;
const stopWatchStart = document.getElementById("stop-watch-start") as HTMLElement;
const stopWatchReset = document.getElementById("stop-watch-reset") as HTMLElement;


////////////////////////////////////////////////////////////////
////////////////////////// Stop-Watch //////////////////////////
////////////////////////////////////////////////////////////////

document.getElementById("stop-watch-button")!.addEventListener("click", () => {
  document.getElementById("stop-watch-body")!.classList.remove("hide");
  menu.classList.add("hide");
  timeGoUp()
});

function timeGoUp() {
  let run = false;

  setInterval(() => {
    run && (sec.value = `${+sec.value + 1}`);
  }, 1000);

  setInterval(() => {
    if (+sec.value >= 60) {
      sec.value = "0";
      min.value = `${+min.value + 1}`;
    }
    if (+min.value >= 60) {
      min.value = "0";
      hour.value = `${+hour.value + 1}`;
    }
    if (+hour.value >= 24) {
      hour.value = "0";
      day.value = `${+day.value + 1}`;
    }
    if (+day.value >= 7) {
      day.value = "0";
      week.value = `${+week.value + 1}`;
    }
  });

  stopWatchStart.addEventListener("click", () => {
    run = !run;
    stopWatchStart.textContent = stopWatchStart.textContent === "Start" ? "Stop" : "Start";
    stopWatchReset.classList.remove("hide");
  });

  stopWatchReset.addEventListener("click", () => {
    run && (run = !run);
    stopWatchStart.textContent = (run ? "Stop" : "Start");

    stopWatchReset.classList.add("hide");

    sec.value = "";
    min.value = "";
    hour.value = "";
    day.value = "";
    week.value = "";
  });
}


///////////////////////////////////////////////////////////////
//////////////////////////// Timer [ProtoType]////////////////////////////
///////////////////////////////////////////////////////////////

document.getElementById("timer-button")!.addEventListener("click", () => {
  alert("Will be added soon....")
  // document.getElementById("stop-watch-body")!.classList.remove("hide");
  // menu.classList.add("hide");
  // timeGoDown()
});

// function timeGoDown() {
//     let run = false;

//   setInterval(() => {
//     run && (sec.value = `${+sec.value - 1}`);
//   }, 1000);

//   setInterval(() => {
//     if (+sec.value < 0) {
//       sec.value = "59";
//       min.value = `${+min.value - 1}`;
//     }
//     if (+min.value < 0) {
//       min.value = "59";
//       hour.value = `${+hour.value - 1}`;
//     }
//     if (+hour.value < 0) {
//       hour.value = "23";
//       day.value = `${+day.value - 1}`;
//     }
//     if (+day.value < 0) {
//       day.value = "6";
//       week.value = `${+week.value - 1}`;
//     }
//   });

//   stopWatchStart.addEventListener("click", () => {
//     run = !run;
//     stopWatchStart.textContent = stopWatchStart.textContent === "Start" ? "Stop" : "Start";
//     stopWatchReset.classList.remove("hide");
//   });

//   stopWatchReset.addEventListener("click", () => {
//     run && (run = !run);
//     stopWatchStart.textContent = (run ? "Stop" : "Start");

//     stopWatchReset.classList.add("hide");

//     sec.value = "";
//     min.value = "";
//     hour.value = "";
//     day.value = "";
//     week.value = "";
//   });
// }