const ids = [12,22,33,44,55];
const names = ['shakil','jakia','rita','rima'];
const object = [
    {id:1, names:'saiful'},
    {id:2, names:'alamin'},
    {id:3, names:'sakib'},
    {id:4, names:'ismail'}
];

// const newIds = ids.map(function(ids){
//     return ids * 2;
// })
// const newIds = ids.map(ids => ids* 2);
// console.log(newIds);

// const newNames = [];
// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     const newElement = element.toUpperCase();
//     newNames.push(newElement);
// }
// console.log(newNames);

// const newName = names.map(function(name){
//     return name.toUpperCase();
// })
// console.log(newName);

// const newName = names.map(name => name.toUpperCase());
// console.log(newName);

// const newObject = [];
// for (let i = 0; i < object.length; i++) {
//     const element = object[i].names;
//     newObject.push(element);    
// }
// console.log(newObject);

// const newObject = object.map(function(name){
//     return name.names;
// })
// console.log(newObject);

const newObject = object.map(p => p.names);
console.log(newObject);
