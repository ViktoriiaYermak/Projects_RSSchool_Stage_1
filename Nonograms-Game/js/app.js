// Start task nonograms
import NONOGRAMS from '../js/nonograms.js';
import { body, logoName, iconRsschool, wrapper, main, nav } from '../js/html-file.js';
import { removePreviousLevel, gameWon, soundPaintOver,
         soundCross, soundOff, removeAudioElements } from '../js/html-file.js';

let nonogramIndex;

export default function gameNonogramEasyStart() {
  if (body.classList.contains('dark-mode')) {
    body.style.backgroundImage = 'url("./assets/img/img-back-gameplay-white.jpg")';
    logoName.style.color = '#383838';
    iconRsschool.querySelector('svg').setAttribute('fill', '#383838');
  } else {
    body.style.backgroundImage = 'url("./assets/img/img-back-gameplay.png")';
    logoName.style.color = '#f1efca';
    iconRsschool.querySelector('svg').setAttribute('fill', '#f1efca');
  }
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundPosition = 'center center';
  // const burgerMenuBtn = document.querySelector('.header__burger-menu-btn');
  function checkScreenWidthForNewPage() {
    if (window.innerWidth <= 1150) {
      // burgerMenuBtn.style.display = 'none';
      nav.style.display = 'none';
    } else {
      nav.style.display = 'none';
    }

    if (window.innerWidth <= 1750) {
      main.style.height = 'auto';
      wrapper.style.height = 'auto';
    } else {
      main.style.height = '100vh';
      wrapper.style.height = '100vh';
    }
  }

  checkScreenWidthForNewPage();
  window.addEventListener('resize', checkScreenWidthForNewPage);

  removePreviousLevel();
  main.innerHTML = '';
  const btnsGameBoard = document.createElement('div');
  btnsGameBoard.className = 'main__btns-game-board btns-game-board';
  main.appendChild(btnsGameBoard);

  const btnResetGame = document.createElement('button');
  btnResetGame.className = 'btns-game-board__btn-reset btn';
  btnResetGame.textContent = 'Reset';

  const btnSolutionGame = document.createElement('button');
  btnSolutionGame.className = 'btns-game-board__btn-solution btn';
  btnSolutionGame.textContent = 'Solution';

  const btnNextGame = document.createElement('button');
  btnNextGame.className = 'btns-game-board__btn-next btn';
  btnNextGame.textContent = 'Next Sample - 5 x 5';

  const btnRandomGame = document.createElement('button');
  btnRandomGame.className = 'btns-game-board__btn-random btn';
  btnRandomGame.textContent = 'Random Game';

  const btnContinueGame = document.createElement('button');
  btnContinueGame.className = 'btns-game-board__btn-continue btn';
  btnContinueGame.textContent = 'Continue Game';

  const btnSaveGame = document.createElement('button');
  btnSaveGame.className = 'btns-game-board__btn-continue btn';
  btnSaveGame.textContent = 'Save Game';

  const btnToMain = document.createElement('button');
  btnToMain.className = 'btns-game-board__btn-to-main btn';
  btnToMain.textContent = 'Back to Level selection';

  btnsGameBoard.appendChild(btnResetGame);
  btnsGameBoard.appendChild(btnSolutionGame);
  btnsGameBoard.appendChild(btnNextGame);
  btnsGameBoard.appendChild(btnRandomGame);
  btnsGameBoard.appendChild(btnContinueGame);
  btnsGameBoard.appendChild(btnSaveGame);
  btnsGameBoard.appendChild(btnToMain);

  btnRandomGame.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * levelsRandom.length);
    levelsRandom[randomIndex]();
  });

  const divMainGameBoard = document.createElement('div');
  divMainGameBoard.id = 'div-main-game-board';
  main.appendChild(divMainGameBoard);

  const divGameBoard = document.createElement('div');
  divGameBoard.id = 'main-div-game-board';
  divMainGameBoard.appendChild(divGameBoard);

  const gameBoard = document.createElement('div');
  gameBoard.className = 'main__game-board game-board';
  gameBoard.id = 'game-board';
  divGameBoard.appendChild(gameBoard);

  const gameField = document.createElement('div');
  gameField.className = 'game-board__game-field game-field';
  gameField.id = 'game-field';
  gameBoard.appendChild(gameField);

  const columnHints = document.createElement('div');
  columnHints.className = 'game-board__column-hints column-hints';
  columnHints.id = 'column-hints';
  gameBoard.appendChild(columnHints);

  const columnHintsLeft = document.getElementById('column-hints');

  const colHint = NONOGRAMS[nonogramIndex].cols;
  const rowHint = NONOGRAMS[nonogramIndex].rows;

  for (let i = 0; i < colHint[0].length; i++) {
    const hintCell = document.createElement('div');
    hintCell.className = 'column-hints__hint-cell';
    if (colHint[0][i] !== 0 ) {
      hintCell.textContent = colHint[0][i];
    } else {
      hintCell.textContent = '';
    }

    columnHintsLeft.appendChild(hintCell);
  }

  const gameFieldId = document.getElementById('game-field');

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const gameCell = document.createElement('div');
      gameCell.className = 'game-field__game-cell';
      gameCell.addEventListener('click', toggleCell);
      gameFieldId.appendChild(gameCell);
    }
  }

  const rowHints = document.createElement('div');
  rowHints.className = 'main__row-hints row-hints';
  rowHints.id = 'row-hints';
  divGameBoard.appendChild(rowHints);

  const rowHintsTop = document.getElementById('row-hints');

  for (let i = 0; i < rowHint[0].length; i++) {
    const hintCell = document.createElement('div');
    hintCell.className = 'row-hints__hint-cell';
    hintCell.textContent = rowHint[0][i]  !== 0 ? rowHint[0][i] : '';
    rowHintsTop.appendChild(hintCell);
  }

  const divTitle = document.createElement('div');
  divTitle.id = 'div-title';
  divMainGameBoard.appendChild(divTitle);

  const gameTimer = document.createElement('p');
  gameTimer.className = 'game-board-main__game-timer-main';
  gameTimer.style.fontSize = '20px';
  gameTimer.textContent = `Time - 00 : 00`;
  gameTimer.style.margin = '25px 0';
  gameTimer.style.width = 'auto';
  divTitle.appendChild(gameTimer);

  const nameTitleCross = document.createElement('h3');
  nameTitleCross.className = 'game-board-main__name-title-main';
  nameTitleCross.style.fontSize = '25px';
  nameTitleCross.style.maxWidth = '520px';
  nameTitleCross.style.textAlign = 'center';
  nameTitleCross.textContent = `Japanese crossword: easy level(5 x 5) - "${NONOGRAMS[nonogramIndex].name}"`;
  divTitle.appendChild(nameTitleCross);

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

    gameTimer.textContent = `Time - ${formattedSec} : ${formattedMillSec}`;
  }

  function startTimer() {
    timerInterval = setInterval(updateTimer, 100);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  }

  gameField.addEventListener('click', function() {
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
    gameTimer.textContent = `Time - 00 : 00`;
  }

  btnResetGame.addEventListener('click', function() {
    const gameCells = document.querySelectorAll('.game-field__game-cell');
    cellStates = [
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0
    ];
    gameCells.forEach(function(cell) {
      cell.classList.remove('filled');
    });
    gameCells.forEach(function(cell) {
      cell.classList.remove('cross');
    });
    gameWin = false;
    resetTimer();
  });

  let gameWin = false;
  const modalTextContent = document.querySelector('.modal-game-win__text-content');
  const modalGameWIn = document.querySelector('.body__modal-game-win');
  const overlay = document.querySelector('.overlay');
  const buttonClose = document.querySelector('.buttons-modal__close-btn');

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
    const gameCells = document.querySelectorAll('.game-field__game-cell');
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

  let cellStates = [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ];

  function toggleCell(event) {
    if (!gameWin) {
      const gameCell = event.target;
      const cellIndex = Array.from(gameCell.parentNode.children).indexOf(gameCell);

      if (event.button === 0) {
        cellStates[cellIndex] = cellStates[cellIndex] === 1 ? 0 : 1;
      }

      if (event.button === 2) {
        cellStates[cellIndex] = cellStates[cellIndex] === 2 ? 0 : 2;
      }

      gameCell.classList.remove('filled', 'cross');
      if (cellStates[cellIndex] === 1) {
        gameCell.classList.add('filled');
      } else if (cellStates[cellIndex] === 2) {
        gameCell.classList.add('cross');
      }

      const isFilled = gameCell.classList.contains('filled');
      const soundOption = localStorage.getItem('soundOption');

      if (isFilled) {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundPaintOver.pause();
          soundPaintOver.currentTime = 0;
          soundPaintOver.play();
        }
      } else {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundPaintOver.pause();
          soundOff.currentTime = 0;
          soundOff.play();
        }
      }

      checkWin(NONOGRAMS[nonogramIndex].data);
    }
  }

  gameField.addEventListener('contextmenu', function (event) {
    event.preventDefault();

    if (!gameWin && !timerInterval) {
      startTimer();
    }

    if (!gameWin) {
      const gameCell = event.target;

      if (event.button === 2) {
        const cellIndex = Array.from(gameCell.parentNode.children).indexOf(gameCell);

        cellStates[cellIndex] = cellStates[cellIndex] === 2 ? 0 : 2;

        gameCell.classList.toggle('filled', cellStates[cellIndex] === 1);

        const isCross = gameCell.classList.contains('cross');
        gameCell.classList.toggle('cross', cellStates[cellIndex] === 2);
        const soundOption = localStorage.getItem('soundOption');

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

        checkWin(NONOGRAMS[nonogramIndex].data);
      }
    }
  });

  btnSolutionGame.addEventListener('click', showSolution);

  function showSolution() {
    gameWin = true;
    resetTimer();
    stopTimer();

    const nonogramData = NONOGRAMS[nonogramIndex].data;
    const gameCells = document.querySelectorAll('.game-field__game-cell');

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

  btnSaveGame.addEventListener('click', saveGameData);

  function saveGameData() {
    const gameCells = document.querySelectorAll('.game-field__game-cell');
    const gameData = {
      seconds,
      milliseconds,
      nonogramIndex,
      cellStates
    };

    resetTimer();
    const serializedData = JSON.stringify(gameData);

    localStorage.setItem('savedGameData', serializedData);

    alert('Game data saved!');
    gameCells.forEach(function(cell) {
      cell.classList.remove('filled');
    });
    gameCells.forEach(function(cell) {
      cell.classList.remove('cross');
    });
  }

  btnContinueGame.addEventListener('click', continueGameData);

  function continueGameData() {
    const gameCells = document.querySelectorAll('.game-field__game-cell');
    const savedGameData = localStorage.getItem('savedGameData');

    if (savedGameData) {
      const parsedGameData = JSON.parse(savedGameData);
      columnHintsLeft.innerHTML = '';
      rowHintsTop.innerHTML = '';

      seconds = parsedGameData.seconds || 0;
      milliseconds = parsedGameData.milliseconds || 0;
      nonogramIndex = parsedGameData.nonogramIndex || 0;
      cellStates = parsedGameData.cellStates || [];
      updateTimer();

      nameTitleCross.textContent = `Japanese crossword: easy level(5 x 5) - "${NONOGRAMS[nonogramIndex].name}"`;
      const colHint = NONOGRAMS[nonogramIndex].cols;
      const rowHint = NONOGRAMS[nonogramIndex].rows;
      gameWin = false;

      for (let i = 0; i < colHint[0].length; i++) {
        const hintCell = document.createElement('div');
        hintCell.className = 'column-hints__hint-cell';
        if (colHint[0][i] !== 0) {
          hintCell.textContent = colHint[0][i];
        } else {
          hintCell.textContent = '';
        }
        columnHintsLeft.appendChild(hintCell);
      }

      for (let i = 0; i < rowHint[0].length; i++) {
        const hintCell = document.createElement('div');
        hintCell.className = 'row-hints__hint-cell';
        hintCell.textContent = rowHint[0][i] !== 0 ? rowHint[0][i] : '';
        rowHintsTop.appendChild(hintCell);
      }

      gameCells.forEach(function (cell, index) {
        cell.classList.remove('filled', 'cross');
        if (cellStates[index] === 1) {
          cell.classList.add('filled');
        } else if (cellStates[index] === 2) {
          cell.classList.add('cross');
        }
      });

      nextLevelClick();
      setupToMainButton();
    } else {
      alert('No saved game data found.');
    }
  }
}

