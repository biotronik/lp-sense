const mainbody = document.querySelector("#mainBody");
const headerHeight = document.body.querySelector("#header").offsetHeight;

mainbody.style.paddingTop = headerHeight + "px";

function fixNav() {
  if (window.scrollY >= headerHeight) {
    document.body.classList.add("fixed-nav");
    document.body.querySelector("#navBar").classList.remove("items-center");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.querySelector("#navBar").classList.add("items-center");
  }
}
window.addEventListener("scroll", fixNav);

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

// Infographic Animation
let tl2 = new TimelineMax();
tl2
  .from("#dx-leads", 2, {
    opacity: 0,
    scaleY: 0,
    x: -100,
    ease: Power3.easeInOut
  })
  .from("#claim-1", 2, {
    opacity: 0,
    y: -20,
    ease: Power3.easeInOut
  })
  .from("#claim-2", 2, {
    opacity: 0,
    y: -20,
    ease: Power3.easeInOut
  })
  .from("#data-point-1", 1, {
    scale: 0,
    ease: Power3.easeInOut
  })
  .from("#data-point-2", 1, {
    scale: 0,
    ease: Power3.easeInOut
  })
  .from("#data-point-3", 1, {
    scale: 0,
    ease: Power3.easeInOut
  })
  .from("#data-point-4", 1, {
    opacity: 0,
    scaleX: 0,
    ease: Power3.easeInOut
  })
  .from(
    "#data-point-5",
    1,
    {
      opacity: 0,
      scaleX: 0,
      ease: Power3.easeInOut
    },
    "=-1"
  );

let scene1 = new ScrollMagic.Scene({
  triggerElement: "#infographic",
  triggerHook: 0,
  offset: 0,
  duration: 1500
})
  .setPin("#infographic")
  .setTween(tl2)
  // .addIndicators()
  .addTo(controller);

// Bobby Animation
// let tl2 = new TimelineMax();
// tl2.from("#image", 0.5, { opacity: 0, scale: 0 });
// let scene1 = new ScrollMagic.Scene({
//   triggerElement: "#bobby",
//   triggerHook: 0.5,
//   offset: 0,
//   duration: 300
// })
//   .setTween(tl2)
//   // .addIndicators()
//   .addTo(controller);
