let userScore = 0;
let compScore = 0;

const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoices = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    // Math.floor(): generates largest integer smaller than the input number
    // Math.random(): generates random number between 0 and 1
    // Math.random()*n: generates random numbers between 0 to n-1(int): whole numbers
    return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        uScore.innerText= userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        cScore.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};

const drawGame = () => {
    console.log("Game ended in a draw, play again!");
    msg.innerText = "Game was draw, Play Again!";
    msg.style.backgroundColor = "#392759";
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //generate computer choice -> modular programming: reusable components
    const compChoice = genCompChoices();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //compChoice: scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //compChoice: rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{ //scissors
            // compChoices: rock or paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        console.log("choice was clicked");

        playGame(userChoice);
    });
});