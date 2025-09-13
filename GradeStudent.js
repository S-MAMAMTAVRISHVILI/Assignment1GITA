function gradeStudent(arg) {
    switch (true) {
        case arg >= 91: return "A";
        case arg >= 81: return "B";
        case arg >= 71: return "C";
        case arg >= 61: return "D";
        case arg >= 51: return "E";
        default: return "F";
    }
}

//few checks
console.log(gradeStudent(93))
console.log(gradeStudent(87))
console.log(gradeStudent(75))
console.log(gradeStudent(67))
console.log(gradeStudent(51))
console.log(gradeStudent(30))