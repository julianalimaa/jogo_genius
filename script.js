let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');


//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4 );
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
;}

//acende a próxima cor
let lightColor = (element, number) => {

    number = number * 500;

    setTimeout(() => {
        element.classList.add('selected');

        setTimeout(() => {
            element.classList.remove('selected');
        }, 300);
    }, number - 250);
}


//confere se os botões foram clicados na mesma ordem que as cores foram geradas
let checkOrder = () => {
    
    let isGameOver = false;
    

    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            isGameOver = true;
            break;
        }
    }

    if(isGameOver){
        return
    }

    if(clickedOrder.length == order.length){
        //alert(`Pontuação: ${score}\nVocê acertou!\nIniciando o próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
};


//0 - red 
//1 -blue 
//2 -yellow 
//3 - green

//função que retorna a cor

let createColorElement = (color) => {
    if(color == 0) {
        return red;
    } else if (color == 1){
        return blue;
    } else if (color == 2){
        return yellow;
    } else if ( color == 3){
        return green;
    }
}

//funcão para o próximo level do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    score--;
    order = [];
    clickedOrder = [];
    alert(`Pontuação final: ${score}.\n Tente novamente!`);
    red.onclick = null
    blue.onclick = null
    yellow.onclick = null
    green.onclick = null
    
}

//funcao para iniciar o jogo
let playgame = () => {
    alert('Bem-vindo ao Genius! \n Iniciando novo jogo!')
    score = 0;
    red.onclick = ()=> click(0)
    blue.onclick = ()=> click(1)
    yellow.onclick = ()=> click(2)
    green.onclick = ()=> click(3)
    nextLevel();
}

let reset = () => {
    order = [];
    clickedOrder = [];
    score = 0;
}







