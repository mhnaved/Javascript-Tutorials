      /// Js Hoisting
// EX-1      
// x = 6;
console.log(x);
// var x;
var  x =  8;   //undefined

// Ex-2

// console.log(x);
// var x =8;
// x=8;

// Ex-3
//  carName = "Ferrari";
// let carName;                //Uncaught ReferenceError: Cannot access 'carName' before initialization
//  carName = "Ferrari";
// let carName = "Ferrari";
// console.log(carName);
let carName = "Ferrari";
// Uncaught ReferenceError: Cannot access 'carName' before initialization

// EX-4

// bikeName = "ktm";
// const bikeName;                    //uncaught syntax error: missing initializar in const declaration.
// bikeName = "ktm";
const bikeName = "ktm";
console.log(bikeName);
// const bikeName;
// const bikeName = "ktm";
// This code will not run.and shows uncaught syntax error: missing initializar in const declaration.

// Ex-5
// javascript intitialization are not hoisted.
// var x = 5;  //initialize x
// var y = 7;   //initialize y
// console.log(x+y);


            //   CallBack Function

            // JavaScript function Sequence
// function    myDisplayer(some){
//             console.log(some);
            
//  }
                      
//   function myFirst(){
//         myDisplayer ("Hello");
//   }          
//   function mySecond(){
//       myDisplayer ("Goodbye");
//   }

//   mySecond();
//   myFirst();

 // Ex-2
// function myDisplayer(some){
//       console.log(some);
// }
// function myCalculator(num1,num2){
//       let sum = num1 + num2;
//       return sum;
// }
// myCalculator(8,9,myDisplayer);
// let result = myCalculator(6,9);
// myDisplayer(result);
// conslusion: myCalculator function calling myDisplayer funciton

// Ex-3

// function myDisplayer(some){
//       console.log(some);
// }
// function myCalculator(num1,num2){
//       let sum = num1 + num2;
//       myDisplayer(sum);
// }
// myCalculator(6,9);

// Ex-4

function myDisplayer(some){
      console.log(some);
}
function myCalculator(num1,num2,myCallback){
      let sum = num1 + num2;
      myCallback(sum);
}
myCalculator(6,9,myDisplayer);



// practice spot
// function myDisplayer(some){

//       console.log(some);
// }
// function myCalculator(num1,num2,myCallback){
//       let sum = num1 +  num2;
// myCallback(sum);
      
// }
// myCalculator(6,7,myDisplayer);

// function myDisplayer(some){
//       console.log(some);
// }
// function myCalculator(num1,num2,myCallback){
//       let sum = num1 + num2;
//       return myCallback(sum)

// }
// myCalculator(6,6,myDisplayer);


// function myDisplayer(some){
//       console.log(some)
// }
// function myCalculator(x,y,myCallback){
//       let sum = x + y;
//       return myCallback(sum)

// }
// myCalculator(4,5,myDisplayer);



 

