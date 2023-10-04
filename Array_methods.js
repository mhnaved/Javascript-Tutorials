const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
// document.write(fruits.toString());
console.log(fruits.join(" * "));

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();
console.log(fruits2)


const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.push("Kiwi");
console.log(fruits3)

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.shift();
console.log(fruits4)

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.unshift("Lemon");
console.log(fruits5);

const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6[fruits6.length] = "Kiwi";
console.log(fruits6);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const fruits7 = ["Banana", "Orange", "Apple", "Mango","Papaya"];
fruits7.splice(2, 2, "Lemon");
console.log(fruits7);

const fruits8 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits8.slice(1,4);
console.log(citrus);

const fruits9 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits9.slice(1, 3);
console.log(citrus2);



const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[1] = "Toyota";

// Add an element:
cars.push("Audi","Maruti");
cars.push("Thar");
console.log(cars);

// const cars2;
const cars2 = ["Saab", "Volvo", "BMW"];
console.log(cars2);     // Uncaught SyntaxError: Missing initializer in const declaration.
