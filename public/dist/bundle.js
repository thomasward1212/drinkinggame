/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*eslint indent: "error"*/
var customFunctions_1 = __webpack_require__(1);
document.addEventListener('DOMContentLoaded', function (event) {
    customFunctions_1.plusMinusNumberOfPlayers();
});
var startButton = document.querySelector('.startButton');
startButton.addEventListener('click', function () {
    var valueElement = document.querySelector('.input-number');
    var value = Number(valueElement.value);
    customFunctions_1.continueToNameEntry(value);
}, false);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*eslint indent: "error"*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
 Add and subtract number of uses.
*/
var questions_1 = __webpack_require__(2);
var plusMinusNumberOfPlayers = function () {
    var valueElement = document.querySelector('.input-number');
    var value = Number(valueElement.value);
    var plusButtonElement = document.querySelector('.plusBtn');
    var minusButtonElement = document.querySelector('.minusBtn');
    plusButtonElement.addEventListener('click', function () {
        value++;
        valueElement.setAttribute('value', value.toString());
    }, false);
    minusButtonElement.addEventListener('click', function () {
        value--;
        valueElement.setAttribute('value', value.toString());
    }, false);
};
exports.plusMinusNumberOfPlayers = plusMinusNumberOfPlayers;
var continueToNameEntry = function (value) {
    if (!value) {
        return null;
    }
    var containerDiv = document.querySelector('.container .row');
    var listOfPlayers = document.createElement('div');
    listOfPlayers.className = 'col-lg-12 text-center listOfPlayers';
    var playerList = document.createElement('div');
    var title = document.createElement('h2');
    title.innerText = 'Enter the player names below';
    playerList.appendChild(title);
    playerList.className = 'list-group';
    containerDiv.appendChild(listOfPlayers);
    listOfPlayers.appendChild(playerList);
    var playButton = document.createElement('button');
    playButton.className = 'btn btn-primary btn-lg';
    playButton.type = 'button';
    playButton.innerText = 'Play!';
    playerList.appendChild(playButton);
    playButton.addEventListener('click', function () {
        startTheActualGame();
    }, false);
    for (var i = 0; i < value; i++) {
        var players = document.createElement('li');
        players.className = 'list-group-item player';
        playerList.appendChild(players);
        var divInput = document.createElement('div');
        divInput.className = 'input-group';
        var span = document.createElement('span');
        span.className = 'input-group-addon';
        span.innerText = '>';
        divInput.appendChild(span);
        var input = document.createElement('input');
        input.className = 'form-control';
        input.type = 'text';
        divInput.appendChild(input);
        players.appendChild(divInput);
    }
    var howManyPlayersElement = document.querySelector('.playerNumbers');
    howManyPlayersElement.style.display = 'none';
};
exports.continueToNameEntry = continueToNameEntry;
var startTheActualGame = function () {
    var listOfPlayersElement = document.querySelector('.listOfPlayers');
    listOfPlayersElement.style.display = 'none';
    var listOfPlayers = document.getElementsByClassName('player');
    var players = [];
    [].forEach.call(listOfPlayers, function (item) {
        players.push(item.querySelector('input').value);
    });
    var numberOfPlayers = players.length;
    var numberOfRounds = 20; // TODO:: Add a game length and let people choose.
    var lastPlayer = players[0];
    nextQuestion(players, lastPlayer);
};
var nextQuestion = function (players, lastPlayer) {
    var numberOfQuestions = questions_1.questions.length;
    var currentQuestion = questions_1.questions[Math.floor(Math.random() * numberOfQuestions)];
    var pLeadElement = document.querySelector('p.lead');
    pLeadElement.innerText = lastPlayer + "! It's your turn";
    var existingCardElement = document.querySelector('.card');
    if (existingCardElement) {
        existingCardElement.innerHTML = "\n\t\t<div class=\"card-block\">\n\t\t<h4 class=\"card-title\">" + currentQuestion.question + "</h4>\n\t\t<hr>\n\t\t<p class=\"card-text\">Time Limit: " + currentQuestion['time-limit'] + "</p>\n\t\t<p class=\"card-text\"> Points: " + currentQuestion.points + " </p>\n\t\t<p class=\"card-text\"> Category: " + currentQuestion.category + "</p>\n\t  </div>\n\t\t";
    }
    else {
        var cardElement = document.createElement('div');
        cardElement.className = 'col-lg-12 text-center card';
        cardElement.innerHTML = "\n\t<div class=\"card-block\">\n\t<h4 class=\"card-title\">" + currentQuestion.question + "</h4>\n\t<hr>\n\t<p class=\"card-text\">Time Limit: " + currentQuestion['time-limit'] + "</p>\n\t<p class=\"card-text\"> Points: " + currentQuestion.points + " </p>\n\t<p class=\"card-text\"> Category: " + currentQuestion.category + "</p>\n  </div>\n\t";
        var passOrFailButtonsElement = document.createElement('div');
        passOrFailButtonsElement.className = 'col-lg-12 text-center passorfail';
        passOrFailButtonsElement.innerHTML =
            "</br>\n\t<button type=\"button\" class=\"btn btn-success passBtn\">Pass</button>\n\t<button type=\"button\" class=\"btn btn-danger failBtn\">Fail</button>";
        var containerRowElement = document.querySelector('.container .row');
        containerRowElement.appendChild(cardElement);
        containerRowElement.appendChild(passOrFailButtonsElement);
        var failBtn = document.querySelector('.failBtn');
        var passBtn = document.querySelector('.passBtn');
        failBtn.addEventListener('click', function () {
            var currentPlayersIndex = players.indexOf(lastPlayer);
            if (currentPlayersIndex === players.length - 1) {
                lastPlayer = players[0];
            }
            else {
                lastPlayer = players[currentPlayersIndex + 1]; // Last player is now the next person in the array.
            }
            failedQuestion(players, lastPlayer);
        }, false);
        passBtn.addEventListener('click', function () {
            var currentPlayersIndex = players.indexOf(lastPlayer);
            if (currentPlayersIndex === players.length - 1) {
                lastPlayer = players[0];
            }
            else {
                lastPlayer = players[currentPlayersIndex + 1]; // Last player is now the next person in the array.
            }
            completedQuestion(players, lastPlayer);
        }, false);
    }
};
exports.nextQuestion = nextQuestion;
var failedQuestion = function (players, lastPlayer) {
    nextQuestion(players, lastPlayer);
};
var completedQuestion = function (players, lastPlayer) {
    nextQuestion(players, lastPlayer);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var questions = [
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Down your drink',
        'time-limit': '10 Seconds'
    },
    {
        'category': 'Drink',
        'points': '2',
        'question': 'Have a shot.',
        'time-limit': '2 Minutes'
    },
    {
        'category': 'Drink',
        'points': '2',
        'question': 'Whoever has the weakest drink must down their drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Whoever has the weakest drink must down the strongest drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Whoever has the strongest drink gets to donate 2 fingers.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'The next person to ask a question takes 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Pick a category, go clockwise naming things from said category. Loser takes 3 sips',
        'time-limit': '10 seconds'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Whoever has the worst eyesight drinks.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Drink for each pet you own.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Drink for each letter in your first name.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'All virgins drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Play a game of 21, loser downs their drink.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Drink for every time you\'ve masturbated this week',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Play a game of 21, loser chooses someone to down their drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Drink for every sexual partner you\'ve had',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Drink if you think Rachel Riley is hot',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'The next person to make eye contact with you drinks half their drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'The next person to swear drinks 5 fingers',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'The next drinking effect is doubled',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'People who aren\'t wearing a watch drink.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Drink for each article of clothing you are wearing',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Drink if you haven\'t had a shower today',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Drink if you\'re currently enjoying the song',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'If someone is currently on their phone, take a shot.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Shot Roulette',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Take off 2 articles of clothing or take a shot',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Person to your left has 2 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Person to your right has 2 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Person to your right has 1 shot',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Person to your left has 1 shot',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Last one to touch the floor has 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Last person to touch you has 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Down your drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Person to your left has to down their drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Person to your right has to down their drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have an arm wrestle with the person opposite you, loser has 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have a staring competition with the person opposite you, loser has 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'All feminists must drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Last person to name a pokmon drink 3 sips.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Play a round of Never have I ever',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Person with the best facial hair drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Person with the worst facial hair drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Do the splits, if you can\'t have 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'All girls drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'All guys drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Most recent person to have had sex drinks 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Least recent person to have had sex drinks 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Drink for ever player you\'ve slept with.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Whoever drank last card, has a shot.',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Whoever has the biggest tits drink',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Vote on who everyone thinks is the biggest dick, they must have a shot',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have 3 sips',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have a shot',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have a shot',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have a shot',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have a shot',
        'time-limit': '1 Minute'
    },
    {
        'category': 'Drink',
        'points': '4',
        'question': 'Have a shot',
        'time-limit': '1 Minute'
    },
];
exports.questions = questions;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map