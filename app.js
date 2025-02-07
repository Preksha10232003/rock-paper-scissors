let userScore = 0;
let opponentScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const opponentScorePara=document.querySelector("#opponent-score");

const genOpponentChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame=() => {
    console.log("Game draw.");
    msg.innerText="Game was Draw. Play again";
    msg.styyle.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,opponentChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${opponentChoice}`;
        msg.style.backgroundColor="green";
    } else {
        opponentScore++;
        opponentScorePara.innerText=opponentScore;
        msg.innerText = `You Lose.${opponentChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice) => {
    console.log("user choice= ",userChoice);
       //Generate opponent choice
         const opponentChoice = genOpponentChoice();
         console.log("opponent choice= ",opponentChoice);

            if (userChoice === opponentChoice) {
            //Draw Game
             drawGame();
            } else {
                let userWin = true;
                if(userChoice === "rock") {
                    //scissors,paper
                    userWin = opponentChoice === "paper"? false:true;
                } else if(userChoice === "paper"){
                    //rock,scissors
                    userWin = opponentChoice === "scissors"? false:true;
                } else {
                    //rock,paper
                    opponentChoice === "rock"? false:true;
                }
                showWinner(userWin,userChoice,opponentChoice);
            }
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
});
});