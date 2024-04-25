import NONOGRAMS from '../js/nonograms.js';
import {
          showLevelsEasyCross, showLevelsEasyRhombus, showLevelsEasyHeart, showLevelsEasyPlus, showLevelsEasySnowflake,
          showLevelsMediumCrab, showLevelsMediumCoffee, showLevelsMediumBasket, showLevelsMediumHelicopter, showLevelsMediumCup,
          showLevelsHardDino, showLevelsHardFish, showLevelsHardBirds, showLevelsHardHouse, showLevelsHardIceCreame
        } from '../js/app.js';
export { body, logoName , iconRsschool, wrapper, main, nav, gameWon, soundPaintOver, soundCross, soundOff };

const gameWon = new Audio('./assets/song/game-won.mp3');
const soundPaintOver = new Audio('./assets/song/paint-over.mp3');
const soundCross = new Audio('./assets/song/cross.mp3');
const soundOff = new Audio('./assets/song/erase.mp3');

// Body
const body = document.body;
body.classList.add('body');

// Header
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const header = document.createElement('header');
header.className = 'header';

const logoName = document.createElement('h3');
logoName.className = 'header__logo-name';
logoName.textContent = 'Nonograms';

const nav = document.createElement('nav');
nav.className = 'header__nav-lists nav-lists';

const ul = document.createElement('ul');
ul.className = 'nav-lists__position position';

const listNames = ['Play - 5 x 5', 'Levels', 'Score', 'Rules', 'Screen theme', 'Settings'];

listNames.forEach(name => {
  const li = document.createElement('li');
  li.className = 'position__name-list';
  li.textContent = name;
  ul.appendChild(li);
});

header.appendChild(logoName);
header.appendChild(nav);
nav.appendChild(ul);

// const burgerMenuBtn = document.createElement('button');
// burgerMenuBtn.className = 'header__burger-menu-btn burger-menu-btn';
// header.appendChild(burgerMenuBtn);

// const burgerMenuImg = document.createElement('img');
// burgerMenuImg.src = './assets/img/img-burger.png';
// burgerMenuImg.alt = 'Burger Menu';
// burgerMenuBtn.appendChild(burgerMenuImg);

// const burgerMenu = document.createElement('div');
// burgerMenu.className = 'header__burger-menu burger-menu';
// burgerMenu.appendChild(ul.cloneNode(true));
// header.appendChild(burgerMenu);

// const crossBurger = document.createElement('button');
// crossBurger.className = 'burger-menu__button';
// burgerMenu.appendChild(crossBurger);

// const imgCrossBurger = document.createElement('img');
// imgCrossBurger.src = './assets/img/img-cross-burger.png';
// imgCrossBurger.alt = 'Cross Burger';
// crossBurger.appendChild(imgCrossBurger);

// function openBurgerMenu() {
//   burgerMenu.classList.add('open');
// }

// function closeBurgerMenu() {
//   burgerMenu.classList.remove('open');
// }

// burgerMenuBtn.addEventListener('click', openBurgerMenu);
// crossBurger.addEventListener('click', closeBurgerMenu);
// const burgerMenuLinks = document.querySelectorAll('.position__name-list');

// burgerMenuLinks.forEach(link => {
//   link.addEventListener('click', closeBurgerMenu);
// });

// function checkScreenWidth() {
//   if (window.innerWidth <= 1150) {
//     burgerMenu.style.display = 'flex';
//     burgerMenuBtn.style.display = 'flex';
//   } else {
//     burgerMenu.style.display = 'none';
//     burgerMenuBtn.style.display = 'none';
//   }
// }

// checkScreenWidth();
// window.addEventListener('resize', checkScreenWidth);

// Main
const main = document.createElement('main');
main.className = 'main';
let levelEasy = null;
let levelMedium = null;
let levelHard = null;
let nonogramIndex = 0;
let gameWin = false;
let timerInterval;
let seconds = 0;
let milliseconds = 0;

const gameBoardMain = document.createElement('div');
gameBoardMain.className = 'main__game-board-main game-board-main';
main.appendChild(gameBoardMain);

const nameTitleMain = document.createElement('h3');
nameTitleMain.className = 'game-board-main__name-title-main';
nameTitleMain.style.fontSize = '25px';
nameTitleMain.style.maxWidth = '520px';
nameTitleMain.style.textAlign = 'center';
nameTitleMain.textContent = `Japanese crossword: easy level(5 x 5) - "${NONOGRAMS[nonogramIndex].name}"`;
gameBoardMain.appendChild(nameTitleMain);

const gameTimerMain = document.createElement('p');
gameTimerMain.className = 'game-board-main__game-timer-main';
gameTimerMain.style.fontSize = '20px';
gameTimerMain.textContent = `Time - 00 : 00`;
gameTimerMain.style.margin = '25px 0';
gameTimerMain.style.width = 'auto';
gameBoardMain.appendChild(gameTimerMain);

const gameFieldMain = document.createElement('div');
gameFieldMain.className = 'game-board-main__game-field-main game-field-main';
gameBoardMain.appendChild(gameFieldMain);

const gameFieldRight = document.createElement('div');
gameFieldRight.className = 'game-field-main__game-field-right game-field-right';
gameFieldMain.appendChild(gameFieldRight);

const gameRowHintsMain = document.createElement('div');
gameRowHintsMain.className = 'game-field-right__game-row-hints-main game-row-hints-main';
gameFieldRight.appendChild(gameRowHintsMain);

const gameZoneMain = document.createElement('div');
gameZoneMain.className = 'game-field-right__game-zone-main game-zone-main';
gameFieldRight.appendChild(gameZoneMain);

const gameColHintsMain = document.createElement('div');
gameColHintsMain.className = 'game-field-main__game-col-hints-main game-col-hints-main';
gameFieldMain.appendChild(gameColHintsMain);

const gameButtonMain = document.createElement('div');
gameButtonMain.className = 'game-board-main__game-button-main game-button-main';
gameBoardMain.appendChild(gameButtonMain);

const resetGameMain = document.createElement('button');
resetGameMain.className = 'game-button-main__reset-game-main btn-main';
resetGameMain.textContent = 'Reset';
gameButtonMain.appendChild(resetGameMain);

