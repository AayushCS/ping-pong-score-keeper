const reset = document.querySelector('#reset');
const selectScore = document.querySelector('#selectScore');

window.addEventListener('DOMContentLoaded',()=>{
    const blockContainer = document.getElementById('blocks')
    const blockSize = 50;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const numCols = Math.ceil(screenWidth/blockSize);
    const numRows = Math.ceil(screenHeight/blockSize);
    const numBlocks = numCols * numRows;
    function createBlocks(){
        for(let i = 0; i < numBlocks; i ++ ){
            const block = document.createElement('div');
            block.classList.add('block');
            block.dataset.index = i;
            block.addEventListener('mousemove',highlightneighour);
            blockContainer.append(block);
        }
    }
    
    function highlightneighour(){
        const index = parseInt(this.dataset.index);
        const neighbours = [
            index - 1 , 
            index + 1 , 
            index - numCols,
            index + numCols,
            index - numCols - 1,
            index - numCols + 1,
            index + numCols - 1,
            index + numCols + 1
        ].filter(
            i => i >= 0 && i < numBlocks && Math.abs((i % numCols) - (index% numCols)) <= 1
        );
    
        this.classList.add('highlight');
        setTimeout(()=>{
            this.classList.remove('highlight');
        }, 500);
    
        shuffleArray(neighbours)
        .slice(0,1)
        .forEach((nIndex) => {
            const neighbour = blockContainer.children(nIndex);
            if(neighbour){ 
                neighbour.classList.add('highlight');
                setTimeout(() => {
                    neighbour.classList.remove('highlight')
                },500);
            }
        });
    }
    
    function shuffleArray(ar){
        for(let i = arr.length - 1; i > 0; i++){
            const j = Math.floor(Math.random() * (i+1));
            [arr[i],arr[j]] = [arr[j], arr[i]]
        }
        return arr;
    } 
    createBlocks();
})




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