/* eslint-env browser */ 

var firstNumber = window.prompt("Enter the first number: ");
var secondNumber = window.prompt("Enter the second number: ");
if(firstNumber == secondNumber) {
    document.write("The numbers you provided are equal.");
}
else if(firstNumber > secondNumber) {
    document.write(firstNumber);
}
else {
    document.write(secondNumber);
}

