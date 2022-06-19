const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        county: 'One of them'
    },
    job: 'IT guy' 
}

const personTwo = {
    name: 'Sally',
    age: 32,
    favoriteFood: 'Watermelon',
    address: {
        city: 'Somewhere else',
        county: 'Another one of them'
    }
}

//const { name: firstName, favorite = 'Rice'} = personTwo
const { name: firstName, address: {city}} = personTwo;

// using spread operator to create new person
const personThree = {...personOne, ...personTwo};

console.log(firstName)
console.log(city)
// console.log(favoriteFood)
console.log(personThree)



//destructuring inside a function
function printUser({name, age, favoriteFood = 'Burrito'}) {
    console.log(`Name: ${name}. Age: ${age}. Favourtie food: ${favoriteFood}`);
}

printUser(personOne)
