const circles = document.querySelectorAll(".circle");

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progressbar = document.getElementById("pb");

let activestatus = 1;

next.addEventListener("click", () => {
  activestatus++;
  if (activestatus > circles.length) {
    activestatus = circles.length;
  }
  doupdate();
});

prev.addEventListener("click", () => {
  activestatus--;
  if (activestatus < 1) {
    activestatus = 1;
  }
  doupdate();
});

function doupdate() {
  circles.forEach((circle, idx) => {
    if (idx < activestatus) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progressbar.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}
