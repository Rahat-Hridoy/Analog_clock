let hourHand = document.getElementById("hour-hand");
let minuteHand = document.getElementById("minute-hand");
let secondHand = document.getElementById("second-hand");

// main clock function
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

// Create clock dashes minutes
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

// theme button functionality
let currentState = false;
const styleBtn = document.getElementById("style-button");
const theme = document.querySelectorAll(".theme");
let savedTheme = localStorage.getItem("savedTheme");

styleBtn.addEventListener("click", () => {
  currentState = !currentState;
  if (currentState) {
    theme.forEach((item) => {
      item.style.display = "block";
      item.style.transition = "transform 0.3s ease-in-out";
    });
  } else {
    theme.forEach((item) => {
      item.style.display = "none";
    });
  }
});

if (savedTheme) {
  document.body.setAttribute("data-theme", savedTheme);
}

theme.forEach((item) => {
  item.addEventListener("click", () => {
    const themeColor = item.getAttribute("data-theme");
    document.body.setAttribute("data-theme", themeColor);
    localStorage.setItem("savedTheme", themeColor);
  });
});
