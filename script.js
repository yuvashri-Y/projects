const cardsArray = [
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'peacock',
        icon:'<i class="fa-solid fa-dove"></i>'
    },
    {
        name:'elephant',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'monkey',
        icon:'<i class="fa-solid fa-horse"></i>'
    },
        {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'peacock',
        icon:'<i class="fa-solid fa-dove"></i>'
    },
    {
        name:'elephant',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'monkey',
        icon:'<i class="fa-solid fa-horse"></i>'
    }
];
let flippedCards = [];
let matchedPairs =0;
shuffleCards();
let gameBoard = document.getElementById("game-board");
displayCards();


function shuffleCards(){
    for(i=cardsArray.length-1;i>=0;i--)
    {
        const randIndex = Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]];
    }
}

function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardback');
        card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click',flipCard);
    })
}
function flipCard(){
    if(flippedCards.length<2 && this.classList.contains('active')){
    let cardId = this.getAttribute('id');
    flippedCards.push(this);
    this.classList.remove('cardback');
    this.innerHTML = cardsArray[cardId].icon;
    if(flippedCards.length==2){
        setTimeout(checkMatch,1000);
    }
    }
}

function checkMatch(){
    const card1 = flippedCards[0].getAttribute('id');
    const card2=flippedCards[1].getAttribute('id');
    if(cardsArray[card1].name === cardsArray[card2].name){
        flippedCards[0].style.border = 'none';
        flippedCards[0].style.background = '#ffe4c4';
        flippedCards[0].innerHTML = '';
        flippedCards[0].classList.remove('active');
        flippedCards[1].style.border = 'none';
        flippedCards[1].style.background = '#ffe4c4';
        flippedCards[1].innerHTML = '';
        flippedCards[1].classList.remove('active');
        matchedPairs++;
        checkGameOver();
    }
    else{
        flippedCards[0].innerHTML='';
        flippedCards[0].classList.add('cardback');
        flippedCards[1].innerHTML='';
        flippedCards[1].classList.add('cardback');
    }
    flippedCards=[];
}
function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML = 'You Won !';
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');
    }
}