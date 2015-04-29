function getPrime(number) {
    var factor = 2;
    while(number != factor) {
        if(number % factor === 0) {
            number = number / factor;
        }
        else {
            factor++;
        }
    }
    return factor;
}

var numb = prompt("What number would you like to find the greatest prime factor?");

getPrime(numb);
//euler number is 600851475143
