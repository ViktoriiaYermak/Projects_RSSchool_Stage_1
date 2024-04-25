const questions = [

  {
    question: 'What is the highest mountain in the world?',
    answer: 'EVEREST'
  },

  {
    question: 'What is the deepest lake in the world?',
    answer: 'BAIKAL'
  },

  {
    question: 'What bird is called the forest doctor?',
    answer: 'WOODPECKER'
  },

  {
    question: 'Which flower is still considered a symbol of Japan and the Sun itself?',
    answer: 'CHRYSANTHEMUM'
  },

  {
    question: 'What evergreen tree are pianos and violins made from?',
    answer: 'SPRUCE'
  },

  {
    question: 'What kind of milk has no one drank?',
    answer: 'BIRDS'
  },

  {
    question: 'What can you see with your eyes closed?',
    answer: 'DREAM'
  },

  {
    question: 'How many rays does an ordinary snowflake have?',
    answer: 'SIX'
  },

  {
    question: 'The ancient Slavs called this holiday “Farewell to Winter.” What other name does this holiday have?',
    answer: 'MASLENITSA'
  },

  {
    question: 'What is the name of a goal scored by a player against his team?',
    answer: 'AUTOGOLE'
  }

];

let randomNum, question, answer;
randomNum = getRandomArbitrary(0, 10);
question = questions[randomNum]['question'];
answer = questions[randomNum]['answer'];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function startHangmanGame () {
  document.body.classList.add('body');

  const gameSection = document.createElement('div');
  gameSection.className = ('game-section');
  document.body.appendChild(gameSection);

  const gameSectionLeft = document.createElement('aside');
  gameSectionLeft.className = 'game-section__left-side left-side';
  gameSection.appendChild(gameSectionLeft);

  const gameSectionLeftSide = document.querySelector('.game-section__left-side');

  const imgGallows = document.createElement('img');
  imgGallows.className = 'left-side__img';
  imgGallows.src = './assets/img/gallows.png';
  imgGallows.alt = 'Gallows';

  const imgHeadMan = document.createElement('img');
  imgHeadMan.className = 'left-side__img-head-man img-body-part';
  imgHeadMan.src = './assets/img/head.png';
  imgHeadMan.alt = 'Head';

  const imgBodyMan = document.createElement('img');
  imgBodyMan.className = 'left-side__img-body-man img-body-part';
  imgBodyMan.src = './assets/img/body.png';
  imgBodyMan.alt = 'Body';

  const imgHandLeftMan = document.createElement('img');
  imgHandLeftMan.className = 'left-side__img-hand-left-man img-body-part';
  imgHandLeftMan.src = './assets/img/hand-left.png';
  imgHandLeftMan.alt = 'Hand left';

  const imgHandRightMan = document.createElement('img');
  imgHandRightMan.className = 'left-side__img-hand-right-man img-body-part';
  imgHandRightMan.src = './assets/img/hand-right.png';
  imgHandRightMan.alt = 'Hand right';

  const imgLegLeftMan = document.createElement('img');
  imgLegLeftMan.className = 'left-side__img-leg-left-man img-body-part';
  imgLegLeftMan.src = './assets/img/leg-left.png';
  imgLegLeftMan.alt = 'Leg left';

  const imgLegRightMan = document.createElement('img');
  imgLegRightMan.className = 'left-side__img-leg-right-man img-body-part';
  imgLegRightMan.src = './assets/img/leg-right.png';
  imgLegRightMan.alt = 'Leg right';

  const h1Name = document.createElement('h1');
  h1Name.className = 'left-side__name';
  h1Name.textContent = 'Hangman Game';

  const audio = document.createElement('audio');
  const audioSource = document.createElement('source');
  audioSource.src = './assets/song/parched.mp3';
  audioSource.type = 'audio/mp3';
  audio.appendChild(audioSource);

  gameSectionLeftSide.appendChild(imgGallows);
  gameSectionLeftSide.appendChild(imgHeadMan);
  gameSectionLeftSide.appendChild(imgBodyMan);
  gameSectionLeftSide.appendChild(imgHandLeftMan);
  gameSectionLeftSide.appendChild(imgHandRightMan);
  gameSectionLeftSide.appendChild(imgLegLeftMan);
  gameSectionLeftSide.appendChild(imgLegRightMan);
  gameSectionLeftSide.appendChild(h1Name);
  gameSectionLeftSide.appendChild(audio);

  const gameSectionRight = document.createElement('aside');
  gameSectionRight.className = 'game-section__right-side right-side';
  gameSection.appendChild(gameSectionRight);

  const gameSectionRightSide = document.querySelector('.game-section__right-side');

  const rightSideLineWord = document.createElement('div');

  rightSideLineWord.classList.add('right-side__line-word');

  for (let i = 0; i < answer.length; i++) {
    const lineWordDiv = document.createElement('div');

    lineWordDiv.classList.add('line-word');
    rightSideLineWord.appendChild(lineWordDiv);
  }

  const pQuestionWord = document.createElement('p');
  pQuestionWord.className = 'right-side__question-word';
  pQuestionWord.textContent = `Hint: ${question}`;

  const pErrorsWord = document.createElement('p');
  pErrorsWord.className = 'right-side__errors-word';
  pErrorsWord.textContent = 'Incorrect guesses:';
  const incorrectGuesses = document.createElement('span');
  incorrectGuesses.className = 'incorrect-guesses';
  incorrectGuesses.textContent = ' 0 / 6';
  incorrectGuesses.style.color = '#d9588e';
  pErrorsWord.appendChild(incorrectGuesses);

  const lettersKeyboard = document.createElement('div');
  lettersKeyboard.className = 'right-side__letters-keyboard';

  gameSectionRightSide.appendChild(rightSideLineWord);
  gameSectionRightSide.appendChild(pQuestionWord);
  gameSectionRightSide.appendChild(pErrorsWord);
  gameSectionRightSide.appendChild(lettersKeyboard);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  letters.forEach(letter => {
    const lettersName = document.createElement('button');
    lettersName.className = 'letters-name';
    lettersName.textContent = letter;
    lettersKeyboard.appendChild(lettersName);
  });

  const modalHangman = document.createElement('div');
  modalHangman.className = 'modal-hangman';
  modalHangman.id = 'my-modal';
  document.body.appendChild(modalHangman);

  const modalHangmans = document.querySelector('.modal-hangman');

  const crossModal = document.createElement('div');
  crossModal.className = 'modal-hangman__cross';
  crossModal.id = 'close-modal-btn';
  crossModal.textContent = 'X';

  const resultGame = document.createElement('div');
  resultGame.className = 'modal-hangman__result-game';

  modalHangmans.appendChild(crossModal);
  modalHangmans.appendChild(resultGame);

  const resultTextCreate = document.createElement('p');
  resultTextCreate.className = 'result-text';
  resultTextCreate.textContent = 'Game Win !';

  const secretWordCreate = document.createElement('p');
  secretWordCreate.className = 'secret-word';
  secretWordCreate.textContent = 'Secret Word:';

  const btnNewGame = document.createElement('button');
  btnNewGame.className = 'btn-new-game';
  btnNewGame.id = 'btn-new-game';
  btnNewGame.textContent = 'Play again';

  resultGame.appendChild(resultTextCreate);
  resultGame.appendChild(secretWordCreate);
  resultGame.appendChild(btnNewGame);

  const spanSecretWord = document.createElement('span');
  spanSecretWord.className = 'modal-secret-word';
  secretWordCreate.appendChild(spanSecretWord);

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  overlay.id = 'overlay';
  document.body.appendChild(overlay);
}

