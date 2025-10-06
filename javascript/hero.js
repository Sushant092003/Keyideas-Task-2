document.addEventListener("DOMContentLoaded", () => {
  const kiHomeBannerAnimation = document.querySelector(
    ".ki-home-banner-animation"
  );
  let animationGrid, animationGridItems;
  if (kiHomeBannerAnimation) {
    animationGrid = kiHomeBannerAnimation.querySelector(".aj-animation-grid");
    animationGridItems = kiHomeBannerAnimation.querySelectorAll(".aj-grid-ele");
  }

  gsap.registerPlugin(Flip);
  if (animationGridItems) {
    animationGridItems.forEach((box, index) => {
      let row = Math.floor(index / 4) + 1;
      let col = (index % 4) + 1;
      box.style.gridRow = row;
      box.style.gridColumn = col;
    });
  }

  const msImage = `
    <img class="aj-ms-image img-fluid" alt="microsoft logo"  src="../assets/icons/Group 44.webp">
`;

  const transformContent = `
    <div>
        <span class="text-size-transform">Transform</span>
    </div>
`;

  const attractContent = `
    <div>
        <span class="text-size-transform">Attract</span>
    </div>
`;

  const growthContent = `
    <div>
        <span class="text-size-transform">Growth</span>
    </div>
`;

  const convertContent = `
    <div>
        <span class="text-size-transform">Convert</span>
    </div>
`;

  const strategyContent = `
    <div>
        <span class="text-size-transform">Strategy</span>
    </div>
`;

  const clutchB2B = `
    <div class="aj-clutch-cont">
        <img class="aj-clutch img-fluid" alt="clutch logo"  src="../assets/icons/Group 27.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top B2B</span>
            <span class="text-size-para">Providers in the Indian Emerging Tech Market for 2021</span>
        </div>
    </div>
`;

  const clutchShopify = `
    <div class="aj-clutch-cont">
        <img class="aj-good-firms img-fluid" alt="good firms logo"  src="../assets/icons/Group 27.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top Shopify</span>
            <span class="text-size-para">Development Companies in 2019</span>
        </div>
    </div>
`;

  const clutch12 = `
    <div class="aj-clutch-cont">
        <img class="aj-clutch img-fluid" alt="clutch logo"  src="../assets/icons/Group 27.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top 12</span>
            <span class="text-size-para">Out of 400 top Mobile App Developers in India, 2020</span>
        </div>
    </div>
`;

  const clutch1000 = `
    <div class="aj-clutch-cont">
        <img class="aj-clutch img-fluid" alt="clutch logo" src="../assets/icons/Group 27.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top 1000</span>
            <span class="text-size-para">B2B Companies 2018</span>
        </div>
    </div>
`;

  const crowd1 = `
    <div class="aj-clutch-cont">
        <img class="aj-crowd-rew img-fluid" height="100" width="100" alt="crowd review logo" src="../assets/icons/image.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">#1</span>
            <span class="text-size-para">ASP.NET Development Company</span>
        </div>
    </div>
`;

  const crowdTop3 = `
    <div class="aj-clutch-cont">
        <img class="aj-crowd-rew img-fluid" height="100" width="100" alt="crowd review logo" src="../assets/icons/image.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top 3</span>
            <span class="text-size-para">E-Commerce Development Company</span>
        </div>
    </div>
`;

  const crowdTop10 = `
    <div class="aj-clutch-cont">
        <img class="aj-crowd-rew img-fluid" height="100" width="100" alt="crowd review logo" src="../assets/icons/image.webp">
        <div class="text-center">
            <span class="text-white text-h3-size">Top 10</span>
            <span class="text-size-para">Web Development Company</span>
        </div>
    </div>
`;

  const oneChangeTime = 1;

  let one;
  let two;
  let three;
  let four;
  let six;
  let seven;
  let eight;
  let eleven;
  let twelve;

  let tempone,
    tempTwo,
    tempthree,
    tempfour,
    tempsix,
    tempseven,
    tempeight,
    tempeleven,
    temptwelve;

  if (kiHomeBannerAnimation) {
    tempone = kiHomeBannerAnimation.querySelector(".temp-one");
    tempone.style.gridColumn = 1;
    tempone.style.gridRow = 1;
    one = kiHomeBannerAnimation.querySelector(".one");

    tempTwo = kiHomeBannerAnimation.querySelector(".temp-two");
    tempTwo.style.gridColumn = 2;
    tempTwo.style.gridRow = 1;
    two = kiHomeBannerAnimation.querySelector(".two");

    tempthree = kiHomeBannerAnimation.querySelector(".temp-three");
    tempthree.style.gridColumn = 3;
    tempthree.style.gridRow = 1;
    three = kiHomeBannerAnimation.querySelector(".three");

    tempfour = kiHomeBannerAnimation.querySelector(".temp-four");
    tempfour.style.gridColumn = 4;
    tempfour.style.gridRow = 1;
    four = kiHomeBannerAnimation.querySelector(".four");

    tempsix = kiHomeBannerAnimation.querySelector(".temp-six");
    tempsix.style.gridColumn = 2;
    tempsix.style.gridRow = 2;
    six = kiHomeBannerAnimation.querySelector(".six");

    tempseven = kiHomeBannerAnimation.querySelector(".temp-seven");
    tempseven.style.gridColumn = 3;
    tempseven.style.gridRow = 2;
    seven = kiHomeBannerAnimation.querySelector(".seven");

    tempeight = kiHomeBannerAnimation.querySelector(".temp-eight");
    tempeight.style.gridColumn = 4;
    tempeight.style.gridRow = 2;
    eight = kiHomeBannerAnimation.querySelector(".eight");

    tempeleven = kiHomeBannerAnimation.querySelector(".temp-eleven");
    tempeleven.style.gridColumn = 3;
    tempeleven.style.gridRow = 3;
    eleven = kiHomeBannerAnimation.querySelector(".eleven");

    temptwelve = kiHomeBannerAnimation.querySelector(".temp-twelve");
    temptwelve.style.gridColumn = 4;
    temptwelve.style.gridRow = 3;
    twelve = kiHomeBannerAnimation.querySelector(".twelve");
  }

  function assignContentForStageOne() {
    one.innerHTML = transformContent;
    two.innerHTML = clutchB2B;
    three.innerHTML = convertContent;
    four.innerHTML = clutchShopify;
    six.innerHTML = attractContent;
    seven.innerHTML = msImage;
    eight.innerHTML = growthContent;
    eleven.innerHTML = strategyContent;
    twelve.innerHTML = clutch12;
  }

  function stageOne() {
    let state1 = Flip.getState(".one", {
      props: "opacity,borderRadius,backgroundColor",
    });
    one.classList.remove("aj-light-purple");
    one.classList.add("aj-medium-purple");

    two.style.gridRow = 2;
    two.style.borderRadius = "0px 0px 0px 32px";
    two.classList.remove("aj-medium-purple");
    two.classList.add("aj-dark-purple");
    two.style.opacity = 0;
    tempTwo.innerHTML = clutchB2B;
    two.innerHTML = crowd1;
    let state2 = Flip.getState(".two", {
      props: "opacity,borderRadius,backgroundColor",
    });
    two.style.borderRadius = "0px 0px 0px 0px";
    two.style.opacity = 1;
    two.style.gridRow = 1;

    let state3 = Flip.getState(".three", {
      props: "opacity,borderRadius,backgroundColor",
    });
    three.classList.remove("aj-dark-purple");
    three.classList.add("aj-light-purple");

    four.style.gridColumn = 3;
    four.classList.remove("aj-medium-purple");
    four.classList.add("aj-dark-purple");
    four.style.opacity = 0;
    tempfour.innerHTML = clutchShopify;
    four.innerHTML = crowdTop10;
    let state4 = Flip.getState(".four", {
      props: "opacity,borderRadius,backgroundColor",
    });
    four.style.gridColumn = 4;
    four.style.opacity = 1;

    tempsix.style.borderRadius = "0px 0px 0px 32px";
    let state6 = Flip.getState(".six", {
      props: "opacity,borderRadius,backgroundColor",
    });
    six.style.borderRadius = "0px 0px 0px 32px";
    six.classList.remove("aj-dark-purple");
    six.classList.add("aj-light-purple");

    seven.style.gridColumn = 4;
    seven.style.gridRow = 1;
    seven.classList.remove("aj-light-purple");
    seven.classList.add("aj-dark-purple");
    seven.style.opacity = 0;
    tempseven.innerHTML = msImage;
    seven.innerHTML = crowdTop3;
    let state7 = Flip.getState(".seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    seven.style.gridColumn = 3;
    seven.style.gridRow = 2;
    seven.style.opacity = 1;

    let state8 = Flip.getState(".eight", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eight.classList.remove("aj-dark-purple");
    eight.classList.add("aj-light-purple");

    let state11 = Flip.getState(".eleven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eleven.classList.remove("aj-dark-purple");
    eleven.classList.add("aj-light-purple");

    twelve.style.opacity = 0;
    twelve.innerHTML = clutch1000;
    let state12 = Flip.getState(".twelve", {
      props: "opacity,borderRadius,backgroundColor",
    });
    twelve.classList.remove("aj-medium-purple");
    twelve.classList.add("aj-dark-purple");
    twelve.style.opacity = 1;

    Flip.from(state1, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state2, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state3, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state4, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state6, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state7, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state8, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state11, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state12, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
  }

  function removeTempContentFromStageOne() {
    tempone.innerHTML = "";
    tempone.classList.remove("aj-light-purple");
    tempone.classList.add("aj-medium-purple");

    tempTwo.innerHTML = "";
    tempTwo.classList.remove("aj-medium-purple");
    tempTwo.classList.add("aj-dark-purple");

    tempthree.innerHTML = "";
    tempthree.classList.remove("aj-dark-purple");
    tempthree.classList.add("aj-light-purple");

    tempfour.innerHTML = "";
    tempfour.classList.remove("aj-medium-purple");
    tempfour.classList.add("aj-dark-purple");

    tempsix.innerHTML = "";
    tempsix.classList.remove("aj-dark-purple");
    tempsix.classList.add("aj-light-purple");
    tempsix.style.borderRadius = "0px 0px 0px 32px";

    tempseven.innerHTML = "";
    tempseven.classList.remove("aj-light-purple");
    tempseven.classList.add("aj-dark-purple");

    tempeight.innerHTML = "";
    tempeight.classList.remove("aj-dark-purple");
    tempeight.classList.add("aj-light-purple");

    tempeleven.innerHTML = "";
    tempeleven.classList.remove("aj-dark-purple");
    tempeleven.classList.add("aj-light-purple");

    temptwelve.innerHTML = "";
    temptwelve.classList.remove("aj-medium-purple");
    temptwelve.classList.add("aj-dark-purple");
  }

  function stageTwo() {
    let state1 = Flip.getState(".one", {
      props: "opacity,borderRadius,backgroundColor",
    });
    one.innerHTML = clutchB2B;

    two.style.opacity = 0;
    let state2 = Flip.getState(".two", {
      props: "opacity,borderRadius,backgroundColor",
    });
    two.classList.remove("aj-dark-purple");
    two.classList.add("aj-light-purple");
    two.innerHTML = attractContent;
    two.style.opacity = 1;

    three.style.opacity = 0;
    three.style.gridRow = 2;
    three.classList.remove("aj-light-purple");
    three.classList.add("aj-medium-purple");
    tempthree.innerHTML = convertContent;
    three.innerHTML = clutchShopify;
    let state3 = Flip.getState(".three", {
      props: "opacity,borderRadius,backgroundColor",
    });
    three.style.opacity = 1;
    three.style.gridRow = 1;

    four.style.opacity = 0;
    four.innerHTML = growthContent;
    let state4 = Flip.getState(".four", {
      props: "opacity,borderRadius,backgroundColor",
    });
    four.style.opacity = 1;

    tempsix.classList.remove("aj-light-purple");
    tempsix.classList.add("aj-medium-purple");
    six.style.opacity = 0;
    let state6 = Flip.getState(".six", {
      props: "opacity,borderRadius,backgroundColor",
    });
    six.classList.remove("aj-light-purple");
    six.classList.add("aj-medium-purple");
    six.innerHTML = transformContent;
    six.style.opacity = 1;

    seven.style.opacity = 0;
    seven.innerHTML = convertContent;
    let state7 = Flip.getState(".seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    seven.style.opacity = 1;

    eight.style.opacity = 0;
    eight.innerHTML = clutch12;
    let state8 = Flip.getState(".eight", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eight.classList.remove("aj-light-purple");
    eight.classList.add("aj-medium-purple");
    eight.style.opacity = 1;

    eleven.style.opacity = 0;
    eleven.innerHTML = msImage;
    let state11 = Flip.getState(".eleven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eleven.style.opacity = 1;

    twelve.style.opacity = 0;
    twelve.innerHTML = strategyContent;
    let state12 = Flip.getState(".twelve", {
      props: "opacity,borderRadius,backgroundColor",
    });
    twelve.style.opacity = 1;

    Flip.from(state1, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state2, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state3, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state4, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state6, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state7, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state8, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state11, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state12, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
  }

  function removeTempContentFromStageTwo() {
    tempone.innerHTML = "";

    tempTwo.innerHTML = "";
    tempTwo.classList.remove("aj-dark-purple");
    tempTwo.classList.add("aj-light-purple");

    tempthree.innerHTML = "";
    tempthree.classList.remove("aj-light-purple");
    tempthree.classList.add("aj-medium-purple");

    tempfour.innerHTML = "";

    tempsix.innerHTML = "";

    tempseven.innerHTML = "";

    tempeight.innerHTML = "";
    tempeight.classList.remove("aj-light-purple");
    tempeight.classList.add("aj-medium-purple");

    tempeleven.innerHTML = "";
    tempeleven.classList.remove("aj-light-purple");
    tempeleven.classList.add("aj-dark-purple");

    temptwelve.innerHTML = "";
  }

  function stageThree() {
    one.innerHTML = crowd1;
    let state1 = Flip.getState(".one", {
      props: "opacity,borderRadius,backgroundColor",
    });
    one.classList.remove("aj-medium-purple");
    one.classList.add("aj-dark-purple");

    two.classList.remove("aj-light-purple");
    two.style.gridRow = 2;
    two.innerHTML = transformContent;
    let state2 = Flip.getState(".two", {
      props: "opacity,borderRadius,backgroundColor",
    });
    two.style.gridRow = 1;
    two.classList.add("aj-medium-purple");

    three.style.opacity = 0;
    three.innerHTML = crowdTop3;
    let state3 = Flip.getState(".three", {
      props: "opacity,borderRadius,backgroundColor",
    });
    three.classList.remove("aj-medium-purple");
    three.classList.add("aj-dark-purple");
    three.style.opacity = 1;

    four.classList.remove("aj-dark-purple");
    four.classList.add("aj-medium-purple");
    four.style.gridRow = 3;
    four.innerHTML = strategyContent;
    let state4 = Flip.getState(".four", {
      props: "opacity,borderRadius,backgroundColor",
    });
    four.style.gridRow = 1;
    let tempState4 = Flip.getState(".temp-four", {
      props: "opacity,borderRadius,backgroundColor",
    });
    tempfour.classList.remove("aj-dark-purple");
    tempfour.classList.add("aj-medium-purple");

    six.style.opacity = 0;
    six.innerHTML = crowdTop10;
    let state6 = Flip.getState(".six", {
      props: "opacity,borderRadius,backgroundColor",
    });
    six.classList.remove("aj-medium-purple");
    six.classList.add("aj-dark-purple");
    six.style.opacity = 1;

    seven.classList.remove("aj-dark-purple");
    seven.classList.add("aj-medium-purple");
    seven.style.gridRow = 1;
    seven.style.gridColumn = 2;
    seven.innerHTML = attractContent;
    let state7 = Flip.getState(".seven", {
      props: "opacity,borderRadius,backgroundColor",
    });

    seven.style.gridRow = 2;
    seven.style.gridColumn = 3;
    let tempState7 = Flip.getState(".temp-seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    tempseven.classList.remove("aj-dark-purple");
    tempseven.classList.add("aj-medium-purple");
    eight.style.gridColumn = 3;
    eight.style.gridRow = 3;
    eight.classList.remove("aj-medium-purple");
    eight.classList.add("aj-light-purple");
    eight.innerHTML = msImage;
    let state8 = Flip.getState(".eight", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eight.style.gridColumn = 4;
    eight.style.gridRow = 2;
    let tempState8 = Flip.getState(".temp-eight", {
      props: "opacity,borderRadius,backgroundColor",
    });
    tempeight.classList.remove("aj-medium-purple");
    tempeight.classList.add("aj-light-purple");

    eleven.style.opacity = 0;
    eleven.innerHTML = clutch1000;
    let state11 = Flip.getState(".eleven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eleven.classList.remove("aj-light-purple");
    eleven.classList.add("aj-dark-purple");
    eleven.style.opacity = 1;

    twelve.classList.remove("aj-dark-purple");
    twelve.classList.add("aj-medium-purple");
    twelve.style.gridRow = 1;
    twelve.innerHTML = growthContent;
    let state12 = Flip.getState(".twelve", {
      props: "opacity,borderRadius,backgroundColor",
    });
    twelve.style.gridRow = 3;
    let tempState12 = Flip.getState(".temp-twelve", {
      props: "opacity,borderRadius,backgroundColor",
    });
    temptwelve.classList.remove("aj-dark-purple");
    temptwelve.classList.add("aj-medium-purple");

    Flip.from(state1, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state2, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state3, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state4, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState4, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state6, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state7, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState7, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state8, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState8, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state11, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state12, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState12, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
  }

  function removeTempContentFromStageThree() {
    tempone.innerHTML = "";
    tempone.classList.remove("aj-medium-purple");
    tempone.classList.add("aj-dark-purple");

    tempTwo.innerHTML = "";
    two.classList.add("aj-light-purple");

    tempthree.innerHTML = "";
    tempthree.classList.remove("aj-medium-purple");
    tempthree.classList.add("aj-dark-purple");

    tempfour.innerHTML = "";
    tempfour.classList.add("aj-medium-purple");

    tempsix.innerHTML = "";
    tempsix.classList.remove("aj-medium-purple");
    tempsix.classList.add("aj-dark-purple");

    tempseven.innerHTML = "";
    seven.classList.add("aj-medium-purple");

    tempeight.innerHTML = "";
    eight.classList.add("aj-light-purple");

    tempeleven.innerHTML = "";
    tempeleven.classList.remove("aj-light-purple");
    tempeleven.classList.add("aj-dark-purple");

    temptwelve.innerHTML = "";
    twelve.classList.add("aj-medium-purple");
  }

  function stageFour() {
    one.innerHTML = transformContent;
    let state1 = Flip.getState(".one", {
      props: "opacity,borderRadius,backgroundColor",
    });
    one.classList.remove("aj-dark-purple");
    one.classList.add("aj-light-purple");
    two.style.opacity = 0;
    two.innerHTML = clutchB2B;
    let state2 = Flip.getState(".two", {
      props: "opacity,borderRadius,backgroundColor",
    });
    two.classList.remove("aj-light-purple");
    two.classList.add("aj-medium-purple");
    two.style.opacity = 1;

    three.style.opacity = 0;
    three.style.gridColumn = 2;
    three.style.gridRow = 2;
    three.innerHTML = convertContent;
    let state3 = Flip.getState(".three", {
      props: "opacity,borderRadius,backgroundColor",
    });
    three.style.gridColumn = 3;
    three.style.gridRow = 1;
    three.style.opacity = 1;

    four.style.opacity = 0;
    four.innerHTML = clutchShopify;
    four.style.gridColumn = 3;
    let state4 = Flip.getState(".four", {
      props: "opacity,borderRadius,backgroundColor",
    });
    four.style.gridColumn = 4;
    four.style.opacity = 1;
    four.classList.add("aj-light-purple");

    six.style.gridColumn = 1;
    six.style.gridRow = 1;
    six.innerHTML = attractContent;
    let state6 = Flip.getState(".six", {
      props: "opacity,borderRadius,backgroundColor",
    });
    six.style.gridColumn = 2;
    six.style.gridRow = 2;
    seven.style.opacity = 0;
    seven.classList.remove("aj-medium-purple");
    seven.innerHTML = msImage;
    seven.style.gridColumn = 4;
    let state7 = Flip.getState(".seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    seven.style.gridColumn = 3;
    seven.style.opacity = 1;
    seven.classList.add("aj-light-purple");

    let tempState7 = Flip.getState(".temp-seven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    tempseven.classList.remove("aj-medium-purple");
    tempseven.classList.add("aj-light-purple");

    eight.style.opacity = 0;
    eight.innerHTML = growthContent;
    let state8 = Flip.getState(".eight", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eight.classList.remove("aj-light-purple");
    eight.classList.add("aj-dark-purple");
    eight.style.opacity = 1;

    eleven.style.opacity = 0;
    eleven.innerHTML = strategyContent;
    let state11 = Flip.getState(".eleven", {
      props: "opacity,borderRadius,backgroundColor",
    });
    eleven.style.opacity = 1;

    twelve.style.opacity = 0;
    twelve.innerHTML = clutch12;
    let state12 = Flip.getState(".twelve", {
      props: "opacity,borderRadius,backgroundColor",
    });
    twelve.style.opacity = 1;
    twelve.classList.add("aj-medium-purple");

    Flip.from(state1, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state2, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state3, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state4, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state6, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(state7, {
      absolute: true,
      duration: oneChangeTime,
      zIndex: 10,
      ease: "power2.inOut",
    });
    Flip.from(tempState7, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state8, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state11, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
    Flip.from(state12, {
      absolute: true,
      duration: oneChangeTime,
      ease: "power2.inOut",
    });
  }

  assignContentForStageOne();

  function fullBannerAnimation() {
    setTimeout(() => {
      stageOne();
    }, 3500);

    setTimeout(() => {
      removeTempContentFromStageOne();
      stageTwo();
    }, 6000);

    setTimeout(() => {
      removeTempContentFromStageTwo();
      stageThree();
    }, 8000);

    setTimeout(() => {
      removeTempContentFromStageThree();
      stageFour();
    }, 10000);
  }

  if (kiHomeBannerAnimation) {
    fullBannerAnimation();

    setInterval(() => {
      fullBannerAnimation();
    }, 12000);
  }
});
