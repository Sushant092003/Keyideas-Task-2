document.addEventListener("DOMContentLoaded", function () {
  const mobileView = document.querySelector(".mobile-view");
  if (mobileView) {
    const toggleContainer = mobileView.querySelector(
      "#toggle-button-container"
    );
    const toggleButton = toggleContainer.querySelector(".toggle-card");
    const hiddenCards = mobileView.querySelectorAll(".industry-card-hidden");
    let isExpanded = false;

    if (toggleButton) {
      toggleButton.addEventListener("click", function () {
        isExpanded = !isExpanded; // Toggle the state

        hiddenCards.forEach((card) => {
          card.classList.toggle("d-none");
        });

        if (isExpanded) {
          toggleButton.textContent = "Show less";
        } else {
          toggleButton.textContent = "Show more";
          // Scroll to the top of the section for better UX
          const section = document.querySelector(".section-container");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    }
  }
});
