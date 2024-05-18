function transition() {
    var tl = gsap.timeline()

    tl.to('.transition', {
        top: '-100%',
        delay: .3,
        duration: 1.4,
        ease: 'expo.out',
    })
    tl.to('.transition', {
        delay: 1.4,
        display: 'none',
        opacity: 0
    },)
}

export default transition();