let currentIndex;

export function showLevelsEasyCross() {
  nonogramIndex = 0;
  currentIndex = 0;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramEasyStart();
  nextLevelClick();
}

export function showLevelsEasyRhombus() {
  nonogramIndex = 1;
  currentIndex = 1;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramEasyStart();
  nextLevelClick();
}

export function showLevelsEasyHeart() {
  nonogramIndex = 2;
  currentIndex = 2;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramEasyStart();
  nextLevelClick();
}

export function showLevelsEasyPlus() {
  nonogramIndex = 3;
  currentIndex = 3;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramEasyStart();
  nextLevelClick();
}

export function showLevelsEasySnowflake() {
  nonogramIndex = 4;
  currentIndex = 4;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramEasyStart();
  nextLevelClick();
}

function nextLevelClick() {
  const btnNext = document.querySelector('.btns-game-board__btn-next');
  const easyLevels = [showLevelsEasyCross, showLevelsEasyRhombus, showLevelsEasyHeart, showLevelsEasyPlus, showLevelsEasySnowflake];

  btnNext.onclick = null;

  btnNext.onclick = function () {
    if (currentIndex < easyLevels.length) {
      easyLevels[currentIndex]();
      currentIndex++;
    }

    if (currentIndex === easyLevels.length) {
      currentIndex = 0;
    }
  };
  setupToMainButton();
}

