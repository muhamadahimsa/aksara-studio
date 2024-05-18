function hoverTeam() {
    const imgA = document.querySelector('.about-row-media-info')
    const fixed = document.querySelector('.team-img')
    imgA.addEventListener('mouseenter', function() {
        fixed.style.opacity = 1
    })
    imgA.addEventListener('mouseleave', function() {
        fixed.style.opacity = 1
    })

    const images = document.querySelectorAll('.media-info-left, .media-info-right');
    images.forEach(function(e){
        e.addEventListener('mouseenter', function() {
            const img = e.getAttribute('data-image')
            fixed.style.backgroundImage = `url(${img})`
        })
    })
}

export default hoverTeam();