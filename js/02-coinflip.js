var coinFlip = Math.random();
var choice = window.prompt("Choose Heads or Tails");

if(coinFlip < 0.5) {
    coinFlip = "Heads";
} else {
    coinFlip = "Tails";
} 
if(coinFlip == "Heads" && choice == "Heads") {
    window.alert("The flip was heads and you chose heads...you win!");
}
else if(coinFlip == "Heads" && choice == "Tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if(coinFlip == "Tails" && choice == "Heads") {
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if(coinFlip == "Tails" && choice == "Tails") {
    window.alert("The flip was heads and you chose heads...you win!");
}

 

//Math.random creates a random number between 0 and 1, I want to round it to either 0 or 1
/*
var coinFlip = Math.round(Math.random());
var choice = window.prompt("Choose Heads or Tails: ");

var isHeads = coinFlip === 0; //something is incorrect here !

if(isHeads && choice === "Heads") {
    window.alert("The flip was heads and you chose heads...you win!");
}
else if(isHeads && choice === "Tails") {
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if(!isHeads && choice === "Heads") {
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if(!isHeads && choice === "Tails") {
    window.alert("The flip was heads and you chose heads...you win!");
}
*/
