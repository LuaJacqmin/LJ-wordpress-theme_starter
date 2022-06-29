//open and close menu on btn onclick
const menu_nav = document.querySelector('.menu__nav')
const menu_btn = document.querySelector('.menu__btn')

menu_btn.addEventListener('click', e => {
    menu_nav.classList.toggle('menu__nav--open')
})