import animateMenu from './menu.js'
import animateScroll from './scrollWork.js'
import transition from './transition.js'

gsap.registerPlugin(ScrollTrigger);
let lenis;

const initLenis = () => {
    lenis = new Lenis({
        smoothWheel: true,
        smoothTouch: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    lenis.scrollTo(0, { immediate: true });
}

window.onload = () => {
    initLenis();
    animateMenu();
    animateScroll()
    transition();
}