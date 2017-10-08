/*eslint indent: "error"*/

/*
 Add and subtract number of uses.
*/
import { questions } from './questions';
const plusMinusNumberOfPlayers = () => {
	const valueElement = document.querySelector('.input-number') as HTMLInputElement;
	let value = Number(valueElement.value);
	const plusButtonElement = document.querySelector('.plusBtn') as HTMLButtonElement;
	const minusButtonElement = document.querySelector('.minusBtn') as HTMLButtonElement;

	plusButtonElement.addEventListener('click', () => {
		value++;
		valueElement.setAttribute('value', value.toString());
	}, false);

	minusButtonElement.addEventListener('click', () => {
		value--;
		valueElement.setAttribute('value', value.toString());
	}, false);
};

const continueToNameEntry = (value) => {
	if (!value) {
		return null;
	}

	const containerDiv = document.querySelector('.container .row');
	const listOfPlayers = document.createElement('div');
	listOfPlayers.className = 'col-lg-12 text-center listOfPlayers';
	const playerList = document.createElement('div');
	const title = document.createElement('h2');
	title.innerText = 'Enter the player names below';
	playerList.appendChild(title);
	playerList.className = 'list-group';
	containerDiv.appendChild(listOfPlayers);
	listOfPlayers.appendChild(playerList);
	const playButton = document.createElement('button');
	playButton.className = 'btn btn-primary btn-lg';
	playButton.type = 'button';
	playButton.innerText = 'Play!';
	playerList.appendChild(playButton);

	playButton.addEventListener('click', () => {
		startTheActualGame();
	}, false);

	for (let i = 0; i < value; i++) {
		const players = document.createElement('li');
		players.className = 'list-group-item player';
		playerList.appendChild(players);
		const divInput = document.createElement('div');
		divInput.className = 'input-group';
		const span = document.createElement('span');
		span.className = 'input-group-addon';
		span.innerText = '>';
		divInput.appendChild(span);
		const input = document.createElement('input');
		input.className = 'form-control';
		input.type = 'text';
		divInput.appendChild(input);
		players.appendChild(divInput);
	}

	const howManyPlayersElement = document.querySelector('.playerNumbers') as HTMLElement;
	howManyPlayersElement.style.display = 'none';

};

const startTheActualGame = () => {
	const listOfPlayersElement = document.querySelector('.listOfPlayers') as HTMLElement;
	listOfPlayersElement.style.display = 'none';
	const listOfPlayers = document.getElementsByClassName('player');
	const players = [];
	[].forEach.call(listOfPlayers, (item) => {
		players.push(item.querySelector('input').value);
	});

	const numberOfPlayers = players.length;
	const numberOfRounds = 20; // TODO:: Add a game length and let people choose.
	const lastPlayer = players[0];

	nextQuestion(players, lastPlayer);

};

const nextQuestion = (players, lastPlayer) => {
	const numberOfQuestions = questions.length;
	const currentQuestion = questions[Math.floor(Math.random() * numberOfQuestions)];

	const cardElement = document.createElement('div') as HTMLElement;
	cardElement.className = 'col-lg-12 text-center card';
	cardElement.innerHTML = `
	<div class="card-block">
	<h4 class="card-title">${currentQuestion.question}</h4>
	<hr>
	<p class="card-text">Time Limit: ${currentQuestion['time-limit']}</p>
	<p class="card-text"> Points: ${currentQuestion.points} </p>
	<p class="card-text"> Category: ${currentQuestion.category}</p>
	<hr>
  </div>
	`;

	const containerRowElement = document.querySelector('.container .row') as HTMLElement;
	containerRowElement.appendChild(cardElement);
};

export {
	plusMinusNumberOfPlayers,
	continueToNameEntry
};
