const numbers = [1,2,3,4,5,6,7,8];
const numbers2 = [1,2,2,2,3,1,4,4,5,6,5,6,3];
const students = [
    {id: 1, name:'shakil', marks:40, subject:'english'},
    {id: 2, name:'saiful', marks:70, subject:'Bangla'},
    {id: 3, name:'alamin', marks:65, subject:'Bangla'},
    {id: 4, name:'jhankar', marks:90, subject:'Chemistry'},
    {id: 5, name:'ijaj', marks:70, subject:'Bangla'}
];

//find in numbers array
// const biggerNumber = numbers.find(function(number){
//     return number > 4;
// })
// console.log(biggerNumber);

// //find arrow function in numbers array
// const biggerNumber = numbers.find(number => number > 3);
// console.log(biggerNumber);

//filter function in numbers array
// const biggerNumbers = numbers.filter(function(number){
//     return number > 3;
// })
// console.log(biggerNumbers);

//filter arrow method in numbers array
// const biggerNumbers = numbers.filter(number => number > 3);
// console.log(biggerNumbers);

//find method in students
// const passed = students.find(function(parameter){
//     return parameter.marks > 65;
// })
// console.log(passed);

//find arrow method in students array
// const passed = students.find( p => p.marks > 65);
// console.log(passed);

//filter method in students array
// const passed = students.filter(function(p){
//     return p.marks>65 && p.subject === 'Bangla';
// })
// console.log(passed);

//remove duplicate value from an array by using arrow method 
const noDuplicate = numbers2.filter(function (value,index,arr) {
    return arr.indexOf(value) === index;
})
console.log(noDuplicate);