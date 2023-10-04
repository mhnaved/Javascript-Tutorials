                 //Spread and Rest Operator
// They are merged into one using spread operator(...).
var array1 = [10,20,30,50,42];
var array2 = [60,75,80,90,95];
var array3 = [...array1, ...array2];
// console.log(array3);

var array1 = [10,20,30,50,42];
var array2 = [...array1, 60,70];
// console.log(array2);

var a, b, c, d, e, f, g;
a = [10,20];
b = "rank";
c = [30,"points"];
d = "run";
//concat method.
e = a.concat(b, c, d);

//spread operator
f = [...a,b,...c, d];
// console.log(e);
// console.log(f);

// 2. In this example,we will copy objects using the spread operator.
// const obj = {
//     fname: "Naved",
//     lname: "Talib",
// };
// const obj2 = {...obj};
// console.log(obj2);

                      //Rest Operator
// 1. By using rest operator,we can put all the remaining elements of an array in a new array.                      
var colors = ["Violet","Indigo","Blue","Green","Black"];
var [a,b,c,...args] = colors;
// console.log(a);    
// console.log(b);
// console.log(c);
// console.log(args);  
   
// EX-2
function addition(...numbers) {
    var sum = 0;
    numbers.forEach(function (number) {
        sum += number;
    });
    return sum;
}
console.log(addition(5))
console.log(addition(5,6,7,8));     //we can passs too many arguments in rest operator.

// practice spot

// function addition(...numbers){
//     var sum = 0;
//     numbers.forEach(function(number){
//         sum += number;  
//     });
//     return sum

// }
// console.log(addition(3,4));

// function addition (...numbers){
//     var sum = 0;
//     numbers.forEach(function(number) {
//         sum+= number;
//     })
//     return sum;
// }
// console.log(addition(6,7,8));


// function calcu(x){
//     function multiipl(y){
//         return x*y;
//     }
//     return multiipl;
// }
// const mult3 = calacu(8);
// console.log(mult3(5));