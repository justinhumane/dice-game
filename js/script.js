// dice skapa ett tärnings spel
// stegen
let throwCount = 0;
let diceGoal = 1;
let dice = document.getElementById("dice");
let previousResult;
let button = document.getElementById("throw");
let resetButton = document.getElementById("reset");

const diceThrow = () => {
  let randomResult = Math.floor(Math.random() * 6) + 1;

  dice.classList.remove("dots-" + previousResult);
  dice.classList.add("dots-" + randomResult);

  if (randomResult === diceGoal) {
    let tempDice = document.getElementsByClassName("dots-" + randomResult);
    tempDice[0].classList.remove("faded");
    diceGoal++;
  }

  if (diceGoal === 7) {
    button.disabled = true;
    button.classList.add("faded");
    alert(`Du har klarat spelet på ${throwCount} kast`);
    resetButton.classList.remove("hidden");
  }

  previousResult = randomResult;
  throwCount++;
  button.innerText = `Kasta (${throwCount})`;
};

const resetGame = () => {
  throwCount = 0;
  console.log(throwCount);
  diceGoal = 1;
  console.log(diceGoal);

  console.log(dice);
  dice.classList.remove("dots-" + previousResult);
  console.log(dice);

  for (let i = 1; i < 7; i++) {
    let fadeDices = document.getElementsByClassName("dots-" + i);
    console.log(fadeDices);
    fadeDices[0].classList.add("faded");
  }

  button.disabled = false;
  button.classList.remove("faded");
  button.innerText = "Kasta";
  resetButton.classList.add("hidden");
};

button.addEventListener("click", diceThrow);
resetButton.addEventListener("click", resetGame);
