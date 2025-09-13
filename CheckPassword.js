function checkPassword(arg) {
    const pas = String(arg)
    if(pas.length <= 8) return false
    let containsDigit = false
    let containsCapital = false
    for(let i = 0; i < pas.length; i++) {
        if(pas.charCodeAt(i) >= 65 && pas.charCodeAt(i) <= 90) containsCapital = true
        if(pas.charCodeAt(i) >= 48 && pas.charCodeAt(i) <= 57) containsDigit = true
    }
    return containsDigit && containsCapital
}

//few checks
console.log(checkPassword("abc"))
console.log(checkPassword("aaaaaaaaa"))
console.log(checkPassword("Aaaaaaaaa"))
console.log(checkPassword("123456789"))
console.log(checkPassword("Aaaaaaaa1"))
console.log(checkPassword("ABVCD1234dasdsa"))