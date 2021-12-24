"use-strict";
//animations

const animateDefault = gsap.timeline({
  defaults: { duration: 0.75, ease: "power1.out" },
});
gsap.to(".cookie-container", {
  rotation: 360,
  duration: 7.5,
  ease: "none",
  repeat: -1,
});
const button = document.querySelector(".btn-close");
const agree = document.querySelector(".btn");

const closeModel = (e) => {
  animateDefault.fromTo(
    ".cookie-container",
    { scale: 0 },
    { scale: 1, ease: "elastic.out(1,0.4)", duration: 0.4 }
  );
};

button.addEventListener("click", closeModel);
agree.addEventListener("click", closeModel);
