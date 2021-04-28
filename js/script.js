var count = 0 ,level =1;
let answer = '',word,maxWrong = 4,mistakes = 0,answers = [], wordStatus = null;
var words = ["srilanka", "russia", "canberra", "beijing", "everest", "germany", "avatar", "affrica","melbourne", "green"]

function genarateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
        `
      <button
        class="btn buttonsOfKeys btn-lg btn-dark m-2"   id='` + letter + `' onClick="handleGuess('` + letter + `')" >
        ` + letter + ` </button>   `).join('');
    document.getElementById('keyboard').innerHTML = buttonsHTML;

}
function randomWord(){
    answer = words[Math.floor(Math.random() * words.length)];
    word = answer[Math.floor(Math.random() * answer.length)]
}
function handleGuess(chosenLetter) {
    answers.indexOf(chosenLetter) === -1 ? answers.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled',true);
    if (answer.indexOf(chosenLetter) >= 0){
        answerWord(); checkIfGameWon();
    } else if (answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes(); checkIfgameLost();
    }
}
function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}
function checkIfgameLost() {
    if (mistakes === maxWrong){
        document.getElementById('wordSpotlight').innerHTML = 'The answer was:'+answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!!!';
        count = 0;
        $("#skip,#hintBtn").css("display","none");
        document.getElementById('hintForWord').innerHTML = '';
        document.getElementById('restart').style.display = 'inline-block';
        randomWord();
    }
}

function checkIfGameWon() {
    if (wordStatus === answer){
        ++count;
        document.getElementById('keyboard').innerHTML = 'Level'+count+ 'Completed';
        document.getElementById('hintForWord').innerHTML = '';
        document.getElementById('tryageinBtn').innerHTML = 'Next';
        document.getElementById('tryageinBtn').style.display = 'inline-block';
        $("#skip,#restart,#hintBtn").css("display","none");
    }
    if (count == 2){
        level = 1; count = 0;
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
        document.getElementById('tryageinBtn').innerHTML = 'Start';
        $("#skip,#tryageinBtn,#hintBtn").css("display","none");
        document.getElementById('restart').style.display = 'inline-block';
        randomWord();
    }
}
function reset() {
    ++level;
    document.getElementById('levels').innerHTML = 'level  '+level;
    document.getElementById('hintForWord').innerHTML = '';
    $("#tryageinBtn,#restart").css("display", "none");
    $("#skip,#hintBtn").css("display", "inline-block");
    mistakes = 0; answers = [];
    answerWord();updateMistakes();genarateButtons();randomWord();
}
function tryAgain() {
    level = 1;
    $("#skip,#hintBtn").css("display", "inline-block");
    $("#restart").css("display", "none");
    document.getElementById('levels').innerHTML = 'level  '+level;
    mistakes = 0; answers = [];
    answerWord();updateMistakes();genarateButtons();randomWord();
}
function levels() {
    document.getElementById('levels').innerHTML = 'Level'+level;
}
function answerWord(){
    wordStatus = answer.split('').map(letter => (answers.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}
function hint(){
    var hints = ["South Asian Country and second letter is 'r' ", "largest country in the world", "the capital city of 2007 cricket world cup winner team", "world biggest sports festival held city in 2008", "highest mountain in the world", "second most deaths in world war 2", "The biggest box office hit of all time", "hottest continent on Earth", "second largest cricket stadium held city (countries India,Australia,pakistan)", "color represents Asia in Olympics ring"];
    if (words[0] ==  answer){document.getElementById('hintColor').innerHTML = "Hint: - " + hints[0];}
    else if (words[1] == answer) {document.getElementById('hintForWord').innerHTML = "Hint: - " + hints[1];}
    else if (words[2] == answer) {document.getElementById('hintForWord').innerHTML = "Hint: - " + hints[2];}
    else if (words[3] == answer) {document.getElementById('hintForWord').innerHTML = "Hint: - " + hints[3];}
    else if (words[4] == answer) {document.getElementById('hintForWord').innerHTML = "Hint: - " + hints[4];}
    else if (words[5] == answer) {document.getElementById('hintForWord').innerHTML = "Hint: - " + hints[5];}
    else if (words[6] == answer) {document.getElementById('hintForWord').innerHTML = "Hint: - " + hints[6];}
    else if (words[7] == answer) {document.getElementById('hintForWord').innerHTML = "Hint: - " + hints[7];}
    else if (words[8] == answer) {document.getElementById('hintForWord').innerHTML = "Hint: - " + hints[8];}
    else if (words[9] == answer) {document.getElementById('hintForWord').innerHTML = "Hint: - " + hints[9];}
}
document.getElementById('maxWrong').innerHTML = maxWrong;
genarateButtons(); randomWord(); answerWord();
$("#tryageinBtn,#restart").css("display", "none");