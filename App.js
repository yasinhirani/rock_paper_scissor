const options = document.querySelectorAll('.options button');
let hScore = 0;
let cScore = 0;
const h_choice = document.getElementById('human_choice');
const c_choice = document.getElementById('cmp_choice');
const result = document.getElementById('winner');
const h_score = document.getElementById('human_score');
const c_score = document.getElementById('cmp_score');

const getClick = () => {
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const clickName = option.name;
            getComputerClick(clickName);
            getFinalWinner();
            option.classList.remove('hover');
        })
    })
}
const updateScore = () => {
    h_score.textContent = hScore;
    c_score.textContent = cScore;
}
const getComputerClick = (human) => {
    const cmp_array = ['rock', 'paper', 'scissor'];
    const cmp_num = Math.floor(Math.random() *3);
    const cmp_choice = cmp_array[cmp_num];
    winner(human, cmp_choice);
}
const winner = (getHuman, getComputer) => {
    // console.log(getHuman, getComputer);
    if (getHuman === getComputer) {
        h_choice.textContent = getHuman;
        c_choice.textContent = getComputer;
        result.textContent = "It's a TIE";
        return;
    }
    if (getHuman == 'rock') {
        if (getComputer == 'scissor') {
            h_choice.textContent = getHuman;
            c_choice.textContent = getComputer;
            result.textContent = 'YOU WON';
            hScore++;
            updateScore();
            return;
        }
        else{
            h_choice.textContent = getHuman;
            c_choice.textContent = getComputer;
            result.textContent = 'YOU LOOSE';
            cScore++;
            updateScore();
            return;
        }
    }
    if (getHuman == 'scissor') {
        if (getComputer == 'paper') {
            h_choice.textContent = getHuman;
            c_choice.textContent = getComputer;
            result.textContent = 'YOU WON';
            hScore++;
            updateScore();
            return;
        }
        else{
            h_choice.textContent = getHuman;
            c_choice.textContent = getComputer;
            result.textContent = 'YOU LOOSE';
            cScore++;
            updateScore();
            return;
        }
    }
    if (getHuman == 'paper') {
        if (getComputer == 'rock') {
            h_choice.textContent = getHuman;
            c_choice.textContent = getComputer;
            result.textContent = 'YOU WON';
            hScore++;
            updateScore();
            return;
        }
        else{
            h_choice.textContent = getHuman;
            c_choice.textContent = getComputer;
            result.textContent = 'YOU LOOSE';
            cScore++;
            updateScore();
            return;
        }
    }
}
const getFinalWinner = () => {
    if (hScore == 10) {
        alert('You won the game. Play again and enjoy');
        h_choice.textContent = "";
        c_choice.textContent = "";
        result.textContent = "";
        hScore = 0;
        cScore = 0;
        updateScore();
    }
    if (cScore == 10) {
        alert('Computer won the game');
        h_choice.textContent = "";
        c_choice.textContent = "";
        result.textContent = "";
        hScore = 0;
        cScore = 0;
        updateScore();
    }
}
getClick();
window.onload = alert('This match will be of 10 scores. The first one to reach 10 score will win the game...')
