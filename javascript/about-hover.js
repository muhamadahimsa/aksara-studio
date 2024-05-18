const aboutHover = function() {
    const menu = document.querySelector('nav');
    const links = [...document.querySelectorAll('.about-row-media-info p, .bottom span')];

    const randomLetters = 'qwertyuiopasdfghjklzxcvbnm'.split('');

    class Link {
        constructor(el, idx){
            this.el = el;
            this.idx = idx;
            this.originalString = el.innerText;
            this.randomString = this.el.innerText.split('');
            this.frame = 0;
            this.addHoverEvent();
        }

        addHoverEvent(){
            this.el.addEventListener('mouseenter', () => {
                this.animate()
            })
            this.el.addEventListener('mouseleave', () => {
                this.frame = 0;
            })
        }

        animate(){
            if(this.frame < 30){
                if(this.frame % 3 == 0){
                    for(let i = 0; i < this.randomString.length; i++){
                        this.randomString[i] = randomLetters[Math.floor(Math.random() * randomLetters.length)]
                    }
                    this.el.innerText = this.randomString.join('');
                }
                this.frame++
                requestAnimationFrame(this.animate.bind(this));
            }else{
                this.el.innerText = this.originalString
            }
        }
    }

    links.forEach((link, idx) => {
        new Link(link, idx)
    })
}

export default aboutHover();