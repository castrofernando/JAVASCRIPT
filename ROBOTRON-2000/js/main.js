const control_buttons = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const control_image = document.querySelectorAll('[alterar]');

console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

control_buttons.forEach(button => {
    button.addEventListener('click', (evento) => {
        const operacao = evento.target.dataset.controle;
        manipularDados(operacao, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    });
});

function trocaImagem(cor){
const img_robo = document.querySelector('[foto-robo');
img_robo.src = "img/Robotron 2000 - "+ cor +"/Robotron 2000 - "+ cor +".png";
}

function atualizaEstatisticas(peca){
    //console.log(peca);
    //console.log(pecas[peca]);
    
    estatisticas.forEach(estatistica => {
       //console.log(estatistica.dataset.estatistica);
        estatistica.textContent = parseInt(estatistica.textContent) + parseInt(pecas[peca][estatistica.dataset.estatistica]);
    });
}

function manipularDados(operacao, node){
 const contador = node.querySelector('[data-contador]');

 if(operacao === '+'){
    contador.value = parseInt(contador.value)+1;
    contador.value = contador.value.toString().padStart(2,'0');
 }else{
    contador.value = parseInt(contador.value)-1;
    contador.value = contador.value.toString().padStart(2,'0');
 }
}