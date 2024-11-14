// The map method creates a new array by transforming each element in an existing array, based on the function you provide.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// The filter method creates a new array with only the elements that pass a specific test (return true for the condition).
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]



// The reduce method reduces an array to a single value by executing a reducer function on each element in the array, accumulating the result.
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum); // Output: 15
console.log(numbers3)








const people = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 25 }
  ];
  
  // Step 1: Double the age of each person
  const doubledAges = people.map(person => ({ ...person, age: person.age * 2 }));
  
  // Step 2: Filter out people who are 30 or older
  const under30 = doubledAges.filter(person => person.age < 30);
  
  // Step 3: Calculate the total age of the remaining people
  const totalAge = under30.reduce((sum, person) => sum + person.age, 0);
  
  console.log(totalAge); // Output: 30
  