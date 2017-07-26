

// array of card objects
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

// array of cards in hand
var cardsInPlay = [];

// function to check for match
var checkForMatch = function() {
		if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
				alert("You found a match!"); 
			} else {
				alert("Sorry, try again.")
			}
		}
};

// function to flip a card

var flipCard = function(cardId) {

	console.log("User flipped " + cards[cardId].rank + ".");
	console.log("Suit =  " + cards[cardId].suit + ".");
	console.log("Image = " + cards[cardId].cardImage + ".");

	cardsInPlay.push(cards[cardId])

	checkForMatch();
};


flipCard(0);

flipCard(2);
