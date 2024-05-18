const intro = () => {
    gsap.from('.col h2 div', 1.5, {
        yPercent: 100,
        ease: 'power4.inOut',
        stagger: {
            amount: 0.5,
        },
    });

    gsap.to('.col h2', 1.5, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        ease: 'power4.inOut',
        stagger: {
            amount: 0.5,
        },
    });

    document.addEventListener('DOMContentLoaded', function() {
        let overlay = document.querySelector('.overlay-intro');
        overlay.addEventListener('click', function() {
            gsap.to('.col h2 div', 1.5, {
                yPercent: -100,
                ease: 'power4.inout',
                stagger: {
                    amount: 0.5,
                },
            });

            gsap.to('.col h2', 1.5, {
                    clipPath: 'polygon(0 85%, 100% 85%, 100% 100%, 0 100%)',
                    ease: 'power4.inOut',
                    stagger: {
                        amount: 0.5,
                    },
                }, 
                0
            );

            gsap.to('.overlay-intro', 2, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                ease: 'power4.inOut',
            });

            gsap.to('.intro .img', 2, {
                clipPath: 'polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)',
                ease: 'power4.inOut',
                stagger: {
                    amount: 1.5,
                },
            });

            gsap.to('.intro', 2, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                ease: 'power4.inOut',
                delay: 2,
            });
        });
    });
}

export default intro();