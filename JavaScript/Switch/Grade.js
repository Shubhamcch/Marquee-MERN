
// let value = grade();
// console.log(grade());
// function grade(){
//     // return 'Today is saturday'; if we comment this output will be undefined
// }

// let value = grade();
// console.log(grade());
// function grade(){
//     return 'Today is saturday'; // now it will print today is saturday
// }
// Example calls for getGrade
let value2 = getGrade(90);
console.log(value2);

function getGrade(marks){
    if(typeof marks !== 'number') return 'Invalid';
    // use switch(true) to evaluate range-based cases
    switch(true){
        case (marks < 0 || marks > 100):
            return 'Invalid';
        case (marks >= 90):
            return 'A+';
        case (marks >= 80):
            return 'A';
        case (marks >= 70):
            return 'B+';
        case (marks >= 60):
            return 'B';
        default:
            return 'F';
    }
}