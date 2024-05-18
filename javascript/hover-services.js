function hoverServices() {
    const imgA = document.querySelector('.about-row:nth-child(3) .about-row-item-text p')
    const fixed = document.querySelector('.service-img')
    imgA.addEventListener('mouseenter', function() {
        fixed.style.opacity = 1
    })
    imgA.addEventListener('mouseleave', function() {
        fixed.style.opacity = 1
    })

    const images = document.querySelectorAll('.about-row:nth-child(3) .about-row-item-text p');
    images.forEach(function(e){
        e.addEventListener('mouseenter', function() {
            const img = e.getAttribute('data-image')
            fixed.style.backgroundImage = `url(${img})`
        })
    })
}

export default hoverServices();