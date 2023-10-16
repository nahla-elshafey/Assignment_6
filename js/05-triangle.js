// 7 lines, each line has a number of hashtag signs according to the line number
var height = 7; 
for(var i = 1; i <= height; i+=1) {
    row = '';
    for(var j = 1; j <= i; j+=1) {
        row += '#' ;
    }
    console.log(row);
}