
// here we are taking direct number in function

function getTable(num){
    for(let i = 1; i<=10; i++){
        console.log(`${num} * ${i} = ${num * i}\n`);
    }
}
console.log(getTable(5));




// we can also do this way, both are same, by storing the result in other variabe and then return that every time 
let num = getTable(9);
console.log(num);

function getTable(table){
    let result = '';
    for(let i = 1; i<=10; i++){
        result += `${table} * ${i} = ${table * i}\n`;
    }
    return result;
}