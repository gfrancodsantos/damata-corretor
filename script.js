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
/*
var balls = document.querySelector('.balls')
var quant = document.querySelectorAll('.slides .image')
var atual = 0
var imagem = document.getElementById('atual')
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')

for (let i = 2; i < quant.length; i++) {
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls div')

for (let i = 2; i< pos.length; i++) {
    pos[i].addEventListener('click', ()=> {
        atual = pos[i].id
        slide()
    })
}

voltar.addEventListener('click',()=>{
    atual--
    slide()
})

next.addEventListener('click',()=>{
    atual++
    slide()
})

function slide() {
    if (atual >= quant.length) {
        atual = 0
    }
    else if (atual < 0) {
        atual = quant.length - 1
    }
    document.querySelector('.imgAtual').classList.remove('.imgAtual')
    imagem.style.marginLeft = -1000*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(()=>{
    atual++
    slide()
},4000)
*/
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