const reset = document.querySelector('#reset');
const selectScore = document.querySelector('#selectScore');

const p1 = {
    score : 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1Score')
}

const p2 = {
    score : 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2Score')
}

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;

    if( player.score === winningScore){
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.disabled = true;
        opponent.button.disabled = true;
        isGameOver = true;
    }
        player.display.textContent = player.score;
    }
}

let winningScore = 3;
let isGameOver = false;

p1.button.addEventListener('click', function(){
    updateScores(p1,p2)
})

p2.button.addEventListener('click', function(){
    updateScores(p2,p1)
})

selectScore.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    zero();
})

function zero(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.display.classList.remove('has-text-success','has-text-danger');
        p.score = 0;
        p.display.textContent = p.score;
        p.button.disabled = false;
    }
}

reset.addEventListener('click',zero);