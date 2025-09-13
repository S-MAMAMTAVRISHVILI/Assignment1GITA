function reverseString(arg) {
    const x = String(arg)
    let y = ""
    for(let i = x.length - 1; i >= 0; i--) {
        y += x.at(i)
    }
    return y
}

//few checks
console.log(reverseString("Sandro"))
console.log(reverseString("Tbilisi"))
console.log(reverseString(""))
console.log(reverseString("ANA"))