function printDigits(number){
while(number){
    let lastnum = number%10
    console.log(lastnum)
    number = (number-lastnum)/10
}
}

printDigits(123450)



// -----Jared's solution-----

function printDigitsBackwards(num) {
    //   loop until my number is gone
    while (num > 0) {
        // each iteration of the loop, I'm going to modulo off my smallest digit and print it
        // I'll do this using modulo 10, since we are doing base 10 numbers
        console.log(num % 10)
        // after I print, I am going to divide my number by 10, and strip off the decimal place
        num = Math.floor(num / 10)
    }
}
console.log("-------")
printDigitsBackwards(645)
console.log("-------")
printDigitsBackwards(15670)
console.log("-------")
printDigitsBackwards(8)