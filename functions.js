
/*   ##### Toggle divs ##### */

// look for elements that contain the class showHide
const selectDiv = document.querySelectorAll(".showHide")

function toggle (selectDiv, specifiedDisplay) {
  var selectDiv, index;

  selectDiv = selectDiv.length ? selectDiv : [selectDiv];
  for (index = 0; index < selectDiv.length; index++) {
    selectDiv = selectDiv[index];

    if (isDivHidden(selectDiv)) {
      selectDiv.style.display = '';

      // If the element is still hidden after removing the inline display
      if (isDivHidden(selectDiv)) {
        selectDiv.style.display = specifiedDisplay || '';
      }
    } else {
      element.style.display = 'none';
    }
  }
  function isDivHidden (selectDiv) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }
}

// Play the game. 

/*
target { display: none; }
<button id="toggle-button">Toggle display</button>

<span class="target">Toggle the span.</span>

<div class="target">Toggle the div.</div>
*/



// start game 

/*
const player = {
  currentChoice: null
}
const computer = {
  currentChoice: null
}

const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
player.currentChoice = choices[0];

function computerChoice(){
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}

function compareChoices(){
  computerChoice();
  if(computer.currentChoice === player.currentChoice){
    displayResult("You tied! You both choose "  + computer.currentChoice);
  }else if(computer.currentChoice === choices[0]){
    if(player.currentChoice === choices[1]){
      displayResult("You win! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }else{
      displayResult("You win! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[1]){
    if(player.currentChoice === choices[2]){
      displayResult("You Win! The computer chose " + computer.currentChoice + " and you chose " + player.currentChoice);
    }else{
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and you chose " + player.currentChoice);
    }
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){
      displayResult("You win! The computer chose " + computer.currentChoice + " and you chose " + player.currentChoice);
    } else {
      displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
    }
  }
}

// The displayResult function creates a new paragraph element, called resultText, that adds the results from the compareChoices function above.

function displayResult(result){ 
  const resultText = document.createElement('p');
  resultText.innerText = result;
  document.body.appendChild(resultText);
}

compareChoices();
*/

  
// Scissors Cuts Paper

// Paper Covers Rock

// Rock crushes lizard

// Lizard Poisons Spock

// Spock smashes scissors

// Scissors decapitates Lizard

// Lizard Eats Paper

// Paper Disproves Spock

// Spock Vaporizes Rock

// Rock Crushes Scissors


