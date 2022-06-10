const nav = document.getElementsByTagName("nav")[0];
const topoNav = nav.offsetTop;

window.onscroll = function () {
    fixarMenuNoTopo();
}

function fixarMenuNoTopo() {
    if (window.pageYOffset > topoNav) {
        nav.classList.add("FixoNoTopo");
    }
    else {
        nav.classList.remove("FixoNoTopo");
    }
}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type ==='touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }

}

btnMobile. addEventListener('click', toggleMenu);
btnMobile. addEventListener('touchstart', toggleMenu);