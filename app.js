const p1button = document.querySelector('#p1button')
const p2button = document.querySelector('#p2button')
const reset = document.querySelector('#reset');
const p1Score = document.querySelector('#p1Score')
const p2Score = document.querySelector('#p2Score')
const selectScore = document.querySelector('#selectScore');

let p1S = 0;
let p2S = 0;
let winningScore = 3;
let isGameOver = false;
p1button.addEventListener('click', function(){
    if(!isGameOver){
        p1S += 1;
    if(p1S === winningScore){
        p1Score.classList.add('has-text-success');
        p2Score.classList.add('has-text-danger');
        p1button.disabled = true;
        p2button.disabled = true;
        isGameOver = true;
    }
        p1Score.textContent = p1S;
}
})

p2button.addEventListener('click', function(){
    if(!isGameOver){
        p2S+=1;
        if(p2S === winningScore){
            p1Score.classList.add('has-text-danger');
            p2Score.classList.add('has-text-success');
            p1button.disabled = true;
            p2button.disabled = true;
            isGameOver = true;
        }
        p2Score.textContent = p2S;
}
}) 

selectScore.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    zero();
})

function zero(){
    isGameOver = false;
    p1Score.classList.remove('has-text-success','has-text-danger');
    p2Score.classList.remove('has-text-success','has-text-danger');
    p1S = 0;
    p2S = 0;
    p1Score.textContent = p1S;
    p2Score.textContent = p2S;
    p1button.disabled = false;
    p2button.disabled = false;
}

reset.addEventListener('click',zero);