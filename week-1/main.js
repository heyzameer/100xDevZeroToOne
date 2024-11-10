// 1. Write the program to greet a person given their first and last name
// 2. Write a program that greets a person based on their gender. (If else)
// 3. Write a program that counts from O - and prints (for loop)

// let firstName = "Zameer";
// let lastName = "khan";
// let age = "18";
// let isMarried = false;

// console.log("My name is "+ firstName+" "+lastName+" and mys age is "+age+".")






// function greetPerson(gender) {
//     if (gender.toLowerCase() === "male") {
//         console.log("Hello, Sir!");
//     } else if (gender.toLowerCase() === "female") {
//         console.log("Hello, Ma'am!");
//     } else {
//         console.log("Hello, there!");
//     }
// }

// // Test the function with different inputs
// greetPerson("male");   // Output: Hello, Sir!
// greetPerson("female"); // Output: Hello, Ma'am!
// greetPerson("other");  // Output: Hello, there!






// let count = 0;

// for (let i = 0; i <= 1000;i++) {
// count= count+i;
// }

// console.log(count);
 




//Array an objects
// 1. Write a program prints all the even numbers in an array
// 2. Write a program to print the biggest number in an arrya
// 3. Write a program that prints all the male people's first name given a complex object
// 4. Write a program that reverses all the elements of an array



// let array = [1,2,3,4,5,6];
// for(let item of array) {
//   if(item%2==0){
//     console.log(item);
//   }
// }




// let array = [1,23,65,232,43];
// let max = array[0];
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > max){
//         max = array[i];
//     }    
// }
// console.log(max);




const people = [
    { firstName: "John", lastName: "Doe", gender: "male", age: 25 },
    { firstName: "Jane", lastName: "Smith", gender: "female", age: 30 },
    { firstName: "Mike", lastName: "Johnson", gender: "male", age: 40 },
    { firstName: "Emily", lastName: "Davis", gender: "female", age: 22 },
    { firstName: "Tom", lastName: "Brown", gender: "male", age: 28 }
];

for (let i = 0; i < people.length; i++) {
    if (people[i]["gender"] === "male") {
        console.log(people[i].firstName);
    }
}


people.forEach(person => {
    if (person.gender === "male") {
        console.log(person.firstName);
    }
});


for (const person of people) {
    if (person.gender === "male") {
        console.log(person.firstName);
    }
}


for (const key in people) {
    if (people[key].gender === "male") {
        console.log(people[key].firstName);
    }
}











// const array = [1, 2, 3, 4, 5];
// const reversedArray = array.reverse();

// console.log(reversedArray); // Output: [5, 4, 3, 2, 1]





const array1 = [1, 2, 3, 4, 5];

for (let i = 0, j = array1.length - 1; i < j; i++, j--) {
    [array1[i], array1[j]] = [array1[j], array1[i]]; // Swap elements
}

console.log(array1); // Output: [5, 4, 3, 2, 1]
