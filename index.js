function getComputerChoise() {
	const choise = ['Rock', 'Paper', 'Scissors']
	const random = choise[Math.floor(Math.random() * choise.length)]
	return random
}