const solutionGameMain = document.createElement('button');
solutionGameMain.className = 'game-button-main__solution-game-main btn-main';
solutionGameMain.textContent = 'Solution';
gameButtonMain.appendChild(solutionGameMain);

const nextGameMain = document.createElement('button');
nextGameMain.className = 'game-button-main__next-game-main btn-main';
nextGameMain.textContent = 'Next Sample - 5 x 5';
gameButtonMain.appendChild(nextGameMain);

const randomGameMain = document.createElement('button');
randomGameMain.className = 'game-button-main__random-game-main btn-main';
randomGameMain.textContent = 'Random Game';
gameButtonMain.appendChild(randomGameMain);

const selectGameMain = document.createElement('button');
selectGameMain.className = 'game-button-main__select-game-main btn-main';
selectGameMain.textContent = 'Select Level';
gameButtonMain.appendChild(selectGameMain);

// Modal Game Win
const modalGameWIn = document.createElement('div');
modalGameWIn.className = 'body__modal-game-win modal-game-win';
document.body.appendChild(modalGameWIn);

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

const modalTitle = document.createElement('h3');
modalTitle.className = 'modal-game-win__title';
modalTitle.textContent = 'Congratulations! You won!';
modalGameWIn.appendChild(modalTitle);

const modalTextContent = document.createElement('p');
modalTextContent.className = 'modal-game-win__text-content';
modalTextContent.textContent = `You solved the nonogram in 00 second.`;
modalGameWIn.appendChild(modalTextContent);

const modalButton = document.createElement('div');
modalButton.className = 'modal-game-win__buttons-modal buttons-modal';
modalGameWIn.appendChild(modalButton);

const buttonClose = document.createElement('button');
buttonClose.className = 'buttons-modal__close-btn modal-btn';
buttonClose.textContent = 'Close';
modalButton.appendChild(buttonClose);

export function showModal() {
  const formattedSec = String(seconds).padStart(2, '0');
  modalTextContent.textContent = `You solved the nonogram in ${formattedSec} second.`;
  modalGameWIn.classList.add('open');
  overlay.classList.add('open');
}

overlay.addEventListener('click', hideModal);
buttonClose.addEventListener('click', hideModal);

function hideModal() {
  modalGameWIn.classList.remove('open');
  overlay.classList.remove('open');
  resetTimer();
}

const colHint = NONOGRAMS[nonogramIndex].cols;
const rowHint = NONOGRAMS[nonogramIndex].rows;

for (let i = 0; i < colHint[0].length; i++) {
  const gameColHintsCell = document.createElement('div');
  gameColHintsCell.className = 'game-col-hints-main__col-hints-cell';

  if (colHint[0][i] !== 0 ) {
    gameColHintsCell.textContent = colHint[0][i];
  } else {
    gameColHintsCell.textContent = '';
  }

  gameColHintsMain.appendChild(gameColHintsCell);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    const gameZoneCell = document.createElement('div');
    gameZoneCell.className = 'game-zone-main__zone-cell';
    gameZoneCell.addEventListener('click', toggleCell);
    gameZoneMain.appendChild(gameZoneCell);
  }
}

for (let i = 0; i < rowHint[0].length; i++) {
  const gameRowHintsCell = document.createElement('div');
  gameRowHintsCell.className = 'game-row-hints-main__row-hints-cell';
  gameRowHintsCell.textContent = rowHint[0][i]  !== 0 ? rowHint[0][i] : '';
  gameRowHintsMain.appendChild(gameRowHintsCell);
}

function updateTimer() {
  milliseconds += 100;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }

  const formattedSec = String(seconds).padStart(2, '0');
  const formattedMillSec = String(milliseconds / 10).padStart(2, '0');

  gameTimerMain.textContent = `Time - ${formattedSec} : ${formattedMillSec}`;
}

function startTimer() {
  timerInterval = setInterval(updateTimer, 100);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
}

gameZoneMain.addEventListener('click', function() {
  if (!gameWin && !timerInterval) {
    startTimer();
  }
});

function resetTimer() {
  stopTimer();
  seconds = 0;
  milliseconds = 0;
  updateTimer();
  timerInterval = null;
  gameTimerMain.textContent = `Time - 00 : 00`;
}

function checkWin(nonogramData) {
  const gameCells = document.querySelectorAll('.game-zone-main__zone-cell');
  let win = true;

  for (let i = 0; i < gameCells.length; i++) {
    const row = Math.floor(i / 5);
    const col = i % 5;

    const expectedValue = nonogramData[row][col];

    if ((expectedValue === 1 && !gameCells[i].classList.contains('filled')) ||
        (expectedValue === 0 && gameCells[i].classList.contains('filled'))) {
      win = false;
      break;
    }
  }

  const soundOption = localStorage.getItem('soundOption');

  if (win) {
    gameWin = true;
    stopTimer();
    if (soundOption === 'off') {
      removeAudioElements();
    } else {
      gameWon.play();
    }
    showModal();
    const timeSeconds = seconds + milliseconds / 1000;

    const scoreData = {
      name: NONOGRAMS[nonogramIndex].name,
      level: NONOGRAMS[nonogramIndex].level,
      time: timeSeconds,
    };

    let savedScores = JSON.parse(localStorage.getItem('scores')) || [];

    savedScores.push(scoreData);

    if (savedScores.length > 5) {
      savedScores.shift();
    }

    localStorage.setItem('scores', JSON.stringify(savedScores));
  }
}

function toggleCell(event) {
  if (!gameWin) {
    const gameCell = event.target;
    const soundOption = localStorage.getItem('soundOption');

    if (gameCell.classList.contains('cross')) {
      gameCell.classList.remove('cross');
      gameCell.classList.add('filled');
      if (soundOption === 'off') {
        removeAudioElements();
      } else {
        soundOff.pause();
        soundPaintOver.currentTime = 0;
        soundPaintOver.play();
      }
    } else {
      const isFilled = gameCell.classList.contains('filled');
      gameCell.classList.toggle('filled');

      if (isFilled) {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundPaintOver.pause();
          soundOff.currentTime = 0;
          soundOff.play();
        }
      } else {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundPaintOver.pause();
          soundPaintOver.currentTime = 0;
          soundPaintOver.play();
        }
      }
    }

    checkWin(NONOGRAMS[nonogramIndex].data);
  }
}

