const listaDeTeclas = document.querySelectorAll('.tecla');

function tocarSom(idSelector){
    document.querySelector(idSelector).play();
}

for (let i = 0; i < listaDeTeclas.length; i++) {
    let teclas = listaDeTeclas[i].classList[1];
    teclas = `#som_${teclas}`;
    listaDeTeclas[i].onclick = function(){
        tocarSom(teclas);
    }

    listaDeTeclas[i].onkeydown = function (event){
        console.log(event);
        if(event.code === 'Enter' || event.code === 'Space')
        listaDeTeclas[i].classList.add('ativa');
    }

    listaDeTeclas[i].onkeyup = function (){
        listaDeTeclas[i].classList.remove('ativa');
    }
}
