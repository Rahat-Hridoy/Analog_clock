let hourHand = document.getElementById("hour-hand");
let minuteHand = document.getElementById("minute-hand");
let secondHand = document.getElementById("second-hand");
function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() < 12 ? now.getHours() : now.getHours() - 12;

  const secondsAngle = seconds * 6;
  const minutesAngle = minutes * 6 + seconds / 10;
  const hoursAngle = hours * 30 + minutes / 2;
  secondHand.style.transform = `rotate(${secondsAngle}deg)`;
  minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
  hourHand.style.transform = `rotate(${hoursAngle}deg)`;
}
setInterval(updateClock, 1000);
updateClock();

const clock = document.getElementById("clock-container");

for (let i = 1; i <= 60; i++) {
  const dash = document.createElement("span");
  dash.classList.add("desh");
  dash.style.setProperty("--i", i);

  if (i % 5 === 0) {
    dash.classList.add("big");
  }

  clock.appendChild(dash);
}
