console.log("This tutorial is about Function");
// function Define
// 1.
//  function greet(name,thank){
//     console.log(`Happy Birthday ${name2} You are my closet person.God bless you.be happy and enjoy your life.
//     ${thank}! `)
//     return 3;
// }
// let name = 'Banno';
// let name2 = 'Cad';
// greet(name,'Thanks a lot');  //Function Call

// 2.
// function greet(name,thank,love){
//     let msg = `Happy Birthday ${name2} You are my closet person.God bless you.be happy and enjoy your life.  ${thank}! ${love}!!`;
  
//     return msg;
// }
// let name = 'Banno';
// let name2 = 'Cad';


// let val = greet(name,'Thanks a lot','Love you');
// console.log(val);
// console.log( greet(name,'Thanks a lot'));

// 3..
// const mygreet = function(name,thank,love){
//     let msg = `Happy Birthday ${name2} You are my closet person.God bless you.be happy and enjoy your life.  ${thank}! ${love}!!`;
  
//     return msg;
// }
// let name = 'Banno';
// let name2 = 'Cad';
// let val = mygreet(name,'Thanks a lot','Love you');
// console.log(val);

// 4..
// arr = ['fruit', 'vegetables', 'furniture','Laptop'];
// arr.forEach(function(element,index,array){
//     console.log(element,index)  
// });

// 5..
const myobj = {
    name: "Naved",
    game: function(){
        return "GTA";
    }
}
console.log(myobj.name);
console.log(myobj.game());

// 6..
// let x = myFunction(4,3);
// function myFunction(a,b){
//     return a*b;
// }
// console.log(x);

// 7..
function toCelcius(fahrenheit) {
    return (5/9) * (fahrenheit -32);
}
let cel = toCelcius(85)
console.log(cel);

// 8..
function love(namee,thank){
    let msg = `You are sunshine,you are my everything. ${namee},${thank}`;  
    return msg;
}
let namee = 'Ashii';
let val = love(namee,'Thank u alot for being my side always.');
console.log(val);

// Javascrip Function Arguments
function getcube(number){
    return (number*number*number);
}
let c = getcube(3);
console.log(c);



// Function with return value
function hello(){
    return "Hello Ashi ! How are you..";
}
let x = hello();
console.log(x);
 

