const choices = [
  {
    name: "rock",
    image: "../images/icon-rock.svg",
  },
  {
    name: "paper",
    image: "../images/icon-paper.svg",
  },
  {
    name: "scissors",
    image: "../images/icon-scissors.svg",
  },
];

const randomize = (length) => {
  const position = Math.floor(Math.random() * length);
  return choices[position];
};

const playGame = (playerChoice) => {
  const computerChoice = randomize(choices.length).name;
  if ((playerChoice === "rock") & (computerChoice === "scissors")) return "win";
  else if ((playerChoice === "paper") & (computerChoice === "rock"))
    return "win";
  else if ((playerChoice === "scissors") & (computerChoice === "paper"))
    return "win";
  else if (playerChoice === computerChoice) return "tie";
  return "lose";
};

const selectors = document.querySelectorAll(".selection");
const result = document.querySelector("#result");
selectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    const gameResult = playGame(selector.id);
    result.innerHTML = gameResult;
  });
});
