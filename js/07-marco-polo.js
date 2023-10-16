var num = 1;
while(num <= 100) {
    if( (num % 15) == 0 ) {
        console.log("Marco! Polo!");
    } 
    else if( (num % 3) == 0 ) {
        console.log("Marco!");
    } 
    else if( (num % 5) == 0 ) {
        console.log("Polo!");
    } else { 
        console.log(num);
    }
    num += 1;
}