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

// CHANGE: New main function to handle multiple grids
function initAllGrids() {
  // Select ALL elements with the class
  const grids = document.querySelectorAll(".experience-grid-js");
  // Loop through each one and apply the logic
  grids.forEach((grid) => {
    applyMobileScroll(grid);
  });
}

window.addEventListener("DOMContentLoaded", initAllGrids);
window.addEventListener("resize", initAllGrids);

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("ki-home-banner-animation");

  // --- CORRECTED DATA TO MATCH THE VIDEO ---
  const animationCycle = [
    // Phase 1 (Matches first scene of the video)
    {
      el1: {
        html: `<div class="grid-content" style="font-weight: bold;">Transform</div>`,
        bg: "bg-purple-light",
      },
      el2: {
        html: `<div class="grid-content"><img src="../assets/icons/image 5.webp" alt="Clutch"/><img src="../assets/icons/image 6.webp" alt="Stars"/><h4>Top B2B</h4><p>Providers in the Indian Emerging Tech Market for 2021</p></div>`,
        bg: "bg-purple-medium",
      },
      el3: {
        html: `<div class="grid-content" style="font-weight: bold;">Convert</div>`,
        bg: "bg-purple-dark",
      },
      el4: {
        html: `<div class="grid-content"><img src="../assets/icons/image 9.webp" alt="GoodFirms"/><h4>Top Shopify</h4><p>Development Companies in 2019</p></div>`,
        bg: "bg-purple-medium",
      },
      el5: {
        html: `<div class="grid-content" style="font-weight: bold;">Attract</div>`,
        bg: "bg-purple-dark",
      },
      el6: {
        html: `<div class="grid-content"><img src="../assets/icons/Group 44.webp" alt="Microsoft"/></div>`,
        bg: "bg-purple-light",
      },
      el7: {
        html: `<div class="grid-content" style="font-weight: bold;">Growth</div>`,
        bg: "bg-purple-dark",
      },
      el8: {
        html: `<div class="grid-content" style="font-weight: bold;">Strategy</div>`,
        bg: "bg-purple-dark",
      },
      // This 9th element isn't clearly visible in the video's first frame, using a plausible placeholder from your code.
      el9: {
        html: `<div class="grid-content"><img src="../assets/icons/image 5.webp" alt="Clutch"/><img src="../assets/icons/image 6.webp" alt="Stars"/><h4>TOP 1000</h4><p>B2B Companies 2018</p></div>`,
        bg: "bg-purple-medium",
      },
    },
    // Phase 2 (Data transcribed from the video's second scene)
    {
      el1: {
        html: `<div class="grid-content" style="font-weight: bold;">Attract</div>`,
        bg: "bg-purple-dark",
      },
      el2: {
        html: `<div class="grid-content"><img src="../assets/icons/image.webp" alt="CrowdReviews"/><h4>#1</h4><p>ASP.NET Development Company</p></div>`,
        bg: "bg-purple-medium",
      },
      el3: {
        html: `<div class="grid-content" style="font-weight: bold;">Convert</div>`,
        bg: "bg-purple-light",
      },
      el4: {
        html: `<div class="grid-content"><img src="../assets/icons/image.webp" alt="CrowdReviews"/><h4>Top 3</h4><p>E-Commerce Development Company</p></div>`,
        bg: "bg-purple-medium",
      },
      el5: {
        html: `<div class="grid-content" style="font-weight: bold;">Transform</div>`,
        bg: "bg-purple-light",
      },
      el6: {
        html: `<div class="grid-content"><img src="../assets/icons/image.webp" alt="CrowdReviews"/><h4>Top 10</h4><p>Web Development Company</p></div>`,
        bg: "bg-purple-medium",
      },
      el7: {
        html: `<div class="grid-content" style="font-weight: bold;">Growth</div>`,
        bg: "bg-purple-light",
      },
      el8: {
        html: `<div class="grid-content" style="font-weight: bold;">Strategy</div>`,
        bg: "bg-purple-light",
      },
      el9: {
        html: `<div class="grid-content"><img src="../assets/icons/image 5.webp" alt="Clutch"/><img src="../assets/icons/image 6.webp" alt="Stars"/><h4>TOP 1000</h4><p>B2B Companies 2018</p></div>`,
        bg: "bg-purple-dark",
      },
    },
  ];

  function renderGrid(state, isInitial = false) {
    const wrap = (content, isFading = false) => {
      const initialStyle = !isInitial && isFading ? 'style="opacity: 0;"' : "";
      return `<div class="grid-content-wrapper" ${initialStyle}>${content}</div>`;
    };

    container.innerHTML = `
            <div class="row g-0">
                <div id="animation-block-1" class="col-3 grid-item ${
                  state.el1.bg
                } outer-bottom-left-radius outer-shadow">${wrap(
      state.el1.html,
      true
    )}</div>
                <div id="animation-block-2" class="col-3 grid-item ${
                  state.el2.bg
                }">${wrap(state.el2.html, true)}</div>
                <div id="animation-block-3" class="col-3 grid-item ${
                  state.el3.bg
                }">${wrap(state.el3.html, true)}</div>
                <div id="animation-block-4" class="col-3 grid-item ${
                  state.el4.bg
                }">${wrap(state.el4.html, true)}</div>
            </div>
            <div class="row g-0">
                <div id="animation-block-5" class="col-3 offset-3 grid-item ${
                  state.el5.bg
                } outer-bottom-left-radius outer-shadow">${wrap(
      state.el5.html,
      true
    )}</div>
                <div id="animation-block-6" class="col-3 grid-item ${
                  state.el6.bg
                }">${wrap(state.el6.html, true)}</div>
                <div id="animation-block-7" class="col-3 grid-item ${
                  state.el7.bg
                }">${wrap(state.el7.html, true)}</div>
            </div>
            <div class="row g-0">
                <div id="animation-block-8" class="col-3 offset-6 grid-item ${
                  state.el8.bg
                } outer-bottom-left-radius outer-shadow">${wrap(
      state.el8.html,
      true
    )}</div>
                <div id="animation-block-9" class="col-3 grid-item ${
                  state.el9.bg
                }">${wrap(state.el9.html, true)}</div>
            </div>`;
  }

  let currentStateIndex = 0;
  renderGrid(animationCycle[currentStateIndex], true);

  function runAnimation() {
    const movingMap = {
      "animation-block-5": "animation-block-1",
      "animation-block-2": "animation-block-4",
      "animation-block-4": "animation-block-6",
      "animation-block-6": "animation-block-2",
    };

    const firstPositions = {};
    container.querySelectorAll(".grid-item").forEach((el) => {
      firstPositions[el.id] = el.getBoundingClientRect();
    });

    const contentWrappers = container.querySelectorAll(".grid-content-wrapper");
    contentWrappers.forEach((wrapper) => (wrapper.style.opacity = "0"));

    setTimeout(() => {
      currentStateIndex = (currentStateIndex + 1) % animationCycle.length;
      renderGrid(animationCycle[currentStateIndex]);

      Object.keys(movingMap).forEach((startId) => {
        const endId = movingMap[startId];
        const newEl = document.getElementById(endId);
        if (!newEl) return;

        const oldPos = firstPositions[startId];
        const newPos = newEl.getBoundingClientRect();

        const deltaX = oldPos.left - newPos.left;
        const deltaY = oldPos.top - newPos.top;

        newEl.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        newEl.style.transition = "transform 0s";

        requestAnimationFrame(() => {
          newEl.style.transition =
            "transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)";
          newEl.style.transform = "";
        });
      });

      requestAnimationFrame(() => {
        const newContentWrappers = container.querySelectorAll(
          ".grid-content-wrapper"
        );
        newContentWrappers.forEach((wrapper) => (wrapper.style.opacity = "1"));
      });
    }, 400);

    setTimeout(runAnimation, 4000);
  }
  setTimeout(runAnimation, 3000);

  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
    });
  });

  const techData = {
    Backend: [
      {
        name: "ASP.NET MVC",
        svg: '<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#6F42C1" d="M64 128a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64m0-125a61 61 0 1 0 61 61a61.07 61.07 0 0 0-61-61"/><path fill="#6F42C1" d="M38.33 89.45V38.55h12.71l18.46 32V38.55h11.17v50.9h-10.8L51.34 56.7v32.75Z"/></svg>',
      },
      {
        name: "C#",
        svg: '<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" ><path fill="#6F42C1" d="M64 128a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64m0-125a61 61 0 1 0 61 61a61.07 61.07 0 0 0-61-61"/><path fill="#6F42C1" d="M78.43 64c0 12.35-4.8 19.33-14.43 19.33s-14.43-7-14.43-19.33S54.37 44.6 64 44.6S78.43 51.68 78.43 64m-40.4-.41c0 17.5 9 29.23 26 29.23s26-11.73 26-29.23S81.12 34.33 64 34.33s-26 11.74-26 29.26m54.4 20.88v-7.1h7.1v-9.37h-7.1v-7.1h-8.87v7.1h-7.1v9.38h7.1v7.1Z"/></svg>',
      },
      {
        name: "CodeIgniter",
        svg: '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#6F42C1" d="M128 25.1c-15.3 12.3-32 30.2-39.1 42.6-4.9 8.5-6.7 17.9-5.3 28.9 1.2 9.2 4.9 17.5 12.4 23.9 16.2 13.7 39.5 13.9 40.5 13.9 16.1 0 29.2-13.1 29.2-29.2V91.2c-5.8 4.7-13.6 9.3-21.4 12.9-10.4 4.8-19.3 7.8-26.2 7.8-19 0-36.1-15.3-36.1-36.1 0-19 14-33.8 33.3-37.4 12.2-2.3 25.9-0.5 38.3 5.3 2.9 1.4 5.3 2.4 5.3 2.4V25.1zm33.8 107.8c-2.4 2.3-5.3 4.2-8.3 5.3-13.9 5.3-28.7 2.4-38.6-4.2-13.2-8.7-18-24.2-12.2-38.8 3.8-9.6 11.2-17.7 20.7-22.9 14.8-8 31-8.5 44.8-1.5 11.2 5.8 18.7 17 19.5 29.2a35.8 35.8 0 0 1-26 33.1z"/></svg>',
      },
      {
        name: "Laravel",
        svg: '<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#6F42C1" d="M256 186.2c0 4.2-1.7 8.3-4.7 11.3l-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0l-14.1-14.1-28.3-28.3-28.3-28.3-28.3-28.3L81 95.8l-14.1-14.1c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c3-3 7.1-4.7 11.3-4.7s8.3 1.7 11.3 4.7l22.6 22.6 14.1 14.1 28.3 28.3L209.1 154l14.1 14.1c3.1 3 4.8 7.1 4.8 11.3v6.8zm-52.1-11.3l-14.1-14.1-28.3-28.3-22.6-22.6-11.3-11.3L81 51.7l-5.6 5.6-11.3 11.3-22.6 22.6-11.3 11.3-5.7 5.7 5.7 5.7 11.3 11.3 22.6 22.6 11.3 11.3 22.6 22.6 28.3 28.3 14.1 14.1 11.3 11.3 5.7-5.7zM0 69.8c0-4.2 1.7-8.3 4.7-11.3L27.3 36c6.2-6.2 16.4-6.2 22.6 0l14.1 14.1 28.3 28.3 28.3 28.3 28.3 28.3 25.9 25.9 14.1 14.1c6.2 6.2 6.2 16.4 0 22.6L196.4 220c-3 3-7.1 4.7-11.3 4.7s-8.3-1.7-11.3-4.7l-22.6-22.6-14.1-14.1-28.3-28.3-28.3-28.3L52.3 95.8 24 67.5 12.7 56.2l-11.3-11.3v24.9z"/></svg>',
      },
      {
        name: ".NET Core",
        svg: '<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="64" r="61" fill="#6F42C1"/><path fill="#fff" d="M39.38 88V40h39.24v8.12H50.2v11.5h25.1v7.88H50.2V79.9h29.2V88Z"/></svg>',
      },
      {
        name: "Node.js",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hexagon-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v7.146a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"/></svg>',
      },
      {
        name: "PHP",
        svg: '<svg viewBox="0 0 256 134" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#6F42C1"/><stop offset="100%" stop-color="#4A2386"/></linearGradient></defs><ellipse cx="128" cy="67" fill="url(#a)" rx="128" ry="67"/><path fill="#FFF" d="M49 93.31V34.54h14.71c14.07 0 21.6 7.23 21.6 18.2 0 6.6-2.58 11.5-7.56 14.65 6 3 10.14 8.22 10.14 15.92 0 12.8-8.79 20-23.8 20zm11-47.5v15.17h2.8c5.46 0 8.6-2.25 8.6-7.31 0-5.3-3.23-7.86-8.78-7.86zm.18 26.4h-0.18v16.2h3.42c6.12 0 9.8-2.7 9.8-8.45 0-5.7-3.6-7.75-9.62-7.75zm50.62 21.1V34.54h11.16v58.77zm31.75 0V34.54h11.16v58.77zm31.81 0V34.54h14.7c14.08 0 21.6 7.23 21.6 18.2 0 6.6-2.58 11.5-7.56 14.65 6 3 10.14 8.22 10.14 15.92 0 12.8-8.78 20-23.79 20zm11.05-47.5v15.17h2.8c5.46 0 8.6-2.25 8.6-7.31 0-5.3-3.22-7.86-8.78-7.86z"/></svg>',
      },
    ],
    Frontend: [
      {
        name: "React",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 11.757 2.182a.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/></svg>',
      },
      {
        name: "Angular",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-1.5 0h-2v-2h2zM1.604 7.422a.75.75 0 0 1 1.025-.26L4 8.04V5.75a.75.75 0 0 1 1.5 0v5.5a.75.75 0 0 1-1.5 0V8.869L2.629 7.682a.75.75 0 0 1-.26-1.025Z M6.604 11.25a.75.75 0 0 1 0-1.5h1.25a.75.75 0 0 1 0 1.5zM9.018 5.75a.75.75 0 0 1 .729.543l1.5 4.5a.75.75 0 1 1-1.442.484L10.384 9.5H8.616l-.416 1.248a.75.75 0 1 1-1.442-.484l1.5-4.5A.75.75 0 0 1 9.018 5.75M9.5 8.092l-.316-.948h-.368L8.5 8.092z"/></svg>',
      },
      {
        name: "JavaScript",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-js" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-1.5 0h-2v-2h2zM6.291 14.891c.045.138.12.25.213.333a.46.46 0 0 0 .33.124.47.47 0 0 0 .449-.246l1.328-2.315h.823v2.24c0 .265.18.438.438.438h.53v-.45c-.002-.01-.003-.02-.003-.03v-4.502c0-.265-.18-.437-.438-.437h-.53v.45c.002.01.003.02.003.03v1.889h-.885l-1.152-2.025a.46.46 0 0 0-.4-.218.47.47 0 0 0-.449.246L4.763 9.68h-.72v-.03c0-.265-.18-.437-.438-.437h-.53v.45c.002.01.003.02.003.03v4.502c0 .265.18.438.438.438h.53v-.45c-.002-.01-.003-.02-.003-.03V9.71h.908z"/></svg>',
      },
    ],
    "Data and Databases": [
      {
        name: "SQL",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-server" viewBox="0 0 16 16"><path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4z"/><path d="M1.333 6.334v3C1.333 10.806 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.5 6.5 0 0 1-1.333.167C11.985 6.667 9.87 6.333 8 6.333s-3.985.334-5.333.167a6.5 6.5 0 0 1-1.334-.167z"/><path d="M1.333 11.667v3c0 1.473 2.985 2.667 6.667 2.667s6.667-1.194 6.667-2.667v-3a6.5 6.5 0 0 1-1.333.167C11.985 12.333 9.87 12 8 12s-3.985.333-5.333.167a6.5 6.5 0 0 1-1.334-.167z"/></svg>',
      },
      {
        name: "MongoDB",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-leaf" viewBox="0 0 16 16"><path d="M8 16a6 6 0 0 0 6-6v-1a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v1a4 4 0 0 1-4 4H2.5a1 1 0 0 0-1 1v1a6 6 0 0 0 6 6zM3 12.5h1.5a1 1 0 0 0 1-1V11a3 3 0 0 1 3-3h1.5v1a5 5 0 0 1-5 5z"/><path d="M10.146 3.146a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L12.293 6 10.146 3.854a.5.5 0 0 1 0-.708z"/></svg>',
      },
      {
        name: "MySQL",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd-stack" viewBox="0 0 16 16"><path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z"/><path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/><path d="M14 5a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM2 4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><path d="M5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/></svg>',
      },
    ],
    "Quality Engineering": [
      {
        name: "Selenium",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/></svg>',
      },
      {
        name: "Cypress",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16"><path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/><path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/></svg>',
      },
    ],
    "Mobile Apps & PWA": [
      {
        name: "React Native",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>',
      },
      {
        name: "Flutter",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layers" viewBox="0 0 16 16"><path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zM1 6.31l6.813 3.622L15 6.31 8.187 2.687zM15 9.69l-6.813-3.622L1 9.69l6.813 3.622z"/></svg>',
      },
    ],
    "Cloud & DevOps": [
      {
        name: "AWS",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16"><path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.384m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.147-2.207-2.571-2.207l-.455-.007-.013-.448C11.996 4.681 10.138 3 8 3c-1.552 0-2.942.87-3.61 2.1z"/></svg>',
      },
      {
        name: "Docker",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/></svg>',
      },
      {
        name: "Kubernetes",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.901 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.115 2.692l.319.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.319c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/></svg>',
      },
    ],
    "E-Commerce": [
      {
        name: "Shopify",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/></svg>',
      },
      {
        name: "WooCommerce",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.49.402H3.31l.44 2H15a.5.5 0 0 1 0 1H2.707l-.427-2H2.5a.5.5 0 0 1-.485-.621zM3.621 4l-.94-2H2.5v1H3.4l.94 2H13l.8-4H3.622zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>',
      },
      {
        name: "Wix",
        svg: '<svg viewBox="0 0 256 64" xmlns="http://www.w3.org/2000/svg"><path fill="#6F42C1" d="M49.4 64H33.2L0 32 33.2 0h16.2L16.2 32l33.2 32zM222.8 64l-18-32 18-32h16.2L222.8 32l16.2 32h-16.2zM128 50.3L95.5 0h17.3l21 39.2L155 0h17.3L128 50.3zM81.5 64h-17L88.2 0h17L81.5 64zM156.5 64h17l-23.8-64h-17l23.8 64z"/></svg>',
      },
    ],
    "Project Management": [
      {
        name: "Jira",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-kanban" viewBox="0 0 16 16"><path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM11 11.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5zM7.5 10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v5.5a.5.5 0 0 0 .5.5zM4 9.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5z"/></svg>',
      },
      {
        name: "Asana",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16"><path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8.5A1.5 1.5 0 0 1 13 3v1.5a.5.5 0 0 1-1 0V3a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h5a.5.5 0 0 1 0 1z"/><path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/></svg>',
      },
    ],
  };

  const servicePills = document.querySelectorAll(
    ".expertise-section .service-pills .btn"
  );
  const techGrid = document.querySelector(".expertise-section .tech-grid");

  function renderTechGrid(category) {
    // Guard clause in case the grid doesn't exist on the page
    if (!techGrid) return;

    techGrid.innerHTML = ""; // Clear existing items
    const technologies = techData[category];

    if (!technologies) {
      console.error(`No data found for category: ${category}`);
      return;
    }

    technologies.forEach((tech) => {
      const item = document.createElement("div");
      item.className = "tech-item";
      item.innerHTML = `
                ${tech.svg}
                <p>${tech.name}</p>
            `;
      techGrid.appendChild(item);
    });
  }

  // Ensure servicePills exist before adding listeners
  if (servicePills.length > 0) {
    servicePills.forEach((pill) => {
      pill.addEventListener("mouseover", () => {
        // Remove active class from currently active pill
        const currentActive = document.querySelector(
          ".expertise-section .service-pills .btn.active"
        );
        if (currentActive) {
          currentActive.classList.remove("active");
        }
        pill.classList.add("active");

        const category = pill.dataset.category;
        renderTechGrid(category);
      });
    });

    // Initial render for the default active category
    renderTechGrid("Backend");
  }
});
