var coinFlip;
for(var i = 0; i < 10; i += 1) {
    var coinFlip = Math.round(Math.random());
    if(coinFlip == 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}