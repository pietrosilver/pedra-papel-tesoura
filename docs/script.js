const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const texto = document.getElementById('resultado-texto');
const container = document.querySelector(".container");
const escolha = [pedra, papel, tesoura];
const recomeçar = `<button onclick = "location.reload()" id="recomece">Recomeçar</button`;

let jogadorScore = 0;
let computadorScore = 0;

const jogadorScoreTexto = document.getElementById('jogador-valor');
const computadorScoreTexto = document.getElementById('computador-valor');

jogadorScoreTexto.innerText = jogadorScore;
computadorScoreTexto.innerText = computadorScore;
texto.innerText = 'Pedra, papel ou tesoura?..';


function gerarResultado() {
    const resultado = Math.floor(Math.random(0)* escolha.length);
    console.log(resultado);
    return resultado;

}
function Pedra() {
if(gerarResultado() === 2) {
    texto.innerText = 'você escolheu pedra e o computador tesoura, você venceu!!';
    jogadorScore++;
    jogadorScoreTexto.innerText = jogadorScore;

}
else if(gerarResultado()=== 1) {
 texto.innerText = 'você escolheu pedra e o computador papel, você perdeu!!';
    computadorScore++;
    computadorScoreTexto.innerText = computadorScore;

}else {
     texto.innerText = 'você escolheu pedra e o computador também, empate';
}
}

function Papel() {
if(gerarResultado() === 0) {
    texto.innerText = 'você escolheu papel e o computador pedra, você venceu!!';
    jogadorScore++;
    jogadorScoreTexto.innerText = jogadorScore;
}else if(gerarResultado()=== 1) {
 texto.innerText = 'você escolheu papel e o computador também, empate';

}else {
 texto.innerText = 'você escolheu papel e o computador tesoura, você perdeu!!';
    computadorScore++;
    computadorScoreTexto.innerText = computadorScore;
}
}

function Tesoura() {
if(gerarResultado() === 0) {
    texto.innerText = 'você escolheu tesoura e o computador pedra, você perdeu!!';
    computadorScore++;
    computadorScoreTexto.innerText = computadorScore;
}else if(gerarResultado()=== 1) {
 texto.innerText = 'você escolheu tesoura e o computador papel, você venceu!!';
jogadorScore++;
    jogadorScoreTexto.innerText = jogadorScore;
}else {
 texto.innerText = 'você escolheu tesoura e o computador também, empate';
}
}

function checarVitoria() {
    if(jogadorScore > 5) { 
       texto.innerText = 'Fim de jogo, você ganhou!!';
       pedra.style.display = 'none';
       papel.style.display = 'none';
       tesoura.style.display = 'none';      
       container.insertAdjacentHTML("beforeend", recomeçar);
} else if(computadorScore > 5) {
       texto.innerText = 'Fim de jogo, você perdeu..';
       pedra.style.display = 'none';
       papel.style.display = 'none';
       tesoura.style.display = 'none';
       container.insertAdjacentHTML("beforeend", recomeçar);
}
}

pedra.addEventListener("click", checarVitoria);
papel.addEventListener("click", checarVitoria);
tesoura.addEventListener("click", checarVitoria);