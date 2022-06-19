const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];


// const a = alphabet[0]
// const c = alphabet[2]

const [a, ,c, ...rest] = alphabet;
const newArray = [...alphabet, ...numbers];

console.log(a);
console.log(c);
console.log(rest);
console.log(newArray)


//Destructuring with functions and parameters
//Simple function to sum and muliply two numbers
const sumAndMultiply = (a, b) => [a+b, a*b, a/b];

//destructuring the ouputs and assigning to two vars 'sum' and 'multiply'
//division var will return 'No division' by default unless passed param(remove the a/b from arrow function above to see this.)
const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);

console.log(sum);
console.log(multiply);
console.log(division);