let idInterval;
let counter = 1;

const runTimer = function() {
  counter++;
  let time = (new Date().toLocaleTimeString());
  console.log(time)
  if (counter > 5) {
    clearInterval(idInterval)
  }
  }


idInterval = setInterval(runTimer, 5000)