gameZoneMain.addEventListener('contextmenu', function (event) {
  event.preventDefault();

  if (!gameWin && !timerInterval) {
    startTimer();
  }

  if (!gameWin) {
    const gameCell = event.target;
    const soundOption = localStorage.getItem('soundOption');

    if (gameCell.classList.contains('filled')) {
      gameCell.classList.remove('filled');
      gameCell.classList.add('cross');
      if (soundOption === 'off') {
        removeAudioElements();
      } else {
        soundOff.pause();
        soundCross.currentTime = 0;
        soundCross.play();
      }
    } else {
      const isCross = gameCell.classList.contains('cross');
      gameCell.classList.toggle('cross');

      if (isCross) {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundCross.pause();
          soundOff.currentTime = 0;
          soundOff.play();
        }
      } else {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundCross.pause();
          soundCross.currentTime = 0;
          soundCross.play();
        }
      }
    }

    checkWin(NONOGRAMS[nonogramIndex].data);
  }
});

resetGameMain.addEventListener('click', function() {
  const gameCells = document.querySelectorAll('.game-zone-main__zone-cell');

  gameCells.forEach(function(cell) {
    cell.classList.remove('filled');
  });
  gameCells.forEach(function(cell) {
    cell.classList.remove('cross');
  });
  gameWin = false;
  resetTimer();
});

let currentIndex = 0;
const easyLevels = [showLevelsEasyCross, showLevelsEasyRhombus, showLevelsEasyHeart, showLevelsEasyPlus, showLevelsEasySnowflake];

nextGameMain.addEventListener('click', function() {
  if (currentIndex < easyLevels.length) {
    easyLevels[currentIndex]();
    currentIndex++;
  }

  if (currentIndex === easyLevels.length) {
    currentIndex = 0;
  }
});

solutionGameMain.addEventListener('click', showSolution);

function showSolution() {
  gameWin = true;
  resetTimer();
  stopTimer();

  const nonogramData = NONOGRAMS[nonogramIndex].data;
  const gameCells = document.querySelectorAll('.game-zone-main__zone-cell');

  gameCells.forEach(function(cell) {
    cell.classList.remove('cross');
  });

  for (let i = 0; i < nonogramData.length; i++) {
    for (let j = 0; j < nonogramData[i].length; j++) {
      const index = i * nonogramData[i].length + j;
      const cell = gameCells[index];
      if (nonogramData[i][j] === 1) {
        cell.classList.add('filled');
      } else {
        cell.classList.remove('filled');
      }
    }
  }
}

