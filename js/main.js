const barraMenu = document.querySelector('.barra-de-menu');

barraMenu.addEventListener('click', menuPrincipal);


// FUNÇÕES
function menuPrincipal() {
    const menu = document.querySelector('.cabecalho__menu');
    menu.classList.toggle('abrirMenu');
};