function setupToMainButton() {
  const btnBackToMain = document.querySelector('.btns-game-board__btn-to-main');

  if (btnBackToMain) {
    btnBackToMain.addEventListener('click', function() {
      if (body.classList.contains('dark-mode')) {
        body.style.backgroundImage = 'url("./assets/img/img-background-white.jpg")';
        logoName.style.color = '#383838';
        iconRsschool.querySelector('svg').setAttribute('fill', '#383838');
      } else {
        body.style.backgroundImage = 'url("./assets/img/img-background.png")';
        logoName.style.color = '#973d40';
        iconRsschool.querySelector('svg').setAttribute('fill', '#973d40');
      }
      // const burgerMenuBtn = document.querySelector('.header__burger-menu-btn');
      // const burgerMenu = document.querySelector('.header__burger-menu');
      function checkScreenWidth() {
        if (window.innerWidth <= 1150) {
          // burgerMenu.style.display = 'flex';
          // burgerMenuBtn.style.display = 'flex';
          nav.style.display = 'flex';
        } else {
          // burgerMenu.style.display = 'none';
          // burgerMenuBtn.style.display = 'none';
          nav.style.display = 'flex';
        }
      }

      checkScreenWidth();
      window.addEventListener('resize', checkScreenWidth);

      removePreviousLevel();
      main.innerHTML = '';
      main.style.justifyContent = 'flex-end';
      main.style.flexDirection = 'row';
      main.style.gap = '50px';

      let nonogramIndex = 0;
      let gameWin = false;

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

      const modalTextContent = document.querySelector('.modal-game-win__text-content');
      const modalGameWIn = document.querySelector('.body__modal-game-win');
      const overlay = document.querySelector('.overlay');
      const buttonClose = document.querySelector('.buttons-modal__close-btn');

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
    } else {
    console.error('Button not found.');
  }
}

export function gameNonogramMediumStart() {
  if (body.classList.contains('dark-mode')) {
    body.style.backgroundImage = 'url("./assets/img/img-back-gameplay-white.jpg")';
    logoName.style.color = '#383838';
    iconRsschool.querySelector('svg').setAttribute('fill', '#383838');
  } else {
    body.style.backgroundImage = 'url("./assets/img/img-back-gameplay.png")';
    logoName.style.color = '#f1efca';
    iconRsschool.querySelector('svg').setAttribute('fill', '#f1efca');
  }
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundPosition = 'center center';

  // const burgerMenuBtn = document.querySelector('.header__burger-menu-btn');
  function checkScreenWidthForNewPage() {
    if (window.innerWidth <= 1150) {
      // burgerMenuBtn.style.display = 'none';
      nav.style.display = 'none';
    } else {
      nav.style.display = 'none';
    }

    if (window.innerWidth <= 1750) {
      main.style.height = 'auto';
      wrapper.style.height = 'auto';
    }
  }

  checkScreenWidthForNewPage();
  window.addEventListener('resize', checkScreenWidthForNewPage);

  removePreviousLevel();
  main.innerHTML = '';
  const btnsGameBoard = document.createElement('div');
  btnsGameBoard.className = 'main__btns-game-board btns-game-board';
  main.appendChild(btnsGameBoard);

  const btnResetGame = document.createElement('button');
  btnResetGame.className = 'btns-game-board__btn-reset btn';
  btnResetGame.textContent = 'Reset';

  const btnSolutionGame = document.createElement('button');
  btnSolutionGame.className = 'btns-game-board__btn-solution btn';
  btnSolutionGame.textContent = 'Solution';

  const btnNextGame = document.createElement('button');
  btnNextGame.className = 'btns-game-board__btn-next btn';
  btnNextGame.textContent = 'Next Sample - 10 x 10';

  const btnRandomGame = document.createElement('button');
  btnRandomGame.className = 'btns-game-board__btn-random btn';
  btnRandomGame.textContent = 'Random Game';

  const btnContinueGame = document.createElement('button');
  btnContinueGame.className = 'btns-game-board__btn-continue btn';
  btnContinueGame.textContent = 'Continue Game';

  const btnSaveGame = document.createElement('button');
  btnSaveGame.className = 'btns-game-board__btn-continue btn';
  btnSaveGame.textContent = 'Save Game';

  const btnToMain = document.createElement('button');
  btnToMain.className = 'btns-game-board__btn-to-main btn';
  btnToMain.textContent = 'Back to Level selection';

  btnsGameBoard.appendChild(btnResetGame);
  btnsGameBoard.appendChild(btnSolutionGame);
  btnsGameBoard.appendChild(btnNextGame);
  btnsGameBoard.appendChild(btnRandomGame);
  btnsGameBoard.appendChild(btnContinueGame);
  btnsGameBoard.appendChild(btnSaveGame);
  btnsGameBoard.appendChild(btnToMain);

  btnRandomGame.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * levelsRandom.length);
    levelsRandom[randomIndex]();
  });

  const divMainGameBoard = document.createElement('div');
  divMainGameBoard.id = 'div-main-game-board';
  main.appendChild(divMainGameBoard);

  const divGameBoard = document.createElement('div');
  divGameBoard.id = 'main-div-game-board';
  divMainGameBoard.appendChild(divGameBoard);

  const lineOne = document.createElement('div');
  lineOne.className = 'line-one';
  lineOne.style.height = '2px';
  lineOne.style.background = 'black';

  const lineTwo = document.createElement('div');
  lineTwo.className = 'line-two';
  lineTwo.style.width = '2px';
  lineTwo.style.background = 'black';

  divGameBoard.appendChild(lineOne);
  divGameBoard.appendChild(lineTwo);

  const gameBoard = document.createElement('div');
  gameBoard.className = 'main__game-board game-board';
  gameBoard.id = 'game-board';
  divGameBoard.appendChild(gameBoard);

  const gameField = document.createElement('div');
  gameField.className = 'game-board__game-field-medium game-field-medium';
  gameField.id = 'game-field';
  gameBoard.appendChild(gameField);

  const columnHints = document.createElement('div');
  columnHints.className = 'game-board__column-hints-medium column-hints-medium';
  columnHints.id = 'column-hints';
  gameBoard.appendChild(columnHints);

  const columnHintsLeft = document.getElementById('column-hints');

  const colHint = NONOGRAMS[nonogramIndex].cols;
  const rowHint = NONOGRAMS[nonogramIndex].rows;

  for (let i = 0; i < colHint[0].length; i++) {
    const hintCell = document.createElement('div');
    hintCell.className = 'column-hints-medium__hint-cell';
    if (colHint[0][i] !== 0 ) {
      hintCell.textContent = colHint[0][i];
    } else {
      hintCell.textContent = '';
    }

    columnHintsLeft.appendChild(hintCell);
  }

  const gameFieldId = document.getElementById('game-field');

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gameCell = document.createElement('div');
      gameCell.className = 'game-field-medium__game-cell';
      gameCell.addEventListener('click', toggleCell);
      gameFieldId.appendChild(gameCell);
    }
  }

  const rowHints = document.createElement('div');
  rowHints.className = 'main__row-hints-medium row-hints-medium';
  rowHints.id = 'row-hints';
  divGameBoard.appendChild(rowHints);

  const rowHintsTop = document.getElementById('row-hints');

  for (let i = 0; i < rowHint[0].length; i++) {
    const hintCell = document.createElement('div');
    hintCell.className = 'row-hints-medium__hint-cell';
    hintCell.textContent = rowHint[0][i]  !== 0 ? rowHint[0][i] : '';
    rowHintsTop.appendChild(hintCell);
  }

  const divTitle = document.createElement('div');
  divTitle.id = 'div-title';
  divMainGameBoard.appendChild(divTitle);

  const gameTimer = document.createElement('p');
  gameTimer.className = 'game-board-main__game-timer-main';
  gameTimer.style.fontSize = '20px';
  gameTimer.textContent = `Time - 00 : 00`;
  gameTimer.style.margin = '25px 0';
  gameTimer.style.width = 'auto';
  divTitle.appendChild(gameTimer);

  const nameTitleCross = document.createElement('h3');
  nameTitleCross.className = 'game-board-main__name-title-main';
  nameTitleCross.style.fontSize = '20px';
  nameTitleCross.style.maxWidth = '480px';
  nameTitleCross.style.textAlign = 'center';
  nameTitleCross.textContent = `Japanese crossword: medium level(10 x 10) - "${NONOGRAMS[nonogramIndex].name}"`;
  divTitle.appendChild(nameTitleCross);

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

    gameTimer.textContent = `Time - ${formattedSec} : ${formattedMillSec}`;
  }

  function startTimer() {
    timerInterval = setInterval(updateTimer, 100);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  }

  gameField.addEventListener('click', function() {
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
    gameTimer.textContent = `Time - 00 : 00`;
  }

  btnResetGame.addEventListener('click', function() {
    const gameCells = document.querySelectorAll('.game-field-medium__game-cell');
    cellStates = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

    gameCells.forEach(function(cell) {
      cell.classList.remove('filled');
    });
    gameCells.forEach(function(cell) {
      cell.classList.remove('cross');
    });
    gameWin = false;
    resetTimer();
  });

  let gameWin = false;
  const modalTextContent = document.querySelector('.modal-game-win__text-content');
  const modalGameWIn = document.querySelector('.body__modal-game-win');
  const overlay = document.querySelector('.overlay');
  const buttonClose = document.querySelector('.buttons-modal__close-btn');

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
    const gameCells = document.querySelectorAll('.game-field-medium__game-cell');
    let win = true;

    for (let i = 0; i < gameCells.length; i++) {
      const row = Math.floor(i / 10);
      const col = i % 10;

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

  let cellStates = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ];

  function toggleCell(event) {
    if (!gameWin) {
      const gameCell = event.target;
      const cellIndex = Array.from(gameCell.parentNode.children).indexOf(gameCell);

      if (event.button === 0) {
        cellStates[cellIndex] = cellStates[cellIndex] === 1 ? 0 : 1;
      }

      if (event.button === 2) {
        cellStates[cellIndex] = cellStates[cellIndex] === 2 ? 0 : 2;
      }

      gameCell.classList.remove('filled', 'cross');
      if (cellStates[cellIndex] === 1) {
        gameCell.classList.add('filled');
      } else if (cellStates[cellIndex] === 2) {
        gameCell.classList.add('cross');
      }

      const isFilled = gameCell.classList.contains('filled');
      const soundOption = localStorage.getItem('soundOption');

      if (isFilled) {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundPaintOver.pause();
          soundPaintOver.currentTime = 0;
          soundPaintOver.play();
        }
      } else {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundPaintOver.pause();
          soundOff.currentTime = 0;
          soundOff.play();
        }
      }

      checkWin(NONOGRAMS[nonogramIndex].data);
    }
  }

  gameField.addEventListener('contextmenu', function (event) {
    event.preventDefault();

    if (!gameWin && !timerInterval) {
      startTimer();
    }

    if (!gameWin) {
      const gameCell = event.target;

      if (event.button === 2) {
        const cellIndex = Array.from(gameCell.parentNode.children).indexOf(gameCell);

        cellStates[cellIndex] = cellStates[cellIndex] === 2 ? 0 : 2;

        gameCell.classList.toggle('filled', cellStates[cellIndex] === 1);

        const isCross = gameCell.classList.contains('cross');
        gameCell.classList.toggle('cross', cellStates[cellIndex] === 2);
        const soundOption = localStorage.getItem('soundOption');

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

        checkWin(NONOGRAMS[nonogramIndex].data);
      }
    }
  });

  btnSolutionGame.addEventListener('click', showSolution);

  function showSolution() {
    gameWin = true;
    resetTimer();
    stopTimer();

    const nonogramData = NONOGRAMS[nonogramIndex].data;
    const gameCells = document.querySelectorAll('.game-field-medium__game-cell');

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

  btnSaveGame.addEventListener('click', saveGameMediumData);

  function saveGameMediumData() {
    const gameCells = document.querySelectorAll('.game-field-medium__game-cell');
    const gameData = {
      seconds,
      milliseconds,
      nonogramIndex,
      cellStates
    };

    resetTimer();
    const serializedData = JSON.stringify(gameData);

    localStorage.setItem('saveGameMediumData', serializedData);

    alert('Game data saved!');
    gameCells.forEach(function(cell) {
      cell.classList.remove('filled');
    });
    gameCells.forEach(function(cell) {
      cell.classList.remove('cross');
    });
  }

  btnContinueGame.addEventListener('click', continueGameMediumData);

  function continueGameMediumData() {
    const gameCells = document.querySelectorAll('.game-field-medium__game-cell');
    const saveGameMediumData = localStorage.getItem('saveGameMediumData');

    if (saveGameMediumData) {
      const parsedGameData = JSON.parse(saveGameMediumData);
      columnHintsLeft.innerHTML = '';
      rowHintsTop.innerHTML = '';

      seconds = parsedGameData.seconds || 0;
      milliseconds = parsedGameData.milliseconds || 0;
      nonogramIndex = parsedGameData.nonogramIndex || 0;
      cellStates = parsedGameData.cellStates || [];
      updateTimer();

      nameTitleCross.textContent = `Japanese crossword: medium level(10 x 10) - "${NONOGRAMS[nonogramIndex].name}"`;
      const colHint = NONOGRAMS[nonogramIndex].cols;
      const rowHint = NONOGRAMS[nonogramIndex].rows;
      gameWin = false;

      for (let i = 0; i < colHint[0].length; i++) {
        const hintCell = document.createElement('div');
        hintCell.className = 'column-hints-medium__hint-cell';
        if (colHint[0][i] !== 0) {
          hintCell.textContent = colHint[0][i];
        } else {
          hintCell.textContent = '';
        }
        columnHintsLeft.appendChild(hintCell);
      }

      for (let i = 0; i < rowHint[0].length; i++) {
        const hintCell = document.createElement('div');
        hintCell.className = 'row-hints-medium__hint-cell';
        hintCell.textContent = rowHint[0][i] !== 0 ? rowHint[0][i] : '';
        rowHintsTop.appendChild(hintCell);
      }

      gameCells.forEach(function (cell, index) {
        cell.classList.remove('filled', 'cross');
        if (cellStates[index] === 1) {
          cell.classList.add('filled');
        } else if (cellStates[index] === 2) {
          cell.classList.add('cross');
        }
      });

      nextLevelMediumClick();
      setupToMainButton();
    } else {
      alert('No saved game data found.');
    }
  }
}

