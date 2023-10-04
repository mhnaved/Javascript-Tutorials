// Closures

// Example 1
// var sum = function(a){    //parent function
//     console.log(a);
//     var c = 4;
//     return function(b){    //anonymous function
//         return a+b+c;
//     }
// }
// sum(3);
// var sum2 = sum(30);
// console.log(sum2(20));

// Example 2
// var sum = function(a,b,c){
//     return {
//         getSumTwo:function(){
//             return a+b;
//         },
//         getSumThree:function(){
//             return a+b+c;
//         }
//     }
// }
// var store = sum(4,5,6);
// console.log(store.getSumTwo());
// console.log(store.getSumThree());

// var store = sum(47,8,9);
// console.log(store.getSumTwo());
// console.log(store.getSumThree());


// Example 3
function calculate(x) {
    function multiply(y){
        return x*y;
    }
    return multiply;
}
const multiply3 = calculate(4);
const multiply4 = calculate(5);
console.log(multiply3);
console.log(multiply3());
console.log(multiply3(5));
console.log(multiply4(5));

// var sum =  function(a){
//     console.log(a);
//     var c = 4;
//     return function(b){
//         return a+b+c;
//     }
   
// }
// var sum2=sum(25);
// console.log(sum2(6));


// practice spot

var sum = function(a){
    console.log(a);
    var c = 6;
    return function(b){
        return a+b+c;
    }
}
console.log(sum(4)(7));