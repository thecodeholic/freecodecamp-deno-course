// // Types
// /*
// number
// string
// boolean
// null
// undefined
// any
// void - common function
// array
// object
// Enum
// */

// // Implicit types
// let age = 15;
// let name = "John";
// let isHuman = true;

// age = 16; // OK
// age = "foo"; // ERROR

// // Explicit types
// let age: number;
// age = 15; //OK
// age = "foo"; // ERROR

// // functions and types
// function add(a, b) {
//   return a + b;
// }
// add(1, 2); // 3
// add("1", "2"); // 12, but Logical error

// function add(a: number, b: number): number {
//   return a + b;
// }

// add(1, 2); // 3
// add("1", "2"); // Compilation error

// null and undefined
function someFunc(n) {
  if (n % 2 === 0) {
    return "foo";
  }
}
const value = someFunc(4);
value.substring(2);

// function with void

function hello(name: string) {
  console.log(`Hello ${name}`);
}
let msg: string = hello("Zura");

// // Arrays
// let fruits = ["orange", "apple", "banana"];
// fruits = ["orange"]; // OK
// fruits = "orange"; // Error
// fruits.push("mango"); // OK
// fruits.push(15); // Error
// fruits[1] = false; // Error
