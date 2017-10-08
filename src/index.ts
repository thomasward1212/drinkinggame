/*eslint indent: "error"*/
import { continueToNameEntry, plusMinusNumberOfPlayers } from './utils/customFunctions';

document.addEventListener('DOMContentLoaded', (event) => {
	plusMinusNumberOfPlayers();
});

const startButton = document.querySelector('.startButton') as HTMLButtonElement;

startButton.addEventListener('click', () => {
	const valueElement = document.querySelector('.input-number') as HTMLInputElement;
	const value = Number(valueElement.value);
	continueToNameEntry(value);
}, false);
