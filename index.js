const figures = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
	let random = figures[Math.floor(Math.random() * figures.length)]
	return random
}

function playRound(computerSelection, userSelection) {
	if (userSelection === figures[0] && computerSelection === figures[2] ||
			userSelection === figures[2] && computerSelection === figures[1] ||
			userSelection === figures[1] && computerSelection === figures[0]) {
			console.log(userSelection, computerSelection)
			return 'You Won!'
		} else if (userSelection === figures[0] && computerSelection === figures[1] ||
							 userSelection === figures[2] && computerSelection === figures[0] ||
							 userSelection === figures[1] && computerSelection === figures[2]) {
			console.log(userSelection, computerSelection)
			return 'You Lost!'
		} else {
			console.log(userSelection, computerSelection)
			return 'It\'s a Tie!'
		}

	return userSelection
}

function game() {
	for (let i = 1; i <= 5; i++) {
		const userSelection = prompt()
		const computerSelection = getComputerChoice()
		console.log(playRound(computerSelection,userSelection))
	}
	console.log('Finish!')
}

console.log(game())
