const info = document.getElementById('info');
const userPlay = info.firstElementChild.children[0];
const computerPlay = userPlay.parentElement.nextElementSibling.children[0];
const roundResult = info.querySelectorAll('.output')[2];
const userScore = info.querySelectorAll('.output')[3].firstElementChild;
const computerScore = info.querySelectorAll('.output')[3].lastElementChild;
const gameResult = info.lastElementChild;
const figures = ['rock', 'paper', 'scissors'];
const score = {user: 0, computer: 0};

function getComputerChoice() {
	let random = figures[Math.floor(Math.random() * figures.length)]
	return random
}

function playRound(computerSelection, userSelection) {
	if (userSelection === figures[0] && computerSelection === figures[2] ||
			userSelection === figures[2] && computerSelection === figures[1] ||
			userSelection === figures[1] && computerSelection === figures[0]) {
			score.user++
			return 'You win a round!';
		} else if (userSelection === figures[0] && computerSelection === figures[1] ||
							 userSelection === figures[2] && computerSelection === figures[0] ||
							 userSelection === figures[1] && computerSelection === figures[2]) {
			score.computer++
			return 'You lose a round!';
		} else {
			return 'It\'s a tie round!';
		}
}

function clickButton(event) {
	let userSelection = '';
	const computerSelection = getComputerChoice();
	
	userSelection = event.toLowerCase();
	userPlay.innerText = userSelection.toLowerCase();
	computerPlay.innerText = computerSelection;
	roundResult.innerText = playRound(computerSelection, userSelection);
	userScore.innerText = score.user;
	computerScore.innerText = score.computer;

	if (userScore.innerText >= 5 && computerScore.innerText < 5) {
		gameResult.innerText = 'Congratulations, You win!';
	} else if (userScore.innerText <5 && computerScore.innerText >= 5) {
		gameResult.innerText = 'Unfortunately, You lost!'
	}
}
