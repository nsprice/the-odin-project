var total = 0;
var n = 4000000;
var fib = [1,2];

while(fib[fib.length - 1] < n) {
    fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2];

}

if(fib[fib.length-1] > 4000000) {
    delete fib[fib.length - 1];
}

for(var x in fib) {
    if(fib[x] % 2 === 0){
        total += fib[x];
    }
}

console.log(total);