// Main__Play - 5 x 5
document.addEventListener('DOMContentLoaded', function () {
  const playLink = document.querySelector('.position__name-list:nth-child(1)');
  playLink.addEventListener('click', showPlay);

  function showPlay() {
    gameWin = false;
    removePreviousLevel();
    main.innerHTML = '';
    main.style.justifyContent = 'flex-end';
    main.style.flexDirection = 'row';
    main.style.gap = '50px';
    const gameBoardMain = document.createElement('div');
    gameBoardMain.className = 'main__game-board-main game-board-main';
    main.appendChild(gameBoardMain);

    function checkScreenWidth() {
      if (window.innerWidth <= 1750) {
        main.style.height = 'auto';
        wrapper.style.height = 'auto';
      }
    }

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    const nameTitleMain = document.createElement('h3');
    nameTitleMain.className = 'game-board-main__name-title-main';
    nameTitleMain.style.fontSize = '25px';
    nameTitleMain.style.maxWidth = '520px';
    nameTitleMain.style.textAlign = 'center';
    nameTitleMain.textContent = `Japanese crossword: easy level(5 x 5) - "${NONOGRAMS[nonogramIndex].name}"`;
    gameBoardMain.appendChild(nameTitleMain);

    const gameTimerMain = document.createElement('p');
    gameTimerMain.className = 'game-board-main__game-timer-main';
    gameTimerMain.style.fontSize = '20px';
    gameTimerMain.textContent = `Time - 00 : 00`;
    gameTimerMain.style.margin = '25px 0';
    gameTimerMain.style.width = 'auto';
    gameBoardMain.appendChild(gameTimerMain);

    const gameFieldMain = document.createElement('div');
    gameFieldMain.className = 'game-board-main__game-field-main game-field-main';
    gameBoardMain.appendChild(gameFieldMain);

    const gameFieldRight = document.createElement('div');
    gameFieldRight.className = 'game-field-main__game-field-right game-field-right';
    gameFieldMain.appendChild(gameFieldRight);

    const gameRowHintsMain = document.createElement('div');
    gameRowHintsMain.className = 'game-field-right__game-row-hints-main game-row-hints-main';
    gameFieldRight.appendChild(gameRowHintsMain);

    const gameZoneMain = document.createElement('div');
    gameZoneMain.className = 'game-field-right__game-zone-main game-zone-main';
    gameFieldRight.appendChild(gameZoneMain);

    const gameColHintsMain = document.createElement('div');
    gameColHintsMain.className = 'game-field-main__game-col-hints-main game-col-hints-main';
    gameFieldMain.appendChild(gameColHintsMain);

    const gameButtonMain = document.createElement('div');
    gameButtonMain.className = 'game-board-main__game-button-main game-button-main';
    gameBoardMain.appendChild(gameButtonMain);

    const resetGameMain = document.createElement('button');
    resetGameMain.className = 'game-button-main__reset-game-main btn-main';
    resetGameMain.textContent = 'Reset';
    gameButtonMain.appendChild(resetGameMain);

    const solutionGameMain = document.createElement('button');
    solutionGameMain.className = 'game-button-main__solution-game-main btn-main';
    solutionGameMain.textContent = 'Solution';
    gameButtonMain.appendChild(solutionGameMain);

    const nextGameMain = document.createElement('button');
    nextGameMain.className = 'game-button-main__next-game-main btn-main';
    nextGameMain.textContent = 'Next Sample - 5 x 5';
    gameButtonMain.appendChild(nextGameMain);

    const randomGameMain = document.createElement('button');
    randomGameMain.className = 'game-button-main__random-game-main btn-main';
    randomGameMain.textContent = 'Random Game';
    gameButtonMain.appendChild(randomGameMain);

    const selectGameMain = document.createElement('button');
    selectGameMain.className = 'game-button-main__select-game-main btn-main';
    selectGameMain.textContent = 'Select Level';
    gameButtonMain.appendChild(selectGameMain);

    const colHint = NONOGRAMS[nonogramIndex].cols;
    const rowHint = NONOGRAMS[nonogramIndex].rows;

    for (let i = 0; i < colHint[0].length; i++) {
      const gameColHintsCell = document.createElement('div');
      gameColHintsCell.className = 'game-col-hints-main__col-hints-cell';

      if (colHint[0][i] !== 0 ) {
        gameColHintsCell.textContent = colHint[0][i];
      } else {
        gameColHintsCell.textContent = '';
      }

      gameColHintsMain.appendChild(gameColHintsCell);
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const gameZoneCell = document.createElement('div');
        gameZoneCell.className = 'game-zone-main__zone-cell';
        gameZoneCell.addEventListener('click', toggleCell);
        gameZoneMain.appendChild(gameZoneCell);
      }
    }

    for (let i = 0; i < rowHint[0].length; i++) {
      const gameRowHintsCell = document.createElement('div');
      gameRowHintsCell.className = 'game-row-hints-main__row-hints-cell';
      gameRowHintsCell.textContent = rowHint[0][i]  !== 0 ? rowHint[0][i] : '';
      gameRowHintsMain.appendChild(gameRowHintsCell);
    }

    let timerInterval;
    let seconds = 0;
    let milliseconds = 0;

    function updateTimer() {
      milliseconds += 100;

      if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
      }

      const formattedSec = String(seconds).padStart(2, '0');
      const formattedMillSec = String(milliseconds / 10).padStart(2, '0');

      gameTimerMain.textContent = `Time - ${formattedSec} : ${formattedMillSec}`;
    }

    function startTimer() {
      timerInterval = setInterval(updateTimer, 100);
    }

    function stopTimer() {
      if (timerInterval) {
        clearInterval(timerInterval);
      }
    }

    gameZoneMain.addEventListener('click', function() {
      if (!gameWin && !timerInterval) {
        startTimer();
      }
    });

    function resetTimer() {
      stopTimer();
      seconds = 0;
      milliseconds = 0;
      updateTimer();
      timerInterval = null;
      gameTimerMain.textContent = `Time - 00 : 00`;
    }

    function showModal() {
      const formattedSec = String(seconds).padStart(2, '0');
      modalTextContent.textContent = `You solved the nonogram in ${formattedSec} second.`;
      modalGameWIn.classList.add('open');
      overlay.classList.add('open');
    }

    overlay.addEventListener('click', hideModal);
    buttonClose.addEventListener('click', hideModal);

    function hideModal() {
      modalGameWIn.classList.remove('open');
      overlay.classList.remove('open');
      resetTimer();
    }

    function checkWin(nonogramData) {
      const gameCells = document.querySelectorAll('.game-zone-main__zone-cell');
      let win = true;

      for (let i = 0; i < gameCells.length; i++) {
        const row = Math.floor(i / 5);
        const col = i % 5;

        const expectedValue = nonogramData[row][col];

        if ((expectedValue === 1 && !gameCells[i].classList.contains('filled')) ||
            (expectedValue === 0 && gameCells[i].classList.contains('filled'))) {
          win = false;
          break;
        }
      }

      const soundOption = localStorage.getItem('soundOption');

      if (win) {
        gameWin = true;
        stopTimer();
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          gameWon.play();
        }
        showModal();
        const timeSeconds = seconds + milliseconds / 1000;

        const scoreData = {
          name: NONOGRAMS[nonogramIndex].name,
          level: NONOGRAMS[nonogramIndex].level,
          time: timeSeconds,
        };

        let savedScores = JSON.parse(localStorage.getItem('scores')) || [];

        savedScores.push(scoreData);

        if (savedScores.length > 5) {
          savedScores.shift();
        }

        localStorage.setItem('scores', JSON.stringify(savedScores));
      }
    }

    function toggleCell(event) {
      if (!gameWin) {
        const gameCell = event.target;
        const soundOption = localStorage.getItem('soundOption');

        if (gameCell.classList.contains('cross')) {
          gameCell.classList.remove('cross');
          gameCell.classList.add('filled');
          if (soundOption === 'off') {
            removeAudioElements();
          } else {
            soundOff.pause();
            soundPaintOver.currentTime = 0;
            soundPaintOver.play();
          }
        } else {
          const isFilled = gameCell.classList.contains('filled');
          gameCell.classList.toggle('filled');

          if (isFilled) {
            if (soundOption === 'off') {
              removeAudioElements();
            } else {
              soundPaintOver.pause();
              soundOff.currentTime = 0;
              soundOff.play();
            }
          } else {
            if (soundOption === 'off') {
              removeAudioElements();
            } else {
              soundPaintOver.pause();
              soundPaintOver.currentTime = 0;
              soundPaintOver.play();
            }
          }
        }

        checkWin(NONOGRAMS[nonogramIndex].data);
      }
    }

    gameZoneMain.addEventListener('contextmenu', function (event) {
      event.preventDefault();

      if (!gameWin && !timerInterval) {
        startTimer();
      }

      if (!gameWin) {
        const gameCell = event.target;
        const soundOption = localStorage.getItem('soundOption');

        if (gameCell.classList.contains('filled')) {
          gameCell.classList.remove('filled');
          gameCell.classList.add('cross');
          if (soundOption === 'off') {
            removeAudioElements();
          } else {
            soundOff.pause();
            soundCross.currentTime = 0;
            soundCross.play();
          }
        } else {
          const isCross = gameCell.classList.contains('cross');
          gameCell.classList.toggle('cross');

          if (isCross) {
            if (soundOption === 'off') {
              removeAudioElements();
            } else {
              soundCross.pause();
              soundOff.currentTime = 0;
              soundOff.play();
            }
          } else {
            if (soundOption === 'off') {
              removeAudioElements();
            } else {
              soundCross.pause();
              soundCross.currentTime = 0;
              soundCross.play();
            }
          }
        }

        checkWin(NONOGRAMS[nonogramIndex].data);
      }
    });

    resetGameMain.addEventListener('click', function() {
      const gameCells = document.querySelectorAll('.game-zone-main__zone-cell');

      gameCells.forEach(function(cell) {
        cell.classList.remove('filled');
      });
      gameCells.forEach(function(cell) {
        cell.classList.remove('cross');
      });
      gameWin = false;
      resetTimer();
    });

    let currentIndex = 0;
    const easyLevels = [showLevelsEasyCross, showLevelsEasyRhombus, showLevelsEasyHeart, showLevelsEasyPlus, showLevelsEasySnowflake];

    nextGameMain.addEventListener('click', function() {
      if (currentIndex < easyLevels.length) {
        easyLevels[currentIndex]();
        currentIndex++;
      }

      if (currentIndex === easyLevels.length) {
        currentIndex = 0;
      }
    });

    solutionGameMain.addEventListener('click', showSolution);

    function showSolution() {
      gameWin = true;
      resetTimer();
      stopTimer();

      const nonogramData = NONOGRAMS[nonogramIndex].data;
      const gameCells = document.querySelectorAll('.game-zone-main__zone-cell');

      gameCells.forEach(function(cell) {
        cell.classList.remove('cross');
      });

      for (let i = 0; i < nonogramData.length; i++) {
        for (let j = 0; j < nonogramData[i].length; j++) {
          const index = i * nonogramData[i].length + j;
          const cell = gameCells[index];
          if (nonogramData[i][j] === 1) {
            cell.classList.add('filled');
          } else {
            cell.classList.remove('filled');
          }
        }
      }
    }

    randomGameMain.addEventListener('click', function() {
      const randomIndex = Math.floor(Math.random() * levelsRandom.length);
      levelsRandom[randomIndex]();
    });
  }
  const levelsRandom = [
    showLevelsEasyCross, showLevelsEasyRhombus, showLevelsEasyHeart, showLevelsEasyPlus, showLevelsEasySnowflake,
    showLevelsMediumCrab, showLevelsMediumCoffee, showLevelsMediumBasket, showLevelsMediumHelicopter, showLevelsMediumCup,
    showLevelsHardDino, showLevelsHardFish, showLevelsHardBirds, showLevelsHardHouse, showLevelsHardIceCreame
  ]

  randomGameMain.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * levelsRandom.length);
    levelsRandom[randomIndex]();
  });
});

