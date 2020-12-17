const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", () => {
    removeActiveClassFromPanels();
    panel.classList.add("active");
  })
);

const removeActiveClassFromPanels = () =>
  panels.forEach((panel) => panel.classList.remove("active"));
