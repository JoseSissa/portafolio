const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

hamburguer.addEventListener('click', ()=>{
    console.log(menuList.children.children);
    menu.classList.toggle('show');
    hamburguer.classList.toggle('toogle_open');
});

menuList.addEventListener('click', (e)=>{
    menu.classList.remove('show');
    hamburguer.classList.remove('toogle_open');
})