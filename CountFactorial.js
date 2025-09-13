function countFactorial(arg) {
    if(arg === 1 || arg === 0) return 1
    return arg * countFactorial(arg - 1)
}

//few checks
console.log(countFactorial(0))
console.log(countFactorial(1))
console.log(countFactorial(2))
console.log(countFactorial(3))
console.log(countFactorial(5))
console.log(countFactorial(10))