const tabs = document.querySelectorAll(".module-tab");
const panels = document.querySelectorAll(".module-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.module;

    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `module-${target}`);
    });
  });
});
