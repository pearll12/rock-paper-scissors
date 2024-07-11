let userscore = 0;
let compscore = 0;
let message = document.querySelector(".msg");

let userboard = document.querySelector(".score1");
let compboard = document.querySelector(".score2");

let choices = document.querySelectorAll("img");

const compchoice = () => {
  const options = ["paper", "rock", "scissors"];
  // Math.random() generates between 0 to 1, if multiply it by 10 generates between 0 to 10
  // Math.floor(Math.random()) removes the decimal part
  const randId = Math.floor(Math.random() * 3);
  return options[randId];
};

const showWinner = (userwin, compChoice) => {
  message.textContent = `Computer chose ${compChoice}`;
  if (userwin) {
    userscore++;
    userboard.textContent = userscore;
    message.style.backgroundColor = "green";
  } else {
    compscore++;
    compboard.textContent = compscore;
    message.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  const compChoice = compchoice();
  console.log("user choice", userchoice);
  console.log("comp choice", compChoice);

  if (userchoice == compChoice) {
    message.textContent = "DRAW";
    message.style.backgroundColor = "";
  } else {
    let userwin = true;
    if (userchoice == "stone") {
      //scissors,paper
      userwin = compChoice == "scissors" ? true : false;
    } else if (userchoice == "paper") {
      //stone, scissors
      userwin = compChoice == "stone" ? true : false;
    } else {
      //stone, paper
      userwin = compChoice == "paper" ? true : false;
    }
    showWinner(userwin, compChoice);
  }
};

const playSound = () => {
  let sound = document.querySelector("#meow-sound");
  sound.currentTime = 0;
  sound.play();
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
  choice.addEventListener("click", playSound);
});

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  userboard.textContent = "0";
  userscore = 0;
  compscore = 0;
  compboard.textContent = "0";
  message.textContent = "Play your move";
});
