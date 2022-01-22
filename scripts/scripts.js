const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('show');
    hamburguer.classList.toggle('toogle_open');
});

menuList.addEventListener('click', (e)=>{
    menu.classList.toggle('show');
    hamburguer.classList.toggle('toogle_open');
})