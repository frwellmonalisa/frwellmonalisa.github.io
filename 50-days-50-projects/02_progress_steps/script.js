const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const progressLine = document.querySelector("#progressLine");
const circles = document.querySelectorAll(".circle");

let currentStep = 1;

nextBtn.addEventListener("click", () => {
  currentStep += 1;

  if (currentStep >= circles.length) {
    console.log("we are here");
    currentStep = circles.length;
  }

  updateDOM();
});

prevBtn.addEventListener("click", () => {
  currentStep -= 1;

  if (currentStep < 1) {
    currentStep = 1;
  }

  updateDOM();
});

const updateLine = () => {
  circles.forEach((circle, idx) =>
    idx < currentStep
      ? circle.classList.add("active")
      : circle.classList.remove("active")
  );

  progressLine.style.width =
    ((currentStep - 1) / (circles.length - 1)) * 100 + "%";
};

const updateDOM = () => {
  if (currentStep === 1) {
    nextBtn.disabled = false;
    prevBtn.disabled = true;
  }

  if (currentStep === circles.length) {
    nextBtn.disabled = true;
    prevBtn.disabled = false;
  }

  updateLine();
};

updateDOM();
