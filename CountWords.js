function countWords(arg) {
    let count = 0;
    const sentence = String(arg).trim() //for extra spaces
    if(sentence.length === 0) return 0
    for(let i = 0; i < sentence.length; i++) {
        if(sentence.at(i) === " ") count++
    }
    return count + 1 //for the end of the sentence
}

//few checks
console.log(countWords("I am the one who knocks."))
console.log(countWords("Winter is coming."))
console.log(countWords("What is dead may never die."))
console.log(countWords("Georgia"))
console.log(countWords(""))
