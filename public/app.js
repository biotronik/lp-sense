// Scroll Magic Controller & GSAP TimelineMax Initialization
let controller = new ScrollMagic.Controller();

// Hero Entry Animation
let tl1 = new TimelineMax();
tl1
  .from(
    "#hero-background-image",
    1.5,
    {
      opacity: 0,
      ease: Power3.easeInOut
    },
    1
  )
  .from(
    "#headline-1",
    1,
    {
      ease: Power4.easeOut,
      x: -15,
      opacity: 0
    },
    "=-1"
  )
  .from(
    "#headline-2",
    1,
    {
      ease: Power4.easeOut,
      x: -15,
      opacity: 0
    },
    "=-.8"
  )
  .from(
    "#cta-button",
    1,
    {
      ease: Power4.easeOut,
      x: -15,
      opacity: 0
    },
    "=-.8"
  );

// Bobby Animation
let tl2 = new TimelineMax();
tl2.from("#image", 0.5, { opacity: 0, scale: 0 });
let scene1 = new ScrollMagic.Scene({
  triggerElement: "#bobby",
  triggerHook: 0.5,
  offset: 0,
  duration: 300
})
  .setTween(tl2)
  // .addIndicators()
  .addTo(controller);