export function showLevelsMediumCrab() {
  nonogramIndex = 5;
  currentIndex = 0;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramMediumStart();
  nextLevelMediumClick();
}

export function showLevelsMediumCoffee() {
  nonogramIndex = 6;
  currentIndex = 1;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramMediumStart();
  nextLevelMediumClick();
}

export function showLevelsMediumBasket() {
  nonogramIndex = 7;
  currentIndex = 2;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramMediumStart();
  nextLevelMediumClick();
}

export function showLevelsMediumHelicopter() {
  nonogramIndex = 8;
  currentIndex = 3;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramMediumStart();
  nextLevelMediumClick();
}

export function showLevelsMediumCup() {
  nonogramIndex = 9;
  currentIndex = 4;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramMediumStart();
  nextLevelMediumClick();
}

function nextLevelMediumClick() {
  const btnNext = document.querySelector('.btns-game-board__btn-next');
  const mediumLevels = [showLevelsMediumCrab, showLevelsMediumCoffee, showLevelsMediumBasket, showLevelsMediumHelicopter, showLevelsMediumCup];

  btnNext.onclick = null;

  btnNext.onclick = function () {
    if (currentIndex < mediumLevels.length) {
      mediumLevels[currentIndex]();
      currentIndex++;
    }

    if (currentIndex === mediumLevels.length) {
      currentIndex = 0;
    }
  };
  setupToMainButton();
}

