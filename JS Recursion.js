// Ex-1 : To countDown a number

// function countDown(number){
//     console.log(number);
//     const newNumber = number - 1;
//     if(newNumber>0)
//     countDown(newNumber);
// }
// countDown(5);

// function countUp(number){
    
//     console.log(number);
//     const newNumber = number + 1;
//     if(newNumber>=0)
//     countUp(newNumber);
// }
// countUp(5);

// Ex-2: Find Factorial

// function factorial(x){
//     if(x==0){
//         return 1;
//     }
//     else{
//         return x*factorial(x-1);
//     }
// }
// const num = 3;
// if(num>0){
    // let result = factorial(8);
    // console.log(result);
// }

//Find the nth Fibonacci Numer
// function findFibonacci(n){
//     if(n==0)
//     return 0;
//     if(n==1)
//     return 1;
//     return findFibonacci(n-1) + findFibonacci(n-2);
// }
// var result = findFibonacci(5);
// console.log(result);

// Fibonacci Series are - 0,1,1,2,3,5,8,13,21...and so on.

//Calculate the sum of natural number upto n

function addTo(n){
    if(n==0)
    return 0;
    return n + addTo(n-1);
}
let sum = addTo(5);
console.log(sum);