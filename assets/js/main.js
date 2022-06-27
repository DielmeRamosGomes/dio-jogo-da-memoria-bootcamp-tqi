const CARDS = document.querySelectorAll('.card');
let hasFlipCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() 
{
    if (lockBoard) return;

    this.classList.add('flip');
    if (!hasFlipCard)
    {
        hasFlipCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlipCard = false;
    checkForMath();
}

function checkForMath()
{
    if (firstCard.dataset.card === secondCard.dataset.card)
    {
        disableCards();
        return;    
    }    
    unFlipCards();
}

function disableCards()
{
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unFlipCards() 
{
    lockBoard = true;

    setTimeout(() => 
    {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard()
{
    [hasFlipCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle()
{
    CARDS.forEach((card) => 
    {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    })  
})();


CARDS.forEach((card) => 
{
    card.addEventListener('click', flipCard)
})