// Main__Levels
document.addEventListener('DOMContentLoaded', function () {
  const levelsLink = document.querySelector('.position__name-list:nth-child(2)');
  levelsLink.addEventListener('click', showLevels);
  document.body.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('game-button-main__select-game-main')) {
      showLevels();
    }
  });

  function showLevels() {
    removePreviousLevel();
    main.innerHTML = '';
    main.style.justifyContent = 'space-between';
    main.style.flexDirection = 'row';
    main.style.gap = '50px';
    function checkScreenWidth() {
      if (window.innerWidth <= 1750) {
        main.style.height = '100vh';
        wrapper.style.height = '100vh';
      }
    }

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    const mainLevels = document.createElement('div');
    mainLevels.className = 'main__levels-list levels-list';
    main.appendChild(mainLevels);

    const levelTitle = document.createElement('h1');
    levelTitle.className = 'levels-list__level-title';
    levelTitle.textContent = 'Levels:';
    mainLevels.appendChild(levelTitle);

    const levelsTextUl = document.createElement('ul');
    levelsTextUl.className = 'levels-list__level-set level-set';
    mainLevels.appendChild(levelsTextUl);

    const levelsName = ['Easy - 5 x 5', 'Medium - 10 x 10', 'Hard - 15 x 15'];
    levelsName.forEach(name => {
      const levelsTextUlLi = document.createElement('li');
      levelsTextUlLi.className = 'level-set__item-name';
      levelsTextUlLi.textContent = name;

      if (name === 'Easy - 5 x 5') {
        levelsTextUlLi.addEventListener('click', showLevelsEasy);
      } else if (name === 'Medium - 10 x 10') {
        levelsTextUlLi.addEventListener('click', showLevelsMedium);
      } else if (name === 'Hard - 15 x 15') {
        levelsTextUlLi.addEventListener('click', showLevelsHard);
      }

      levelsTextUl.appendChild(levelsTextUlLi);
    });

    setTimeout(() => {
      mainLevels.classList.add('active');
    }, 50);
  }

  // Main__Levels-Easy - 5 x 5
  function showLevelsEasy() {
    removePreviousLevel();
    if (levelEasy) {
      levelEasy.innerHTML = '';
    } else {
      levelEasy = document.createElement('div');
      levelEasy.className = 'main__level-easy level-easy';
      main.appendChild(levelEasy);
    }

    const levelEasyTitle = document.createElement('h2');
    levelEasyTitle.className = 'level-easy__level-easy-title';
    levelEasyTitle.textContent = 'Easy:';
    levelEasy.appendChild(levelEasyTitle);

    const levelEasyTextUl = document.createElement('ul');
    levelEasyTextUl.className = 'level-easy__level-easy-set level-easy-set';
    levelEasy.appendChild(levelEasyTextUl);

    const levelsEasy = ['1. Cross', '2. Rhombus', '3. Heart', '4. Plus', '5. Snowflake'];
    levelsEasy.forEach(name => {
      const levelEasyTextUlLi = document.createElement('li');
      levelEasyTextUlLi.className = 'level-easy-set__item-name';
      levelEasyTextUlLi.textContent = name;
      levelEasyTextUl.appendChild(levelEasyTextUlLi);
    });

    setTimeout(() => {
      levelEasy.classList.add('active');
    }, 50);

    // Main__Levels-Easy - 5 x 5 - Cross
    const levelsEasyCross = document.querySelector('.level-easy-set__item-name:nth-child(1)');
    levelsEasyCross.addEventListener('click', showLevelsEasyCross);
    // Main__Levels-Easy - 5 x 5 - Rhombus
    const levelsEasyRhombus = document.querySelector('.level-easy-set__item-name:nth-child(2)');
    levelsEasyRhombus.addEventListener('click', showLevelsEasyRhombus);
    // Main__Levels-Easy - 5 x 5 - Heart
    const levelsEasyHeart = document.querySelector('.level-easy-set__item-name:nth-child(3)');
    levelsEasyHeart.addEventListener('click', showLevelsEasyHeart);
    // Main__Levels-Easy - 5 x 5 - Plus
    const levelsEasyPlus = document.querySelector('.level-easy-set__item-name:nth-child(4)');
    levelsEasyPlus.addEventListener('click', showLevelsEasyPlus);
    // Main__Levels-Easy - 5 x 5 - Snowflake
    const levelsEasySnowflake = document.querySelector('.level-easy-set__item-name:nth-child(5)');
    levelsEasySnowflake.addEventListener('click', showLevelsEasySnowflake);
  }

  // Main__Levels-Medium - 10 x 10
  function showLevelsMedium() {
    removePreviousLevel();
    if (levelMedium) {
      levelMedium.innerHTML = '';
    } else {
      levelMedium = document.createElement('div');
      levelMedium.className = 'main__level-medium level-medium';
      main.appendChild(levelMedium);
    }

    const levelMedimTitle = document.createElement('h2');
    levelMedimTitle.className = 'level-medium__level-medium-title';
    levelMedimTitle.textContent = 'Medium:';
    levelMedium.appendChild(levelMedimTitle);

    const levelMediumTextUl = document.createElement('ul');
    levelMediumTextUl.className = 'level-medium__level-medium-set level-medium-set';
    levelMedium.appendChild(levelMediumTextUl);

    const levelsMedium = ['1. Crab', '2. Coffee', '3. Basket', '4. Helicopter', '5. Cup'];
    levelsMedium.forEach(name => {
      const levelMediumTextUlLi = document.createElement('li');
      levelMediumTextUlLi.className = 'level-medium-set__item-name';
      levelMediumTextUlLi.textContent = name;
      levelMediumTextUl.appendChild(levelMediumTextUlLi);
    });

    setTimeout(() => {
      levelMedium.classList.add('active');
    }, 50);

    // Main__Levels-Medium - 10 x 10 - Crab
    const levelsMediumCrab = document.querySelector('.level-medium-set__item-name:nth-child(1)');
    levelsMediumCrab.addEventListener('click', showLevelsMediumCrab);
    // Main__Levels-Medium - 10 x 10 - Coffee
    const levelsMediumCoffee = document.querySelector('.level-medium-set__item-name:nth-child(2)');
    levelsMediumCoffee.addEventListener('click', showLevelsMediumCoffee);
    // Main__Levels-Medium - 10 x 10 - Basket
    const levelsMediumBasket = document.querySelector('.level-medium-set__item-name:nth-child(3)');
    levelsMediumBasket.addEventListener('click', showLevelsMediumBasket);
    // Main__Levels-Medium - 10 x 10 - Helicopter
    const levelsMediumHelicopter = document.querySelector('.level-medium-set__item-name:nth-child(4)');
    levelsMediumHelicopter.addEventListener('click', showLevelsMediumHelicopter);
    // Main__Levels-Medium - 10 x 10 - Cup
    const levelsMediumCup = document.querySelector('.level-medium-set__item-name:nth-child(5)');
    levelsMediumCup.addEventListener('click', showLevelsMediumCup);
  }

  // Main__Levels-Hard - 15 x 15
  function showLevelsHard() {
    removePreviousLevel();
    if (levelHard) {
      levelHard.innerHTML = '';
    } else {
      levelHard = document.createElement('div');
      levelHard.className = 'main__level-hard level-hard';
      main.appendChild(levelHard);
    }

    const levelHardTitle = document.createElement('h2');
    levelHardTitle.className = 'level-hard__level-hard-title';
    levelHardTitle.textContent = 'Hard:';
    levelHard.appendChild(levelHardTitle);

    const levelHardTextUl = document.createElement('ul');
    levelHardTextUl.className = 'level-hard__level-hard-set level-hard-set';
    levelHard.appendChild(levelHardTextUl);

    const levelsHard = ['1. Dino', '2. Fish', '3. Birds on the tree', '4. House', '5. Ice-Cream'];
    levelsHard.forEach(name => {
      const levelHardTextUlLi = document.createElement('li');
      levelHardTextUlLi.className = 'level-hard-set__item-name';
      levelHardTextUlLi.textContent = name;
      levelHardTextUl.appendChild(levelHardTextUlLi);
    });

    setTimeout(() => {
      levelHard.classList.add('active');
    }, 50);

    // Main__Levels-Hard - 15 x 15 - Dino
    const levelsHardDino = document.querySelector('.level-hard-set__item-name:nth-child(1)');
    levelsHardDino.addEventListener('click', showLevelsHardDino);
    // Main__Levels-Hard - 15 x 15 - Fish
    const levelsHardFish = document.querySelector('.level-hard-set__item-name:nth-child(2)');
    levelsHardFish.addEventListener('click', showLevelsHardFish);
    // Main__Levels-Hard - 15 x 15 - Birds on the tree
    const levelsHardBirds = document.querySelector('.level-hard-set__item-name:nth-child(3)');
    levelsHardBirds.addEventListener('click', showLevelsHardBirds);
    // Main__Levels-Hard - 15 x 15 - House
    const levelsHardHouse = document.querySelector('.level-hard-set__item-name:nth-child(4)');
    levelsHardHouse.addEventListener('click', showLevelsHardHouse);
    // Main__Levels-Hard - 15 x 15 - Ice-Cream
    const levelsHardIceCreame = document.querySelector('.level-hard-set__item-name:nth-child(5)');
    levelsHardIceCreame.addEventListener('click', showLevelsHardIceCreame);
  }
});