export function gameNonogramHardStart() {
  if (body.classList.contains('dark-mode')) {
    body.style.backgroundImage = 'url("./assets/img/img-back-gameplay-white.jpg")';
    logoName.style.color = '#383838';
    iconRsschool.querySelector('svg').setAttribute('fill', '#383838');
  } else {
    body.style.backgroundImage = 'url("./assets/img/img-back-gameplay.png")';
    logoName.style.color = '#f1efca';
    iconRsschool.querySelector('svg').setAttribute('fill', '#f1efca');
  }
  body.style.backgroundSize = 'cover';
  body.style.backgroundRepeat = 'no-repeat';
  body.style.backgroundPosition = 'center center';

  // const burgerMenuBtn = document.querySelector('.header__burger-menu-btn');
  function checkScreenWidthForNewPage() {
    if (window.innerWidth <= 1150) {
      // burgerMenuBtn.style.display = 'none';
      nav.style.display = 'none';
    } else {
      nav.style.display = 'none';
    }

    if (window.innerWidth <= 1750) {
      main.style.height = 'auto';
      wrapper.style.height = 'auto';
    }
  }

  checkScreenWidthForNewPage();
  window.addEventListener('resize', checkScreenWidthForNewPage);

  removePreviousLevel();
  main.innerHTML = '';
  const btnsGameBoard = document.createElement('div');
  btnsGameBoard.className = 'main__btns-game-board btns-game-board';
  main.appendChild(btnsGameBoard);
  btnsGameBoard.style.maxWidth = '825px';

  const btnResetGame = document.createElement('button');
  btnResetGame.className = 'btns-game-board__btn-reset btn';
  btnResetGame.textContent = 'Reset';

  const btnSolutionGame = document.createElement('button');
  btnSolutionGame.className = 'btns-game-board__btn-solution btn';
  btnSolutionGame.textContent = 'Solution';

  const btnNextGame = document.createElement('button');
  btnNextGame.className = 'btns-game-board__btn-next btn';
  btnNextGame.textContent = 'Next Sample - 15 x 15';

  const btnRandomGame = document.createElement('button');
  btnRandomGame.className = 'btns-game-board__btn-random btn';
  btnRandomGame.textContent = 'Random Game';

  const btnContinueGame = document.createElement('button');
  btnContinueGame.className = 'btns-game-board__btn-continue btn';
  btnContinueGame.textContent = 'Continue Game';

  const btnSaveGame = document.createElement('button');
  btnSaveGame.className = 'btns-game-board__btn-continue btn';
  btnSaveGame.textContent = 'Save Game';

  const btnToMain = document.createElement('button');
  btnToMain.className = 'btns-game-board__btn-to-main btn';
  btnToMain.textContent = 'Back to Level selection';

  btnsGameBoard.appendChild(btnResetGame);
  btnsGameBoard.appendChild(btnSolutionGame);
  btnsGameBoard.appendChild(btnNextGame);
  btnsGameBoard.appendChild(btnRandomGame);
  btnsGameBoard.appendChild(btnContinueGame);
  btnsGameBoard.appendChild(btnSaveGame);
  btnsGameBoard.appendChild(btnToMain);

  btnRandomGame.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * levelsRandom.length);
    levelsRandom[randomIndex]();
  });

  const divMainGameBoard = document.createElement('div');
  divMainGameBoard.id = 'div-main-game-board';
  main.appendChild(divMainGameBoard);

  const divGameBoard = document.createElement('div');
  divGameBoard.id = 'main-div-game-board';
  divMainGameBoard.appendChild(divGameBoard);

  const lineOne = document.createElement('div');
  lineOne.className = 'line-one-hard';
  lineOne.style.background = 'black';

  const lineTwo = document.createElement('div');
  lineTwo.className = 'line-two-hard';
  lineTwo.style.background = 'black';

  const lineThree = document.createElement('div');
  lineThree.className = 'line-three-hard';
  lineThree.style.width = '2px';
  lineThree.style.background = 'black';

  const lineFour = document.createElement('div');
  lineFour.className = 'line-four-hard';
  lineFour.style.width = '2px';
  lineFour.style.background = 'black';

  divGameBoard.appendChild(lineOne);
  divGameBoard.appendChild(lineTwo);
  divGameBoard.appendChild(lineThree);
  divGameBoard.appendChild(lineFour);

  const gameBoard = document.createElement('div');
  gameBoard.className = 'main__game-board game-board';
  gameBoard.id = 'game-board';
  divGameBoard.appendChild(gameBoard);

  const gameField = document.createElement('div');
  gameField.className = 'game-board__game-field-hard game-field-hard';
  gameField.id = 'game-field';
  gameBoard.appendChild(gameField);

  const columnHints = document.createElement('div');
  columnHints.className = 'game-board__column-hints-hard column-hints-hard';
  columnHints.id = 'column-hints';
  gameBoard.appendChild(columnHints);

  const columnHintsLeft = document.getElementById('column-hints');

  const colHint = NONOGRAMS[nonogramIndex].cols;
  const rowHint = NONOGRAMS[nonogramIndex].rows;

  for (let i = 0; i < colHint[0].length; i++) {
    const hintCell = document.createElement('div');
    hintCell.className = 'column-hints-hard__hint-cell';
    if (colHint[0][i] !== 0 ) {
      hintCell.textContent = colHint[0][i];
    } else {
      hintCell.textContent = '';
    }

    columnHintsLeft.appendChild(hintCell);
  }

  const gameFieldId = document.getElementById('game-field');

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      const gameCell = document.createElement('div');
      gameCell.className = 'game-field-hard__game-cell';
      gameCell.addEventListener('click', toggleCell);
      gameFieldId.appendChild(gameCell);
    }
  }

  const rowHints = document.createElement('div');
  rowHints.className = 'main__row-hints-hard row-hints-hard';
  rowHints.id = 'row-hints';
  divGameBoard.appendChild(rowHints);

  const rowHintsTop = document.getElementById('row-hints');

  for (let i = 0; i < rowHint[0].length; i++) {
    const hintCell = document.createElement('div');
    hintCell.className = 'row-hints-hard__hint-cell';
    hintCell.textContent = rowHint[0][i]  !== 0 ? rowHint[0][i] : '';
    rowHintsTop.appendChild(hintCell);
  }

  const divTitle = document.createElement('div');
  divTitle.id = 'div-title';
  divMainGameBoard.appendChild(divTitle);

  const gameTimer = document.createElement('p');
  gameTimer.className = 'game-board-main__game-timer-main';
  gameTimer.style.fontSize = '20px';
  gameTimer.textContent = `Time - 00 : 00`;
  gameTimer.style.margin = '25px 0';
  gameTimer.style.width = 'auto';
  divTitle.appendChild(gameTimer);

  const nameTitleCross = document.createElement('h3');
  nameTitleCross.className = 'game-board-main__name-title-main';
  nameTitleCross.style.fontSize = '20px';
  nameTitleCross.style.maxWidth = '440px';
  nameTitleCross.style.textAlign = 'center';
  nameTitleCross.textContent = `Japanese crossword: hard level(15 x 15) - "${NONOGRAMS[nonogramIndex].name}"`;
  divTitle.appendChild(nameTitleCross);

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

    gameTimer.textContent = `Time - ${formattedSec} : ${formattedMillSec}`;
  }

  function startTimer() {
    timerInterval = setInterval(updateTimer, 100);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  }

  gameField.addEventListener('click', function() {
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
    gameTimer.textContent = `Time - 00 : 00`;
  }

  btnResetGame.addEventListener('click', function() {
    const gameCells = document.querySelectorAll('.game-field-hard__game-cell');
    cellStates = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];

    gameCells.forEach(function(cell) {
      cell.classList.remove('filled');
    });
    gameCells.forEach(function(cell) {
      cell.classList.remove('cross');
    });
    gameWin = false;
    resetTimer();
  });

  let gameWin = false;
  const modalTextContent = document.querySelector('.modal-game-win__text-content');
  const modalGameWIn = document.querySelector('.body__modal-game-win');
  const overlay = document.querySelector('.overlay');
  const buttonClose = document.querySelector('.buttons-modal__close-btn');

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
    const gameCells = document.querySelectorAll('.game-field-hard__game-cell');
    let win = true;

    for (let i = 0; i < gameCells.length; i++) {
      const row = Math.floor(i / 15);
      const col = i % 15;

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

  let cellStates = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  function toggleCell(event) {
    if (!gameWin) {
      const gameCell = event.target;
      const cellIndex = Array.from(gameCell.parentNode.children).indexOf(gameCell);

      if (event.button === 0) {
        cellStates[cellIndex] = cellStates[cellIndex] === 1 ? 0 : 1;
      }

      if (event.button === 2) {
        cellStates[cellIndex] = cellStates[cellIndex] === 2 ? 0 : 2;
      }

      gameCell.classList.remove('filled', 'cross');
      if (cellStates[cellIndex] === 1) {
        gameCell.classList.add('filled');
      } else if (cellStates[cellIndex] === 2) {
        gameCell.classList.add('cross');
      }

      const isFilled = gameCell.classList.contains('filled');
      const soundOption = localStorage.getItem('soundOption');
      if (isFilled) {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundPaintOver.pause();
          soundPaintOver.currentTime = 0;
          soundPaintOver.play();
        }
      } else {
        if (soundOption === 'off') {
          removeAudioElements();
        } else {
          soundPaintOver.pause();
          soundOff.currentTime = 0;
          soundOff.play();
        }
      }

      checkWin(NONOGRAMS[nonogramIndex].data);
    }
  }

  gameField.addEventListener('contextmenu', function (event) {
    event.preventDefault();

    if (!gameWin && !timerInterval) {
      startTimer();
    }

    if (!gameWin) {
      const gameCell = event.target;

      if (event.button === 2) {
        const cellIndex = Array.from(gameCell.parentNode.children).indexOf(gameCell);

        cellStates[cellIndex] = cellStates[cellIndex] === 2 ? 0 : 2;

        gameCell.classList.toggle('filled', cellStates[cellIndex] === 1);

        const isCross = gameCell.classList.contains('cross');
        gameCell.classList.toggle('cross', cellStates[cellIndex] === 2);
        const soundOption = localStorage.getItem('soundOption');

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

        checkWin(NONOGRAMS[nonogramIndex].data);
      }
    }
  });

  btnSolutionGame.addEventListener('click', showSolution);

  function showSolution() {
    gameWin = true;
    resetTimer();
    stopTimer();

    const nonogramData = NONOGRAMS[nonogramIndex].data;
    const gameCells = document.querySelectorAll('.game-field-hard__game-cell');

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

  btnSaveGame.addEventListener('click', saveGameHardData);

  function saveGameHardData() {
    const gameCells = document.querySelectorAll('.game-field-hard__game-cell');
    const gameData = {
      seconds,
      milliseconds,
      nonogramIndex,
      cellStates
    };

    resetTimer();
    const serializedData = JSON.stringify(gameData);

    localStorage.setItem('saveGameHardData', serializedData);

    alert('Game data saved!');
    gameCells.forEach(function(cell) {
      cell.classList.remove('filled');
    });
    gameCells.forEach(function(cell) {
      cell.classList.remove('cross');
    });
  }

  btnContinueGame.addEventListener('click', continueGameHardData);

  function continueGameHardData() {
    const gameCells = document.querySelectorAll('.game-field-hard__game-cell');
    const saveGameHardData = localStorage.getItem('saveGameHardData');

    if (saveGameHardData) {
      const parsedGameData = JSON.parse(saveGameHardData);
      columnHintsLeft.innerHTML = '';
      rowHintsTop.innerHTML = '';

      seconds = parsedGameData.seconds || 0;
      milliseconds = parsedGameData.milliseconds || 0;
      nonogramIndex = parsedGameData.nonogramIndex || 0;
      cellStates = parsedGameData.cellStates || [];
      updateTimer();

      nameTitleCross.textContent = `Japanese crossword: hard level(15 x 15) - "${NONOGRAMS[nonogramIndex].name}"`;
      const colHint = NONOGRAMS[nonogramIndex].cols;
      const rowHint = NONOGRAMS[nonogramIndex].rows;
      gameWin = false;

      for (let i = 0; i < colHint[0].length; i++) {
        const hintCell = document.createElement('div');
        hintCell.className = 'column-hints-hard__hint-cell';
        if (colHint[0][i] !== 0) {
          hintCell.textContent = colHint[0][i];
        } else {
          hintCell.textContent = '';
        }
        columnHintsLeft.appendChild(hintCell);
      }

      for (let i = 0; i < rowHint[0].length; i++) {
        const hintCell = document.createElement('div');
        hintCell.className = 'row-hints-hard__hint-cell';
        hintCell.textContent = rowHint[0][i] !== 0 ? rowHint[0][i] : '';
        rowHintsTop.appendChild(hintCell);
      }

      gameCells.forEach(function (cell, index) {
        cell.classList.remove('filled', 'cross');
        if (cellStates[index] === 1) {
          cell.classList.add('filled');
        } else if (cellStates[index] === 2) {
          cell.classList.add('cross');
        }
      });

      nextLevelHardClick();
      setupToMainButton();
    } else {
      alert('No saved game data found.');
    }
  }
}