startHangmanGame ();

const lettersNames = document.querySelectorAll('.letters-name');
let incorrectGuesses = 0;
let correctGuesses = 0;

lettersNames.forEach((lettersName) => {
  lettersName.addEventListener('click', function() {
    const letter = lettersName.textContent.toUpperCase();
    const incorrectGuessesWord = document.querySelector('.incorrect-guesses');
    const headMan = document.querySelector('.left-side__img-head-man');
    const bodyMan = document.querySelector('.left-side__img-body-man');
    const handLeftMan = document.querySelector('.left-side__img-hand-left-man');
    const handRightMan = document.querySelector('.left-side__img-hand-right-man');
    const legLeftMan = document.querySelector('.left-side__img-leg-left-man');
    const legRightMan = document.querySelector('.left-side__img-leg-right-man');
    const secretWord = document.querySelector('.modal-secret-word');
    const resultText = document.querySelector('.result-text');
    const audio = document.querySelector('audio');

    if (answer.includes(letter)) {
      document.querySelectorAll('.line-word').forEach((lineWord, index) => {
        if (answer[index] === letter) {
          lineWord.classList.add('active');
          lettersName.disabled = true;
          lettersName.classList.add('active');
          lineWord.textContent = letter;
          correctGuesses++;
        }
        if (correctGuesses  === answer.length) {
          openModal();
          secretWord.textContent = `${answer}`;
          resultText.textContent = 'Game Win !';
        }
      });
    } else {
      lettersName.classList.add('active');
      lettersName.disabled = true;
      incorrectGuesses++;
      incorrectGuessesWord.textContent = ` ${incorrectGuesses} / 6`;

      switch (incorrectGuesses) {
        case 1:
          headMan.style.opacity = 1;
          audio.play();
          break;
        case 2:
          bodyMan.style.opacity = 1;
          audio.pause();
          audio.currentTime = 0;
          audio.play();
          break;
        case 3:
          handLeftMan.style.opacity = 1;
          audio.pause();
          audio.currentTime = 0;
          audio.play();
          break;
        case 4:
          handRightMan.style.opacity = 1;
          audio.pause();
          audio.currentTime = 0;
          audio.play();
          break;
        case 5:
          legLeftMan.style.opacity = 1;
          audio.pause();
          audio.currentTime = 0;
          audio.play();
          break;
        case 6:
          legRightMan.style.opacity = 1;
          audio.pause();
          audio.currentTime = 0;
          audio.play();
          secretWord.textContent = ` ${answer}`;
          resultText.textContent = 'Game Over !';
          openModal();
        break;
      }
    }
  });
});

