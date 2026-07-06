// let num = sum(3);
// console.log(num);

function sum(number){
    let result = 0;
    for(let i = 1; i <= number; i++){
        result += i;
    }
    return result;
}

console.log(sum(3));