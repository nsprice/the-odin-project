var total = 0;
var n = prompt("What number do you want to find the sum of all the multiples of 3 or 5 below?");

for(var i = 0; i < n; i++){
    if(i%3 === 0 || i%5 === 0) {
        total += i;
    }
}
