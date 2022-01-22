const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle('show');
    hamburguer.classList.toggle('toogle_open');
});