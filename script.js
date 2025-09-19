// script.js
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
    scrub: true
  });

  gsap.from(panel.querySelector("h1"), {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: panel,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray("section").forEach((panel) => {
ScrollTrigger.create({
trigger: panel,
start: "top top",
pin: true,
pinSpacing: false,
scrub: true
});


gsap.from(panel.querySelector(".app-preview"), {
opacity: 0,
y: 100,
duration: 1,
scrollTrigger: {
trigger: panel,
start: "top 80%",
toggleActions: "play none none reverse"
}
});
});