export function showLevelsHardDino() {
  nonogramIndex = 10;
  currentIndex = 0;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramHardStart();
  nextLevelHardClick();
}

export function showLevelsHardFish() {
  nonogramIndex = 11;
  currentIndex = 1;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramHardStart();
  nextLevelHardClick();
}

export function showLevelsHardBirds() {
  nonogramIndex = 12;
  currentIndex = 2;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramHardStart();
  nextLevelHardClick();
}

export function showLevelsHardHouse() {
  nonogramIndex = 13;
  currentIndex = 3;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramHardStart();
  nextLevelHardClick();
}

export function showLevelsHardIceCreame() {
  nonogramIndex = 14;
  currentIndex = 4;
  main.style.justifyContent = 'center';
  main.style.flexDirection = 'column-reverse';
  main.style.gap = '0';
  gameNonogramHardStart();
  nextLevelHardClick();
}

function nextLevelHardClick() {
  const btnNext = document.querySelector('.btns-game-board__btn-next');
  const hardLevels = [showLevelsHardDino, showLevelsHardFish, showLevelsHardBirds, showLevelsHardHouse, showLevelsHardIceCreame];

  btnNext.onclick = null;

  btnNext.onclick = function () {
    if (currentIndex < hardLevels.length) {
      hardLevels[currentIndex]();
      currentIndex++;
    }

    if (currentIndex === hardLevels.length) {
      currentIndex = 0;
    }
  };
  setupToMainButton();
}

const levelsRandom = [
  showLevelsEasyCross, showLevelsEasyRhombus, showLevelsEasyHeart, showLevelsEasyPlus, showLevelsEasySnowflake,
  showLevelsMediumCrab, showLevelsMediumCoffee, showLevelsMediumBasket, showLevelsMediumHelicopter, showLevelsMediumCup,
  showLevelsHardDino, showLevelsHardFish, showLevelsHardBirds, showLevelsHardHouse, showLevelsHardIceCreame
]

const btnRandomGame = document.createElement('button');
btnRandomGame.addEventListener('click', function() {
  const randomIndex = Math.floor(Math.random() * levelsRandom.length);
  levelsRandom[randomIndex]();
});