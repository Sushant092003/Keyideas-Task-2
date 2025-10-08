// CHANGE: Renamed function for clarity
function applyMobileScroll(grid) {
  if (!grid) return;

  const items = Array.from(grid.children);

  // Store original classes on first run if they haven't been stored
  items.forEach((item) => {
    if (!item.dataset.desktopClasses) {
      const desktopClasses = Array.from(item.classList)
        .filter((cls) => cls.startsWith("col-md-") || cls === "mb-4")
        .join(" ");
      item.dataset.desktopClasses = desktopClasses;
    }
  });

  if (window.innerWidth < 768) {
    grid.classList.add("horizontal-scroll-container");
    items.forEach((item) => {
      if (item.dataset.desktopClasses) {
        item.classList.remove(
          ...item.dataset.desktopClasses.split(" ").filter(Boolean)
        );
      }
      item.classList.add("horizontal-scroll-item");
    });
  } else {
    grid.classList.remove("horizontal-scroll-container");
    items.forEach((item) => {
      item.classList.remove("horizontal-scroll-item");
      if (item.dataset.desktopClasses) {
        item.classList.add(
          ...item.dataset.desktopClasses.split(" ").filter(Boolean)
        );
      }
    });
  }
}

function initAllGrids() {
  const grids = document.querySelectorAll(".experience-grid-js");
  grids.forEach((grid) => {
    applyMobileScroll(grid);
  });
}

window.addEventListener("DOMContentLoaded", initAllGrids);
window.addEventListener("resize", initAllGrids);

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
    });
  });

  const buttons = document.querySelectorAll(".sc-btn");
  const sections = document.querySelectorAll(".sc-section");

  function switchTab(targetId) {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    const targetButton = document.querySelector(
      `.sc-btn[data-target="${targetId}"]`
    );
    const targetSection = document.getElementById(targetId);

    if (targetButton && targetSection) {
      targetButton.classList.add("active");
      targetSection.classList.add("active");
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("mouseover", function () {
      const targetId = this.getAttribute("data-target");
      switchTab(targetId);
    });
  });

  const initiallyActiveButton = document.querySelector(".sc-btn.active");
  if (initiallyActiveButton) {
    const initialTarget = initiallyActiveButton.getAttribute("data-target");

    switchTab(initialTarget);
  } else if (buttons.length > 0) {
    const firstTarget = buttons[0].getAttribute("data-target");
    switchTab(firstTarget);
  }
});