const openModalBtn = document.querySelector('.modal-hangman');
const closeModalBtn = document.getElementById('close-modal-btn');
const btnNewGameClick = document.getElementById('btn-new-game');
const modal = document.getElementById('my-modal');
const overlay = document.getElementById('overlay');
let isModalOpen = false;

// function resetHangmanGame() {
//   window.location.reload();
// }

function resetHangmanGame() {
  randomNum = getRandomArbitrary(0, 10);
  question = questions[randomNum]['question'];
  answer = questions[randomNum]['answer'];
  console.log(answer);

  incorrectGuesses = 0;
  correctGuesses = 0;

  const lettersNames = document.querySelectorAll('.letters-name');
  const incorrectGuessesWord = document.querySelector('.incorrect-guesses');
  const headMan = document.querySelector('.left-side__img-head-man');
  const bodyMan = document.querySelector('.left-side__img-body-man');
  const handLeftMan = document.querySelector('.left-side__img-hand-left-man');
  const handRightMan = document.querySelector('.left-side__img-hand-right-man');
  const legLeftMan = document.querySelector('.left-side__img-leg-left-man');
  const legRightMan = document.querySelector('.left-side__img-leg-right-man');
  const rightSideLineWord = document.querySelector('.right-side__line-word');
  const resultText = document.querySelector('.result-text');
  const secretWord = document.querySelector('.modal-secret-word');
  const audio = document.querySelector('audio');
  const rightSideQuestionWord = document.querySelector('.right-side__question-word');

  rightSideQuestionWord.textContent = `Hint: ${question}`;

  lettersNames.forEach((lettersName) => {
    lettersName.classList.remove('active');
    lettersName.disabled = false;
  });

  rightSideLineWord.innerHTML = '';
  for (let i = 0; i < answer.length; i++) {
    const lineWordDiv = document.createElement('div');

    lineWordDiv.classList.add('line-word');
    rightSideLineWord.appendChild(lineWordDiv);
  }

  incorrectGuessesWord.textContent = ' 0 / 6';

  const imgElements = [headMan, bodyMan, handLeftMan, handRightMan, legLeftMan, legRightMan];

  imgElements.forEach((imgElement) => {
    imgElement.style.opacity = 0;
  });

  resultText.textContent = '';
  secretWord.textContent = '';

  audio.pause();
  audio.currentTime = 0;
}

function openModal() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
  isModalOpen = true;
}

function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  isModalOpen = false;
  resetHangmanGame();
}

closeModalBtn.addEventListener('click', closeModal);
btnNewGameClick.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

function handleKeyPress(event) {

  if (isModalOpen) {
    return;
  }

  const pressedKey = event.key.toUpperCase();

  if (/^[A-Z]$/.test(pressedKey)) {
    const matchingButton = Array.from(lettersNames).find(button => button.textContent === pressedKey);

    if (matchingButton) {
      matchingButton.click();
      matchingButton.disabled = true;
    }
  }

  if (/^[А-ЯЁ]$/.test(pressedKey)) {
    alert('Пожалуйста, переключите клавиатуру на английскую раскладку!');
  }
}

document.addEventListener('keydown', handleKeyPress);

function closeModalOnEnter(event) {
  if (event.key === 'Enter') {
    closeModal();
  }
}

document.addEventListener('keydown', closeModalOnEnter);

console.log(answer);