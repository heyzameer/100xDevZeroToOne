// Let's write some code -
// 1. Write a function that finds the sum of two numbers
// 2. Write another function that displays this result in a pretty format
// 3. Write another function that takes this sum and prints it in passive tense

// function sum(a,b){
//  let sumVal = a + b;
//     return sumVal;
// }
// // let sumVal = sum(2,34);
// // console.log("The sum is :"+sumVal);












// Function to calculate the sum of an array and pass it to a callback
function calculateSum(numbers, callback) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    callback(sum);  // Call the callback function with the sum
}

// Callback function to print the sum in passive tense
function printSumInPassive(sum) {
    console.log(`The total sum has been calculated as ${sum}.`);
}

// Example usage
const numbers = [10, 20, 30, 40];
calculateSum(numbers, printSumInPassive);