export function removePreviousLevel() {
  if (levelEasy && levelEasy.parentNode === main) {
    main.removeChild(levelEasy);
    levelEasy = null;
  }
  if (levelMedium && levelMedium.parentNode === main) {
    main.removeChild(levelMedium);
    levelMedium = null;
  }
  if (levelHard && levelHard.parentNode === main) {
    main.removeChild(levelHard);
    levelHard = null;
  }
}

// Main__Score
document.addEventListener('DOMContentLoaded', function () {
  const scoreLink = document.querySelector('.position__name-list:nth-child(3)');
  scoreLink.addEventListener('click', showScore);

  function showScore() {
    removePreviousLevel();
    stopTimer();
    // Modal Score
    const modalScore = document.createElement('div');
    modalScore.className = 'body__modal-score modal-score';
    document.body.appendChild(modalScore);

    const overlayScore = document.createElement('div');
    overlayScore.classList.add('overlay-score');
    document.body.appendChild(overlayScore);

    modalScore.classList.add('open');
    overlayScore.classList.add('open');

    const modalScoreTitle = document.createElement('h3');
    modalScoreTitle.className = 'modal-score__title';
    modalScoreTitle.textContent = 'Score';
    modalScore.appendChild(modalScoreTitle);

    const tableScore = document.createElement('table');
    tableScore.className = 'modal-score__table-score table-score';
    modalScore.appendChild(tableScore);

    const theadScore = document.createElement('thead');
    theadScore.className = 'table-score__thead-score thead-score';
    tableScore.appendChild(theadScore);

    const headerRowScore = document.createElement('tr');
    headerRowScore.className = 'thead-score__header-row-score header-row-score';
    theadScore.appendChild(headerRowScore);

    const thName = ['№', 'Name', 'Level', 'Time']
    thName.forEach(name => {
      const thScore = document.createElement('th');
      thScore.className = 'header-row-score__th-score';
      thScore.textContent = name;
      headerRowScore.appendChild(thScore);
    });

    const savedScores = JSON.parse(localStorage.getItem('scores')) || [];

    savedScores.sort((a, b) => parseTime(a.time) - parseTime(b.time));

    const tbodyScore = document.createElement('tbody');
    tbodyScore.className = 'table-score__tbody-score tbody-score'
    tableScore.appendChild(tbodyScore);

    savedScores.slice(0, 5).sort((a, b) => a.time - b.time).forEach((scoreData, index) => {
      const rowScore = document.createElement('tr');
      rowScore.className = 'tbody-score__row-score row-score';

      const formattedTime = parseTime(scoreData.time);
      const tdData = [index + 1, scoreData.name, scoreData.level, formattedTime];

      tdData.forEach(data => {
        const tdScore = document.createElement('td');
        tdScore.className = 'row-score__td-score';
        tdScore.textContent = data;
        rowScore.appendChild(tdScore);
      });

      tbodyScore.appendChild(rowScore);
    });

    function parseTime(timeSeconds) {
      const minutes = Math.floor(timeSeconds / 60);
      const seconds = Math.floor(timeSeconds % 60);
      return `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    }

    const buttonScoreClose = document.createElement('button');
    buttonScoreClose.className = 'modal-score__score-close-btn score-modal-btn';
    buttonScoreClose.textContent = 'Close';
    modalScore.appendChild(buttonScoreClose);

    overlayScore.addEventListener('click', hideScoreModal);
    buttonScoreClose.addEventListener('click', hideScoreModal);

    function hideScoreModal() {
      modalScore.classList.remove('open');
      overlayScore.classList.remove('open');
      modalScore.remove();
      overlayScore.remove();
      if(timerInterval) {
        startTimer();
      }
    }
  }
});

// Main__Rules
document.addEventListener('DOMContentLoaded', function () {
  const rulesLink = document.querySelector('.position__name-list:nth-child(4)');
  rulesLink.addEventListener('click', showRules);

  function showRules() {
    removePreviousLevel();
    main.innerHTML = '';
    main.style.justifyContent = 'space-between';
    main.style.flexDirection = 'row';
    main.style.gap = '50px';
    const ruleAnimation = document.createElement('div');
    ruleAnimation.className = 'main__rule-animation rule-animation';
    main.appendChild(ruleAnimation);
    function checkScreenWidth() {
      if (window.innerWidth <= 1750) {
        main.style.height = '100vh';
        wrapper.style.height = '100vh';
      }
    }

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    const ruleGif = document.createElement('img');
    ruleGif.classList = 'rule-animation__gif-animation';
    ruleGif.src = './assets/gif/gamelo.gif';
    ruleGif.alt = 'Gif Rule';
    ruleAnimation.appendChild(ruleGif);
    const ruleGif2 = document.createElement('img');
    ruleGif2.classList = 'rule-animation__gif-animation';
    ruleGif2.src = './assets/gif/unnamed.gif';
    ruleGif2.alt = 'Gif Rule';
    ruleAnimation.appendChild(ruleGif2);

    const ruleText = document.createElement('div');
    ruleText.className = 'main__rule-text rule-text';
    main.appendChild(ruleText);

    const ruleTitle = document.createElement('h2');
    ruleTitle.className = 'rule-text__rule-title';
    ruleTitle.textContent = 'Rules:';
    ruleText.appendChild(ruleTitle);

    const ruleTextUl = document.createElement('ul');
    ruleTextUl.className = 'rule-text__lists lists';
    ruleText.appendChild(ruleTextUl);
    const listTextRules = [
      '1. Nonograms are picture logic puzzles in which cells in a grid must be colored or left blank according to the numbers provided on the side of the grid to reveal a hidden picture.',
      '2. In this type of puzzle, the numbers measure the number of unbroken rows of filled squares in any given row or column.',
      '3. For example, the clue "4 8 3" would mean that there are sets of four, eight, and three filled squares in that order, with at least one empty square between consecutive sets.',
      '4. These puzzles are often black and white, but can also have some colors.',
      '5. If they are colored, the number hints will also be colored to indicate the color of the squares.',
      '6. Two different colored colors may or may not have a gap between them.'
    ];

    listTextRules.forEach(name => {
      const ruleTextUlLi = document.createElement('li');
      ruleTextUlLi.className = 'lists__item-name';
      ruleTextUlLi.textContent = name;
      ruleTextUl.appendChild(ruleTextUlLi);
    });

    setTimeout(() => {
      ruleAnimation.classList.add('active');
    }, 50);
    setTimeout(() => {
      ruleText.classList.add('active');
    }, 50);
  }
});

// Main__Screen theme
document.addEventListener('DOMContentLoaded', function () {
  const screenThemeLink = document.querySelector('.position__name-list:nth-child(5)');
  screenThemeLink.addEventListener('click', showScreenTheme);

  function showScreenTheme() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      body.style.backgroundImage = 'url("./assets/img/img-background-white.jpg")';
      // burgerMenuImg.src = './assets/img/img-burger-white.png';
      // imgCrossBurger.src = './assets/img/img-cross-white.png';
      logoName.style.color = '#383838';
      iconRsschool.querySelector('svg').setAttribute('fill', '#383838');
      const pathElement = iconGithub.querySelector('path');
      pathElement.style.fill = '#383838';
    } else {
      body.style.backgroundImage = 'url("./assets/img/img-background.png")';
      // burgerMenuImg.src = './assets/img/img-burger.png';
      // imgCrossBurger.src = './assets/img/img-cross-burger.png';
      logoName.style.color = '#973d40';
      iconRsschool.querySelector('svg').setAttribute('fill', '#973d40');
      const pathElement = iconGithub.querySelector('path');
      pathElement.style.fill = '#f1efca';
    }
  }
});

// Main__Settings
document.addEventListener('DOMContentLoaded', function () {
  const settingsLink = document.querySelector('.position__name-list:nth-child(6)');
  settingsLink.addEventListener('click', showSettings);

  function showSettings() {
    removePreviousLevel();
    stopTimer();
    // Modal Settings
    const modalSettings = document.createElement('div');
    modalSettings.className = 'body__modal-settings modal-settings';
    document.body.appendChild(modalSettings);

    const overlaySettings = document.createElement('div');
    overlaySettings.classList.add('overlay-settings');
    document.body.appendChild(overlaySettings);

    modalSettings.classList.add('open');
    overlaySettings.classList.add('open');

    const modalSettingsTitle = document.createElement('h3');
    modalSettingsTitle.className = 'modal-settings__title';
    modalSettingsTitle.textContent = 'Settings';
    modalSettings.appendChild(modalSettingsTitle);

    const containerSounds = document.createElement('div');
    containerSounds.className = 'modal-settings__container-sounds container-sounds';
    modalSettings.appendChild(containerSounds);

    const modalSettingsTextContent = document.createElement('p');
    modalSettingsTextContent.className = 'container-sounds__text-content-settings';
    modalSettingsTextContent.textContent = `Sounds:`;
    containerSounds.appendChild(modalSettingsTextContent);

    const formSounds = document.createElement('form');
    formSounds.className = 'container-sounds__form-container';
    containerSounds.appendChild(formSounds);

    const labelSoundsOn = document.createElement('label');
    labelSoundsOn.textContent = 'On';
    formSounds.appendChild(labelSoundsOn);

    const inputSoundOn = document.createElement('input');
    inputSoundOn.type = 'radio';
    inputSoundOn.name = 'soundOption';
    inputSoundOn.value = 'on';
    inputSoundOn.checked = true;
    labelSoundsOn.appendChild(inputSoundOn);

    const labelSoundsOff = document.createElement('label');
    labelSoundsOff.textContent = 'Off';
    formSounds.appendChild(labelSoundsOff);

    const inputSoundOff = document.createElement('input');
    inputSoundOff.type = 'radio';
    inputSoundOff.name = 'soundOption';
    inputSoundOff.value = 'off';
    labelSoundsOff.appendChild(inputSoundOff);

    const lastClickedButton = localStorage.getItem('soundOption');
    if (lastClickedButton === 'on') {
      inputSoundOn.checked = true;
    } else if (lastClickedButton === 'off') {
      inputSoundOff.checked = true;
    }

    inputSoundOn.addEventListener('change', function () {
      localStorage.setItem('soundOption', 'on');
    });

    inputSoundOff.addEventListener('change', function () {
      localStorage.setItem('soundOption', 'off');
    });

    const buttonSettingsClose = document.createElement('button');
    buttonSettingsClose.className = 'modal-settings__settings-close-btn settings-modal-btn';
    buttonSettingsClose.textContent = 'Close';
    modalSettings.appendChild(buttonSettingsClose);

    overlaySettings.addEventListener('click', hideSettingsModal);
    buttonSettingsClose.addEventListener('click', hideSettingsModal);

    function hideSettingsModal() {
      modalSettings.classList.remove('open');
      overlaySettings.classList.remove('open');
      modalSettings.remove();
      overlaySettings.remove();
      if(timerInterval) {
        startTimer();
      }
      const soundOption = localStorage.getItem('soundOption');

      if (soundOption === 'off') {
        removeAudioElements();
      }
    }
  }
});

export function removeAudioElements() {
  soundPaintOver.pause();
  soundCross.pause();
  soundOff.pause();
  gameWon.pause();
  soundPaintOver.currentTime = 0;
  soundCross.currentTime = 0;
  soundOff.currentTime = 0;
}

// Footer
const footer = document.createElement('footer');
footer.className = 'footer';

const linkRsschool = document.createElement('a');
linkRsschool.href = 'https://rs.school/js-stage0/';
linkRsschool.target = '_blank';
linkRsschool.className = 'footer__link';

const iconRsschool = document.createElement('div');
fetch('./assets/icon/icon-rs-school-js.svg')
  .then(response => response.text())
  .then(svgContent => {
    iconRsschool.innerHTML = svgContent;
    iconRsschool.querySelector('svg').setAttribute('fill', '#973d40');
  })
  .catch(error => console.error('Error loading SVG:', error));

iconRsschool.className = 'footer__icon-school';
linkRsschool.appendChild(iconRsschool);

const p = document.createElement('p');
p.className = 'footer__text';
p.textContent = '© 2024';

const linkGithub = document.createElement('a');
linkGithub.href = 'https://github.com/ViktoriiaYermak';
linkGithub.target = '_blank';
linkGithub.className = 'footer__link';

const iconGithub = document.createElement('div');
fetch('./assets/icon/github-icon-1.svg')
  .then(response => response.text())
  .then(svgContent => {
    iconGithub.innerHTML = svgContent;
    const pathElement = iconGithub.querySelector('path');
    pathElement.style.fill = '#f1efca';
    const svgElement = iconGithub.querySelector('svg');
    svgElement.setAttribute('width', '60');
    svgElement.setAttribute('height', '60');
  })
  .catch(error => console.error('Error loading SVG:', error));

iconGithub.className = 'footer__icon-github';
linkGithub.appendChild(iconGithub);

linkGithub.appendChild(iconGithub);

footer.appendChild(linkRsschool);
footer.appendChild(p);
footer.appendChild(linkGithub);

document.body.appendChild(wrapper);
wrapper.appendChild(header);
wrapper.appendChild(main);
wrapper.appendChild(footer);