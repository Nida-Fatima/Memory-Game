document.addEventListener('DOMContentLoaded', () => {

    //card options

    const cardArray = [

        {
            name:'fries',
            img: 'images/fries.png'
        },
        {
            name:'fries',
            img: 'images/fries.png'
        },
        {
            name:'burger',
            img: 'images/burger.png'
        },
        {
            name:'burger',
            img: 'images/burger.png'
        },
        {
            name:'cold-drink',
            img: 'images/cold-drink.png'
        },
        {
            name:'cold-drink',
            img: 'images/cold-drink.png'
        },
        {
            name:'mushrooms',
            img: 'images/mushrooms.png'
        },
        {
            name:'mushrooms',
            img: 'images/mushrooms.png'
        },
        {
            name:'sandwitch',
            img: 'images/sandwitch.png'
        },
        {
            name:'sandwitch',
            img: 'images/sandwitch.png'
        },
        {
            name:'pizza',
            img: 'images/pizza.png'
        },
        {
            name:'pizza',
            img: 'images/pizza.png'
        },
        {
            name:'wrap',
            img: 'images/wrap.png'
        },
        {
            name:'wrap',
            img: 'images/wrap.png'
        },
        {
            name:'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name:'hotdog',
            img: 'images/hotdog.png'
        },
       
    ]


    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    var cardChosen = []
    var cardChosenId = []
    var cardChosenId = []
    var cardsWon = []
    const resultDisplay = document.querySelector('#result');

    //create your board

    function createBoard(){
        for(let i = 0; i<cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    createBoard()

// check for matches

function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if(cardChosen[0] === cardChosen[1]){

        alert("you found a match");
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardChosen)
    }else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry, try again')
    }
    cardChosen = []
    cardChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations. You find them all'
    }
}

//flip your card

function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);

    if(cardChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }

}






})