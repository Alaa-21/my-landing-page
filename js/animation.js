gsap.registerPlugin(ScrollTrigger)

gsap.from('nav', {opacity: 0, duration: 1, x: -100});
gsap.from('.anim1', {opacity: 0, duration: 1, x: -500, stagger: .2});
gsap.from('.anim-robot', {opacity: 0, duration: 1, x: 500, stagger: .2});
gsap.from('.company', {
    scrollTrigger: {
        trigger: '.company'
    },
    opacity: 0,
    duration: 2, 
    x: -100, 
    delay: 1.3,
    ease: 'elastic(1, .1)', 
    stagger: .3
});
gsap.from('.anim-star', {
    scrollTrigger: {
        trigger: '.anim-star'
    },
    opacity: 0,
    duration: 1,
    y: 300,
    ease: Sine.easeInOut,
    delay: .4

});
gsap.from('.first-paragraph',{
    scrollTrigger: {
        trigger: '.first-paragraph'
    },
    opacity: 0,
    duration: 1,
    x: 100,
    ease: Power1.easeOut,
    delay: .4
    
})
gsap.from('.single-service',{
    scrollTrigger: {
        trigger: '.single-service',
    },
    opacity: 0,
    duration: 2,
    y: 100,
    ease: Power1.easeOut,
    stagger: .3,

    delay: .4

});
gsap.from('.right-chart-side',{
    scrollTrigger: {
        trigger: '.right-chart-side'
    },
    opacity: 0,
    duration: 2,
    x: -400,
    ease: Power1.easeOut,
    delay: .4
});
gsap.from('.chart-img',{
    scrollTrigger: {
        trigger: '.chart-img'
    },
    opacity: 0,
    duration: 2,
    x: 400,
    ease: Power1.easeOut,
    delay: .4
});
gsap.from('.intro-section',{
    scrollTrigger: {
        trigger: '.intro-section'
    },
    opacity: 0,
    duration: 2,
    y: 100,
    ease: Power1.easeOut
})
gsap.from('.number',{
    scrollTrigger: {
        trigger: '.numbers'
    },
    opacity: 0,
    duration: 2,
    y: 100,
    stagger: .4,
    ease: Power1.easeOut
})
gsap.from('.projects-intro',{
    scrollTrigger: {
        trigger: '.projects-intro'
    },
    opacity: 0,
    duration: 2,
    y: 100,
    ease: Power1.easeOut
})
gsap.from('.card-text',{
    scrollTrigger: {
        trigger: '.card-text'
    },
    opacity: 0,
    duration: 2,
    delay: .5,
    x: -200,
    ease: Power1.easeOut
})
gsap.from('.card-section',{
    scrollTrigger: {
        trigger: '.card-section'
    },
    opacity: 0,
    duration: 2,
    delay: .5,
    x: 200,
    ease: Power1.easeOut
})
gsap.from('.people-projects-container',{
    scrollTrigger: {
        trigger: '.people-projects-container'
    },
    opacity: 0,
    duration: 2,
    delay: .5,
    x: -200,
    ease: Power1.easeOut
})
gsap.from('.info',{
    scrollTrigger: {
        trigger: '.info'
    },
    opacity: 0,
    duration: 2,
    delay: .5,
    x: 200,
    ease: Power1.easeOut
})
gsap.from('.feature',{
    scrollTrigger: {
        trigger: '.feature'
    },
    opacity: 0,
    duration: 2,
    delay: 1,
    x: 200,
    ease: Power1.easeOut
})
gsap.from('.form-background',{
    scrollTrigger: {
        trigger: '.form-background'
    },
    opacity: 0,
    duration: 2,
    delay: .4,
    x: -200,
    ease: Power1.easeOut
})
gsap.from('.form',{
    scrollTrigger: {
        trigger: '.form'
    },
    opacity: 0,
    duration: 2,
    delay: .6,
    x: 200,
    ease: Power1.easeOut
})
gsap.from('footer',{
    scrollTrigger: {
        trigger: 'footer'
    },
    opacity: 0,
    duration: 2,
    delay: .2,
    y: 200,
    ease: Power1.easeOut
})
