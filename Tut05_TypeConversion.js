console.log("Welcome to Tut05");
let myvar;
myvar = 30; //Integer value
myvar = String(30);  //String value
console.log(myvar,(typeof myvar));

let booleanvar = true;  // boolean
 booleanvar = String(true);  // string
// console.log(booleanvar,(typeof booleanvar));

let date = new Date();  //date
date = String(new Date())  // string
// console.log(date, (typeof date));

let arr= [1,2,34,5,6];  //array
arr = String([1,2,34,5,6]);  //stirng
// console.log(arr,arr.length,typeof arr);

let i = 8;
// console.log(i.toString());

let stri = "3434";  //string
stri = Number("3434");  // Number
stri = Number("343d4");  //NaN-Not a Number
stri = Number([1,2,3,4]); // NaN
// console.log(stri,typeof stri);

let number = '34'; //string
number = parseInt('34');  // number
number = parseInt('34.987');
number = Number('34.987');
number = parseFloat('34.987');
console.log(number,typeof number); 

let number2 = parseFloat('34.856');
console.log(number2.toFixed(4),(typeof number2))

// Type Coersion
 let mystr = "255";
 let mynum = 35;
 console.log(mystr + mynum);