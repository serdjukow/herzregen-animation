function rain() {
    const heart = document.querySelector('.heart')
    const e = document.createElement('div')
    e.classList.add('drop')
    heart.appendChild(e)

    let left = Math.floor(Math.random() * 300)
    e.style.left = left + 'px'
    let duration = Math.random() * 0.5
    e.style.animationDuration = 1 + duration + 's'

    setTimeout(function() {
        heart.removeChild(e)
    }, 5000)
}

setInterval(function() {
    rain()
}, 50)