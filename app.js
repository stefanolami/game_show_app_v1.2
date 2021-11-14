const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const start = document.querySelector('.btn__reset');
let missed = 0;

start.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
})

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

//addPhraseToDisplay(getRandomPhraseAsArray(phrases));

function checkLetter(btn) {
    const letters = document.querySelectorAll('.letter');
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].textContent === btn.textContent) {
            letters[i].className += ' show';
            const letterFound 
        } else {
            return null
        }
    }
}