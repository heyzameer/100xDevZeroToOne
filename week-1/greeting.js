// Write a function that takes a string as input and returns that string in reverse order.

function reverseString(str){
    let reversedString = '';
    for(let ch of str){
       reversedString = ch + reversedString;
    }
    return reversedString;
 }
 
 console.log(reverseString("hello"));
 
 
 
 
 function reverse(arr) {
     let reversed = [];
     for (let index = arr.length - 1; index >= 0; index--) {
         reversed.push(arr[index]);
     }
     return reversed;
 }
 
 console.log(reverse(['A', 'B', 'c'])); // Output: ['c', 'B', 'A']
 
 
 // Write a program which will give greeting message as “Good Morning”,“Good Evening”,“Good Afternoon”,“Good Night” according to the time.
 // 6 - 12 good morning
 // 12-3 good afternoon
 // 3-6 good evening
 // 6- 12 good night
 
 
 function getGreeting() {
     const currentTime = new Date();
     console.log(currentTime);
     const hour = currentTime.getHours();
     console.log(hour);
     
     if (hour >= 6 && hour < 12) {
         return "Good Morning";
     } else if (hour >= 12 && hour < 15) {
         return "Good Afternoon";
     } else if (hour >= 15 && hour < 18) {
         return "Good Evening";
     } else {
         return "Good Night";
     }
 }
 
 console.log(getGreeting());
 
 
 
 