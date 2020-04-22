const flyingPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 0, y: -120 },

        { x: 100, y: 20 },
        { x: 300, y: 110 },
        { x: 500, y: 200 },
        { x: 750, y: 500 },
        { x: 950, y: 400 },

        { x: window.innerWidth, y: 300 }
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".plane", 1, {
        bezier: flyingPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".sec3",
    duration: 1700,
    triggerHook: 1
})
    .setTween(tween)
    .addTo(controller);
