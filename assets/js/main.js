let MenuOpen = false

function toggleAnimation() {
    const menuBtn = document.querySelector('.menu-bars')
    const Menu = document.querySelector('.menu-nav')
    const backgroundMenu = document.querySelector('.fundo_menu')
    
    if(MenuOpen === false){
        menuBtn.classList.add('open')
        Menu.classList.add('isOpen')
        backgroundMenu.classList.add('menu-ativo')
        MenuOpen = true
    } else{
        menuBtn.classList.remove('open')
        Menu.classList.remove('isOpen')
        backgroundMenu.classList.remove('menu-ativo')
        MenuOpen = false
    }
}
