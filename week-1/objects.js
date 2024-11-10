// In JavaScript, **objects** are collections of key-value pairs, where the keys are called **properties**. Properties can hold any value, such as strings, numbers, arrays, or other objects. **Methods** are functions that are stored as properties of an object, allowing the object to perform specific actions.

// Here's an overview of objects, their creation, and commonly used methods.

// ### Creating an Object
// There are several ways to create an object in JavaScript:

// 1. **Object literal syntax**
//    ```javascript
   const person = {
       name: "Alice",
       age: 30,
       greet: function() {
           console.log(`Hello, my name is ${this.name}`);
       }
   };
//    ```

// 2. **Using `new Object()` syntax**
//    ```javascript
   const person = new Object();
   person.name = "Alice";
   person.age = 30;
   person.greet = function() {
       console.log(`Hello, my name is ${this.name}`);
   };


// 3. **Constructor function**
//   javascript

function Person(name, age) {
       this.name = name;
       this.age = age;
       this.greet = function() {
           console.log(`Hello, my name is ${this.name}`);
       };
   }
   const person = new Person("Alice", 30);
//    ```

// 4. **Using `class` syntax** (ES6+)
//    ```javascript
   class Person {
       constructor(name, age) {
           this.name = name;
           this.age = age;
       }

       greet() {
           console.log(`Hello, my name is ${this.name}`);
       }
   }
   const person = new Person("Alice", 30);
//    ```

// ### Common Object Methods

// JavaScript provides built-in methods for working with objects.

// 1. **`Object.keys()`**
//    - Returns an array of an object's property names (keys).
//    ```javascript
   const person = { name: "Alice", age: 30 };
   console.log(Object.keys(person)); // Outputs: ["name", "age"]
//    ```

// 2. **`Object.values()`**
//    - Returns an array of an object's values.
//    ```javascript
   const person = { name: "Alice", age: 30 };
   console.log(Object.values(person)); // Outputs: ["Alice", 30]
//    ```

// 3. **`Object.entries()`**
//    - Returns an array of an object's key-value pairs as arrays.
//    ```javascript
   const person = { name: "Alice", age: 30 };
   console.log(Object.entries(person)); // Outputs: [["name", "Alice"], ["age", 30]]
//    ```

// 4. **`Object.assign()`**
//    - Copies properties from one or more source objects to a target object.
//    ```javascript
   const target = { a: 1 };
   const source = { b: 2, c: 3 };
   Object.assign(target, source);
   console.log(target); // Outputs: { a: 1, b: 2, c: 3 }
//    ```

// 5. **`Object.freeze()`**
//    - Freezes an object, making it immutable (no changes allowed).
//    ```javascript
   const person = { name: "Alice", age: 30 };
   Object.freeze(person);
   person.age = 35; // This will not change `age` as the object is frozen.
   console.log(person.age); // Outputs: 30
//    ```

// 6. **`Object.seal()`**
//    - Seals an object, allowing property values to be changed but not new properties to be added or removed.
//    ```javascript
   const person = { name: "Alice", age: 30 };
   Object.seal(person);
   person.age = 35; // This will work
   person.gender = "female"; // This will not work
   console.log(person); // Outputs: { name: "Alice", age: 35 }
//    ```

// 7. **`Object.hasOwnProperty()`**
//    - Checks if an object has a specific property as its own (not inherited).
//    ```javascript
   const person = { name: "Alice" };
   console.log(person.hasOwnProperty("name")); // Outputs: true
   console.log(person.hasOwnProperty("age")); // Outputs: false
   ```

// ### Custom Object Methods

// In addition to these built-in methods, you can create your own methods within an object:

```javascript
const person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
    celebrateBirthday() {
        this.age += 1;
        console.log(`Happy birthday! I am now ${this.age} years old.`);
    }
};

person.greet(); // Outputs: Hello, my name is Alice
person.celebrateBirthday(); // Outputs: Happy birthday! I am now 31 years old.
// ```

// ### Object-Oriented Techniques Using Objects

// - **Inheritance**: Objects can inherit properties and methods from other objects or classes.
// - **Encapsulation**: Objects can be used to encapsulate related data and behavior.
// - **Polymorphism**: Objects of different types can implement methods with the same name but different behaviors.

// Objects are a fundamental part of JavaScript and provide a flexible way to manage and manipulate data.