// function sayHello(name){
//     console.log(`Hello my name is ${name}`);
// }

// function execute(fr, name){
//     fn(name);
// }

// execute(sayHello, 'Shubham'); // Hello!


// Function can be return from another function
// function first(){
//     return second();
// }
// function second(){
//     console.log("I am Second Function");
// }

// first();


// Rest and Spread Opreator

// function collectValue( ... args) {
//     // REst
//     console.log( ... args);
// }

// let values = [1, 4, 5, 'HEllo'];

// // Spread
// collectValue( ... values);



// 


(function (){
console.log('Hello greet');
})();


(function (val1, val2) {
console.log(`'Hello greet' ${val1 + val2}`);
})(12, 12);