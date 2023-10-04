//Non Curried version

// Example-1
// const add = (a,b,c)=>{
//     return a+b+c;
// }
// console.log(add(2,4,5));

//Curried Version

// Example-02
const addCurry = (a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
let x = addCurry(5)(6)(7);
console.log(x);

// Example-03
// Creating a friend request curry function

// function sendRequest(greet){
//     return function(name){
//         return function(message){
//             return `${greet} ${name}, ${message}`
//         }
//     }
// }
// let y = sendRequest('Hello')('Banno')('Can you add me to your Linkedin network?');
// console.log(y);

// Example-04

// const myFavouriteFruits = (fruits1)=>{
//     return (fruits2) => {
//         return (fruits3) => {
//             return  `${fruits1}, ${fruits2}, ${fruits3}`
//         }
//     }
// }
// console.log(myFavouriteFruits('Apple')('Mango')('Litchi'));
// ${fruits1}; ${fruits2}, ${fruits3};


// practice spot
// const multiplycurry = (a)=>{
//     return (b)=>{
//         return (c)=>{
//             return a*b*c;
//         }
//     }
// }
// let x =multiplycurry(2)(3)(4);
// console.log(x);


// function sendRequest(greet){
//     return function(name){
//         return function(message){
//             return `${greet} ${name},${message}` ;
//         }
//     }
// }
// console.log(sendRequest('Hello')('Ashi')('You are a great guy.'));



// practice spot

// witout currying
// const add = (a,b,c)=>{
//     return a+b+c;
// }
// let x = add(2,3,6)
// console.log(add(2,3,6));
// console.log(x); 

// function addition(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(addition(2)(5)(6));


// function multiplycurry(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }
// console.log(multiplycurry(3)(4)(5));