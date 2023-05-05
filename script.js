//automatically update the watch time every 1 second
setInterval(updateClockTime,1000);

//calculator buttons
let btnNumerical = document.querySelectorAll(".numerical");
let btnOperand = document.querySelectorAll(".operator");
let watchDisplayLeft = document.getElementById('watch-display-left');
let watchDisplayCenter = document.getElementById('watch-display-center');
let watchDisplayRight = document.getElementById('watch-display-right');

let num1 = "";
let num2 = "";
let operand = "";
let operandToggle = false;

const btnSymbolClear = document.getElementById("btn-symbol-clear");


//let the user select a number
btnNumerical.forEach((button) => {
  button.addEventListener("click", () => {
    if (!operandToggle){
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
         //this will require testing if the user selects multiply as it lists x currently
        watchDisplayCenter.textContent = buttonOpp.textContent;
        operand = buttonOpp.textContent;
        operandToggle = !operandToggle;
    });
  });

btnSymbolClear.addEventListener('click', () => {
    num1 = "";
    num2 = "";
    updateClockTime();
})

//update the time 
function updateClockTime(){
    if(!num1) {
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
      const d = new Date();
      let h = addZero(d.getHours());
      let m = addZero(d.getMinutes());
      let s = addZero(d.getSeconds());
      watchDisplayLeft.textContent = h + ":";
      watchDisplayCenter.textContent = m +" ";
      watchDisplayRight.textContent = s;
    }
    else {
        return;
    }
}

function calculator(num1,operand,num2) {

    

}

