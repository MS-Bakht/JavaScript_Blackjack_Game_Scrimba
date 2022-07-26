
let cardarray = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let gameEnd = false
let messageEl = document.getElementById("message-el")
let sumtxt = document.getElementById("displaySum")
let cardtxt = document.getElementById("displayCards")



function startGame(){
    if (isAlive === false || gameEnd === true)
    {
        hasBlackJack=false
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cardarray.push(firstCard)
        cardarray.push(secondCard)
        renderGame()
    }
}

function getRandomCard()
{
    let numb = Math.floor( Math.random()*13 ) + 1
    if (numb === 1) { numb = 11 }
    else if (numb >= 11 && numb <=13) {numb = 10}
    return numb
}

function renderGame() {
    cardtxt.textContent = "Cards: "+ cardarray
    sumtxt.textContent = "Sum: "+ sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
        sum = 0
        cardarray=[]
        gameEnd = true
        
    } else {
        message = "You're out of the game!"
        isAlive = false
        sum = 0
        cardarray=[]
    }
        messageEl.textContent = message
}

function newCard()
{
    if (isAlive === true && hasBlackJack === false ){
    let Ncard = getRandomCard()
    
    sum += Ncard 
    cardarray.push(Ncard)
    renderGame()

    }
}