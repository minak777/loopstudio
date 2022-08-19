const menu = document.getElementById('menu')
const navlink = document.getElementById('navlink')
const navbar = document.getElementById('navbar')

menu.addEventListener('click',() => {
    navbar.classList.toggle('black')
    navlink.classList.toggle('active')
})