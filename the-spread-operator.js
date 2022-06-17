/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log('Second array:', arr2);
console.log('First Array:', arr1);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7);
console.log('Third array:', arr3);
console.log('Fourth Array:', arr4);

// Copying an object
let object = {a:1, b:2, c:3};
let object2 = {...object, d:4};
let object3 = {...object, b:5};

console.log('First object:', object);
console.log('Second object:', object2);
console.log('Third object:', object3 = {...object, b:5});

// Copying only part of an array/object
let arr5 = [...arr1, {...object}, ...arr3, 'x', 'y', 'x']
console.log(arr5)