const searchContainer = document.querySelector(".search-container");
const btn = searchContainer.querySelector(".btn");
const input = searchContainer.querySelector(".input");
console.log("btn :>> ", btn);
console.log("input :>> ", input);

btn.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
  input.focus();
});
