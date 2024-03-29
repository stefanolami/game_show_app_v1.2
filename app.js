const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const start = document.querySelector('.btn__reset');

let missed = 0;

const phrases = [
    'the science of today is the technology of tomorrow',
    'research is what im doing when i dont know what im doing',
    'leave the atom alone',
    'theory helps us to bear our ignorance of facts',
    'science never solves a problem without creatign ten more'
];

function getRandomPhraseAsArray(arr) {
    const i = Math.floor(Math.random() * 4);
    const newPhraseArray = arr[i].split('');
    return newPhraseArray;
 }

 function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        if (arr[i] === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        phrase.append(li);
    }
}

function checkLetter(btn) {
    let letter = '';
    const letters = document.querySelectorAll('.letter');
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].textContent === btn.textContent) {
            letters[i].className += ' show';
            letter = letters[i].textContent;
        } 
    }
    if (letter === '') {
        return null;

    } else {
        return letter;
    }  
}

function checkWin() {
    const letters = document.querySelectorAll('.letter');
    const shownLetters = document.querySelectorAll('.show');
    const overlay = document.querySelector('#overlay');
    if (letters.length === shownLetters.length) {
        overlay.className = 'win';
        overlay.style.display = 'flex';
        createResetBtn();
    } else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.style.display = 'flex';
        createResetBtn();
    }
}

function createResetBtn() {
    start.textContent = '';
    const btn = document.createElement('button');
    btn.textContent = 'Reset Game';
    btn.className = 'resetBtn'
    start.appendChild(btn);
}

function resetHearts() {
    const lostHearts = document.querySelectorAll('.failedTry');
    for (let i = 0; i < lostHearts.length; i++) {
        lostHearts[i].className = 'tries';
        lostHearts[i].firstChild.src = 'images/liveHeart.png';
    }
}

function resetPhrase() {
    phrase.innerHTML = '';
    const newUl = document.createElement('ul');
    phrase.append(newUl);
    addPhraseToDisplay(getRandomPhraseAsArray(phrases));
}

function resetKeyboard() {
    const usedKeys = document.querySelectorAll('.chosen');
    for (let i = 0; i < usedKeys.length; i++) {
        usedKeys[i].removeAttribute('class');
        usedKeys[i].removeAttribute('disabled');
    }
}


addPhraseToDisplay(getRandomPhraseAsArray(phrases));
const letters = document.querySelectorAll('.letter');


start.addEventListener('click', (e) => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
    
    if (e.target.className === 'resetBtn') {
        missed = 0;
        resetHearts();
        resetPhrase();
        resetKeyboard();
    }
    
})

qwerty.addEventListener('click', (e) => {
    const btn = e.target
    if (btn.tagName === 'BUTTON') {
        btn.className += 'chosen';
        btn.setAttribute('disabled', '');
        const letterFound = checkLetter(btn);
        if (letterFound === null) {
            missed ++;
            const hearts = document.querySelectorAll('.tries');
            const lastHeart = hearts[hearts.length - 1];
            lastHeart.firstChild.src = 'images/lostHeart.png';
            lastHeart.className = 'failedTry'
        }
        checkWin();
    }
})