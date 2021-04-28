var colors = ["srilanka", "russia", "canberra", "beijing", "everest", "germany", "avatar", "affrica","melbourne", "green"];

var count = 0, level = 1;
let answer = '', word, maxWrong = 4, mistakes = 0, answers = [], wordStatus = null;

function randomWord() {
    answer = colors[Math.floor(Math.random() * colors.length)];
    word = answer[Math.floor(Math.random() * answer.length)];
}
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
      <button
        class="btn buttonsOfKeys btn-lg btn-dark m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;
}
function handleGuess(chosenLetter) {
    answers.indexOf(chosenLetter) === -1 ? answers.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    if (answer.indexOf(chosenLetter) >= 0) {
        answersWord(); checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1) {
        mistakes++;
        updateMistakes(); checkIfGameLost();
    }
}
function checkIfGameWon() {
    if (wordStatus === answer) {
        ++count;
        document.getElementById('keyboard').innerHTML = 'Level  ' + count + '  Completed';
        document.getElementById('hintColor').innerHTML = '';
        document.getElementById('tryageinBtn').innerHTML = 'Next';
        document.getElementById('tryageinBtn').style.display = 'inline-block';
        $("#skip,#restart,#hintBtn").css("display", "none");
    }
    if (count === 10) {
        level = 1; count = 0;
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
        document.getElementById('tryageinBtn').innerHTML = 'Start';
        $("#skip,#hintBtn,#tryageinBtn").css("display", "none");
        document.getElementById('restart').style.display = 'inline-block';
        randomWord();
    }
}
function checkIfGameLost() {
    if (mistakes === maxWrong) {
        document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!!!';
        count = 0;
        $("#skip,#hintBtn").css("display", "none");
        document.getElementById('hintColor').innerHTML = '';
        document.getElementById('restart').style.display = 'inline-block';
        randomWord();
    }
}
function answersWord() {
    wordStatus = answer.split('').map(letter => (answers.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}
function reset() {
    ++level;
    document.getElementById('level').innerHTML = 'Level  ' + level;
    document.getElementById('hintColor').innerHTML = '';
    $("#tryageinBtn,#restart").css("display", "none");
    $("#skip,#hintBtn").css("display", "inline-block");
    mistakes = 0; answers = [];
    answersWord(); updateMistakes(); generateButtons(); randomWord();
}
function skipQuestion() {
    mistakes = 0; answers = [];
    answersWord(); updateMistakes(); generateButtons(); randomWord();
    document.getElementById('hintColor').innerHTML = "Hint: - " + '';
}
function tryAgain() {
    level = 1;
    $("#skip,#hintBtn").css("display", "inline-block");
    $("#restart").css("display", "none");
    document.getElementById('level').innerHTML = 'Level  ' + level;
    mistakes = 0; answers = [];
    answersWord(); updateMistakes(); generateButtons();
}
function levels() {
    document.getElementById('level').innerHTML = 'Level  ' + level;
}
function hint() {
    var hints = ["South Asian Country and second letter is 'r' ", "largest country in the world", "the capital city of 2007 cricket world cup winner team", "world biggest sports festival held city in 2008", "highest mountain in the world", "second most deaths in world war 2", "The biggest box office hit of all time", "hottest continent on Earth", "second largest cricket stadium held city (countries India,Australia,pakistan)", "color represents Asia in Olympics ring"];
    if (colors[0] === answer) { document.getElementById('hintColor').innerHTML = "Hint: - " + hints[0];}
    else if (colors[1] === answer) {document.getElementById('hintColor').innerHTML = "Hint: - " + hints[1];}
    else if (colors[2] === answer) {document.getElementById('hintColor').innerHTML = "Hint: - " + hints[2];}
    else if (colors[3] === answer) {document.getElementById('hintColor').innerHTML = "Hint: - " + hints[3];}
    else if (colors[4] === answer) {document.getElementById('hintColor').innerHTML = "Hint: - " + hints[4];}
    else if (colors[5] === answer) {document.getElementById('hintColor').innerHTML = "Hint: - " + hints[5];}
    else if (colors[6] === answer) {document.getElementById('hintColor').innerHTML = "Hint: - " + hints[6];}
    else if (colors[7] === answer) {document.getElementById('hintColor').innerHTML = "Hint: - " + hints[7];}
    else if (colors[8] === answer) {document.getElementById('hintColor').innerHTML = "Hint: - " + hints[8];}
    else if (colors[9] === answer) {document.getElementById('hintColor').innerHTML = "Hint: - " + hints[9];}
}
document.getElementById('maxWrong').innerHTML = maxWrong;
randomWord(); generateButtons(); answersWord();
$("#tryageinBtn,#restart").css("display", "none");