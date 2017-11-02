//some global variables
var firstNumber = true;
var secondNumber = false;
var operator = false;

// set up the even tlisteners for button on th page
function setupListeners() {

//get the elements so we can the event listeners on them


//select all the number buttons on the page
var numberButtons = document.getElementsByClassName('buttonNum');
//select all the operators on the page
var operatorButtons = document.getElementsByClassName('operator');
//select the equal button
var equalButton;
document.getElementsByClassName('equalButton')
//select the clears button
var clearButton;
document.getElementsByClassName('clearButton')

setNumberButtonListeners(numberButtons);
setOperatorButtonListeners(operatorButtons);
clearButton[0].addEventListener("click", clearCalculator);
equalButton[0].addEventListener("click", getAnswer);


}

function clearCalculator() {
  var calculatorScreen = document.getElementById("screen");

  calculatorScreen.innerHTML = "Sparta Calculator";

  firstNumber = true;
  secondNumber = false;
  operator = false;
}

function getAnswer() {
  var calculatorScreen = document.getElementById("screen");

  var answer = doCalculation();

  console.log("Answer - - - -", answer)

}

function doCalculation() {
  switch (operator){
    case "+":
      return (firstNumber + secondNumber).toFixed(2);
      break;
    case "-":
      return (firstNumber - secondNumber).toFixed(2);
      break;
    case "*":
      return (firstNumber * secondNumber).toFixed(2);
      break;
    case "/":
      return (firstNumber / secondNumber).toFixed(2);
      break;
    default:
      return "err"
  }
}

//setting the listners for the number buttons
function setNumberButtonListeners(buttons) {
  var calculatorScreen = document.getElementById("screen");



//create a loop to set the listener on each button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
        // console.log(this.HTML);

    if(firstNumber === true) {
    calculatorScreen.innerHTML = this.innerHTML;
      firstNumber = parseInt(this.innerHTML);
      operator = true;
      console.log('firstNumber', firstNumber);
    }else if (secondNumber === true) {
      secondNumber = parseInt(this.innerHTML);
      calculatorScreen.innerHTML = this.innerHTML;
      console.log('secondNumber', secondNumber);
    }

  });
}

}

function setOperatorButtonListeners(operatorButtons) {
    var calculatorScreen = document.getElementById("screen");

//create a loop to set the operator button
  for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function(event){
      if (operator === true) {
      calculatorScreen.innerHTML = this.innerHTML;
      operator = this.innerHTML;
      secondNumber = true;
      console.log('operator', operator);
      }

      // console.log(this.HTML);
    }
  )
  }
}

  setupListeners();
