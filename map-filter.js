const numbers = [3,4,5,6,7,8,9];
const output = [];

// for (let i=0; i<numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);

// const square = element => element * element;
// // const square = x => x * x;
// console.log(square(5));

// const result = numbers.map(x => x*x);
// console.log(result);

// const bigger = numbers.filter(x => x>5);
// console.log(bigger);

const smaller = numbers.filter(x => x<5);
console.log(smaller);