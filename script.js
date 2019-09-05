document.querySelector("#one").addEventListener("click", inputOne);
document.querySelector("#two").addEventListener("click", inputTwo);
document.querySelector("#three").addEventListener("click", inputThree);
document.querySelector("#four").addEventListener("click", inputFour);
document.querySelector("#five").addEventListener("click", inputFive);
document.querySelector("#six").addEventListener("click", inputSix);
document.querySelector("#seven").addEventListener("click", inputSeven);
document.querySelector("#eight").addEventListener("click", inputEight);
document.querySelector("#nine").addEventListener("click", inputNine);
document.querySelector("#zero").addEventListener("click", inputZero);
document.querySelector("#decimal").addEventListener("click", inputDecimal);
document.querySelector("#clear").addEventListener("click", inputClear);
document.querySelector("#add").addEventListener("click", inputAdd);
document.querySelector("#subtract").addEventListener("click", inputSubtract);
document.querySelector("#multiply").addEventListener("click", inputMultiply);
document.querySelector("#divide").addEventListener("click", inputDivide);
document.querySelector("#equals").addEventListener("click", inputEquals);          

document.querySelector("#display1").innerHTML = "0";
let calculate = 0;

//check for leading zero
function removeZero() {
  let result1 = document.querySelector("#display1").innerHTML;
  let check = /\*|\/|\+|0/;
  if (check.test(result1)) {
    document.querySelector("#display1").innerHTML = "";
  }
}
function inputOne() {
  removeZero();
  calculate += 1;
  document.querySelector("#display1").innerHTML += "1";
}
function inputTwo() {
  removeZero();
  calculate += 2;
  document.querySelector("#display1").innerHTML += "2";
}
function inputThree() {
  removeZero();
  calculate += 3;
  document.querySelector("#display1").innerHTML += "3";
}
function inputFour() {
  removeZero();
  calculate += 4;
  document.querySelector("#display1").innerHTML += "4";
}
function inputFive() {
  removeZero();
  calculate += 5;
  document.querySelector("#display1").innerHTML += "5";
}
function inputSix() {
  removeZero();
  calculate += 6;
  document.querySelector("#display1").innerHTML += "6";
}
function inputSeven() {
  removeZero();
  calculate += 7;
  document.querySelector("#display1").innerHTML += "7";
}
function inputEight() {
  removeZero();
  calculate += 8;
  document.querySelector("#display1").innerHTML += "8";
}
function inputNine() {
  removeZero();
  calculate += 9;
  document.querySelector("#display1").innerHTML += "9";
}
function inputZero() {
  removeZero();
  calculate += "0";
  document.querySelector("#display1").innerHTML += "0";
}
function inputClear() {
  document.querySelector("#display1").innerHTML = "0";
  calculate = null;
}
function inputDecimal() {
  let oneDec = /(\.)/;
  let result1 = document.querySelector("#display1").innerHTML;
  if (oneDec.test(result1) == false) {
      document.querySelector("#display1").innerHTML += ".";
      calculate += ".";
  }  
}
function inputAdd() {
  let oneOp = /\-$/;
  if (oneOp.test(calculate)) {
        let testStr = JSON.stringify(calculate.match(/(\*|\/|\-)+$/g));
        calculate = calculate.substring(0, calculate.length - (testStr.length-4))
      } 
  let oneOp1 = /(\+|\/)$/;
  if (oneOp1.test(calculate)) {
        calculate = calculate.substring(0, calculate.length - 1)
      } 
  document.querySelector("#display1").innerHTML = "+";
  calculate += "+" 
  
}
function inputMultiply() {
  let oneOp = /(\+|\/)$/;
  if (oneOp.test(calculate)) {
        calculate = calculate.substring(0, calculate.length - 1)
      } 
  document.querySelector("#display1").innerHTML = "*";
  calculate += "*" 
}
function inputDivide() {
  let oneOp = /(\*|\+)$/;
  if (oneOp.test(calculate)) {
        calculate = calculate.substring(0, calculate.length - 1)
      } 
  document.querySelector("#display1").innerHTML = "/";
  calculate += "/" 
}
function inputSubtract() {
let oneOp = /(\-)$/;
  if (oneOp.test(calculate)) {
        calculate = calculate.substring(0, calculate.length - 1)
      } 
  document.querySelector("#display1").innerHTML = "-";
  calculate += "-" 
}
function inputEquals() {
  //alert(calculate);
  document.querySelector("#display1").innerHTML = eval(calculate);
  calculate = eval(calculate);
  //alert(calculate);
}
