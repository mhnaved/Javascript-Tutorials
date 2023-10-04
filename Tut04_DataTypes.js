//Primitie Data types

// String
let name = "Harry";
console.log("My string is " + name);
console.log("Data type is " +(typeof name));

// Numers
let marks = 44;
console.log("Data type is " +(typeof marks));


// Boolean
let isDriver = true;
console.log("Data type is " +(typeof isDriver));

// Null
let nullVar = null;
console.log("Data type is " +(typeof nullVar));

// Undefined
let undef = undefined;
console.log("Data type is " +(typeof undef));

// Reference Data types
let myarr = [1,2,3,4];
console.log("Data type is " +(typeof myarr));

// Object Literals
let stMarks ={
    harry: 85,
    naved: 90,
    jamshed: 99
}
console.log(stMarks);
console.log("Data type is " +(typeof stMarks));
// Functions
function findName() {

}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);
