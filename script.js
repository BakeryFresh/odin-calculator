//automatically update the watch time every 1 second
setInterval(updateClockTime, 1000);

//calculator buttons
let btnNumerical = document.querySelectorAll(".numerical");
let btnOperand = document.querySelectorAll(".operator");
let watchDisplayLeft = document.getElementById("watch-display-left");
let watchDisplayCenter = document.getElementById("watch-display-center");
let watchDisplayRight = document.getElementById("watch-display-right");

let num1 = "";
let num2 = "";
let num3 = "";
let operand = "";
let operandToggle = false;

const btnSymbolClear = document.getElementById("btn-symbol-clear");
const btnSymbolEquals = document.getElementById("btn-symbol-equals");

//let the user select a number
btnNumerical.forEach((button) => {
  button.addEventListener("click", () => {
    if (!operandToggle) {
      watchDisplayCenter.textContent = "";
      watchDisplayRight.textContent = "";
      num1 = button.textContent;
      watchDisplayLeft.textContent = button.textContent;
    } else {
      num2 = button.textContent;
      watchDisplayRight.textContent = button.textContent;
    }
  });
});

//let the user select an operand
btnOperand.forEach((buttonOpp) => {
  buttonOpp.addEventListener("click", () => {
    watchDisplayCenter.textContent = buttonOpp.textContent;
    operand = buttonOpp.textContent;
    operandToggle = !operandToggle;
  });
});

//clear the calculator of its numbers or calculation
btnSymbolClear.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  updateClockTime();
});

//call the calculator function to return the answer. If the inputs havent been given ignore the command
btnSymbolEquals.addEventListener("click", () => {
  if (num1 != "" && num2 != "" && operandToggle != false) {
    calculator(num1, operand, num2);
  } else {
    return;
  }
});

//update the time
function updateClockTime() {
  if (!num1) {
    function addZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
    const d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    watchDisplayLeft.textContent = h + ":";
    watchDisplayCenter.textContent = m + " ";
    watchDisplayRight.textContent = s;
  } else {
    return;
  }
}

//calculate the result of the user input
function calculator(num1, operand, num2) {
  console.log(num1);
  console.log(operand);
  console.log(num2);

  if (num1 === "0" && num2 === "0" && operand === '/') {
    watchDisplayCenter.textContent = "@_@";
    watchDisplayRight.textContent = "";
    watchDisplayLeft.textContent = "";
   
  } else {
    switch (operand) {
      case "x":
        num3 = num1 * num2;
        break;
      case "/":
        num3 = num1 / num2;
        break;
      case "+":
        num3 = num1 + num2;
        break;
      case "-":
        num3 = num1 - num2;
        break;
    }

    watchDisplayLeft.textContent = "";
    watchDisplayRight.textContent = "";
    watchDisplayCenter.textContent = num3;
  }
  num2 ="";
  operand = "";
}
