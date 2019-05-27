
import _ from 'lodash';

document.addEventListener("DOMContentLoaded", () => {
    window.player = createCard();
    window.cpu = createCard();
    window.bolasJuego = createCard(90);
    window.board = document.querySelector('.board');

    fillCard(player);
    var ball = document.createElement('div');
    ball.className = 'ball';
    board.appendChild(ball);
    var button = document.createElement('button');
    button.className = 'button';
    button.textContent = "Sacar bola";
    board.appendChild(button);
    fillCard(cpu);

    document.querySelector('.button').addEventListener('click', () => {
        takeBall();
    });
    console.log(player.length);
    console.log(cpu.length);
});

function createCard(i = 15) {
    let values = _.range(0, 90);
    let ranNums = [];
    let j = 0;

    while (ranNums.length < i) {
         j = ~~(Math.random() * (values.length));
        if (ranNums.indexOf(values[j]) < 0) {
            ranNums.push(values[j])
        }
    }
    return ranNums;
}

function fillCard(player) {
    board = document.querySelector('.board');
    var div = document.createElement('div');
    div.className = 'card';
    board.appendChild(div);

    player.forEach(element => {
        var number = document.createElement('div');
        number.className = `number number${element}`;
        number.textContent = element;
        div.appendChild(number);
    });

}

function bingo(player, cpu) {

    if (player.length == 0) {
        document.querySelector('.ball').remove();
        document.querySelector('.button').remove();
        alert('Eres un mostro');
        return true;
        
    }
    if (cpu.length == 0) {
        document.querySelector('.ball').remove();
        document.querySelector('.button').remove();
        alert('Pa tu casa');
        return true;
    }
    else return false;
}

function takeBall() {
    console.log("Sacando bola");
    let element = bolasJuego.pop();
    document.querySelector('.ball').innerHTML = element;
    if (player.indexOf(element) >= 0) {
        player.splice(player.indexOf(element), 1);
        var num = document.querySelector(`.number${element}`);
        num.classList.add('marked');
    }
    if (cpu.indexOf(element) >= 0) {
        cpu.splice(cpu.indexOf(element), 1);
        var num = document.querySelector(`.number${element}`);
        num.classList.add('marked');
    }
    console.log(player.length);
    console.log(cpu.length);
    if (bingo(player, cpu)) {
        var board = document.querySelector('.board');
        var end = document.createElement('h1');
        end.textContent = "Fin del juego";
        board.appendChild(end);
        console.log("Fin del juego");
    }
}