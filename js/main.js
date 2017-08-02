
// note: array of card objects
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	];



// note: array of cards in play
var cardsInPlay = [];



// note: function to check for match
var checkForMatch = function() {
		if (cardsInPlay.length === 2) {
			if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
				alert("You found a match!"); 
			} else {
				alert("Sorry, try again.");
			}
		}
		
}


// note: function to flip a card
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId]);
	this.setAttribute('src', cards[cardId].cardImage);

	checkForMatch();
}


// note: function to create board
var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();






















