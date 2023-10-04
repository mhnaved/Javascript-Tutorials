console.log('Tut03');
// variables in JS
// var, let, const
var name = 'Naved';
var college = 'Jamia';
var marks = 80;
console.log(name,college,marks);
var name = 'parvez';
name = 'jamshed';
name = 'shahwez';  //it will consider last one. that is shahwez.
console.log(name);
const ownersName = 'Ashi'
// ownersName = 'Arsh'; cant do this(showing error)
console.log(ownersName);
var city = 'Dehli';
console.log(city);

const arr1 =[12,25,36,58,2];
// arr1.push(44);
console.log(arr1);
var city = 'Rampur';
{
    let city = 'Sambhal';
     city = 'Moradabad'
    console.log(city);
}

console.log(city);




const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");
console.log(cars);

// const cars2;
cars2 = ["Saab", "Volvo", "BMW"];
// console.log(cars2);     // Uncaught SyntaxError: Missing initializer in const declaration.


cars3 = ["Saab", "Volvo", "BMW"];
var cars3;
console.log(cars3);

//An array declared with const has Block Scope.

// An array declared in a block is not the same as an array declared outside the block:


const cars4 = ["Saab", "Volvo", "BMW"];
console.log(cars4[0]);
// Here cars[0] is "Saab"
{
  const cars4 = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
  console.log(cars4[2]);
}
// Here cars[0] is "Saab"
console.log(cars4[0]);



// with var
//An array declared with var does not have block scope:

var cars5 = ["Saab", "Volvo", "BMW"];
console.log(cars5[0]);
// Here cars[0] is "Saab"
{
  var cars5 = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
console.log(cars5[0]);
// Here cars[0] is "Toyota"
