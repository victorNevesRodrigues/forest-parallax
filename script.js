const text = document.getElementById('text')
const bird1 = document.getElementById('bird1')
const bird2 = document.getElementById('bird2')
const forest = document.getElementById('forest')
const rocks = document.getElementById('rocks')
const water = document.getElementById('water')
const button = document.getElementById('button')
const header = document.getElementById('header')
const toggleButton = document.getElementById('toggleButton')
const nav = document.getElementsByTagName('ul')[0]


function parallax (){
    const value = window.scrollY
    const width = window.innerWidth
    if (width > 798) {
    text.style.top = 50 + value * -0.1 + '%'
    bird1.style.top = value * -1.5 + 'px'
    bird2.style.left = value * -1 + 'px'
    button.style.marginTop = value * 2 + 'px'
    rocks.style.top = value * -0.12 + 'px'
    forest.style.top = value * 0.25 + 'px'
    header.style.top = value * 0.5 + 'px'
    } else if (width <= 798) {
    text.style.top = 50 + value * -0.1 + '%'
    bird2.style.top = value * 1 + 'px'
    bird2.style.left = value * -1 + 'px'
    button.style.marginTop = value * 2 + 'px'
    rocks.style.top = value * -0.12 + 'px'
    forest.style.top = value * 0.25 + 'px'
    header.style.top = value * 0.5 + 'px'
    } 
}

function toggle () {
    toggleButton.classList.toggle('buttonActive')
    nav.classList.toggle('active')
}

window.addEventListener('scroll', parallax)
toggleButton.addEventListener('click', toggle)