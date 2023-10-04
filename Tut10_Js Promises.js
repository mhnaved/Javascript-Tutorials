// Example: 01

function func1(){
    return new Promise(function (resolve, reject){
          setTimeout(()=>{
            const value = false;
            if(value){
                console.log('Function: Your promise has been resolved.')
                resolve();
            }
            else{
                console.log('Function: Your promise has not been resolved')
                reject();
            }
        },2000);
    })
    }

// func1().then(function(value){
//     console.log("Harry: Thanks for resolving.")
    
// }).catch(function(error){
//     console.log("Harry: Very bad bro. Reason:" + error)
// })

async function gettData(){
    const  value = true;
    const res = await func1(value);
    console.log(res);
}
gettData();

// Example: 02

// const count = true;
// let countValue = new Promise(function(resolve,reject){
//     if(count){
      
//         console.log("and Hopfully we can cound easily.")
//         resolve("There is a count value.");
//     }else{
//         reject("There is no count value.")
//     }
// })
// console.log(countValue);

// async function gettData(){
//     const result = await countValue;
//     console.log(result);
// }

// gettData();



// Example: 03
// let marks = 33;

// let passingMarks = new Promise(function(resolve,reject){
//     if(marks==33){
//         resolve('You are passed.')
//     }else if(marks>33){
//         resolve('you are passed too.')
//     }else{
//         reject('You are not passed.')
//     }
// })
// console.log(passingMarks);

// async function data(){
//     const res = await passingMarks;
//     console.log(res);
// }
// data();


// Example: 03
// function myDisplayer(some){
//     console.log(some);
// }
// let myPromise = new Promise(function(myResolve,myReject){
//     // "Producing Code" (May take some time)
//     let x = 0;
//     if(x==5){
//         myResolve("OK");
//     }
//     else{
//         myReject("Error");
//     }
// });
// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
// );


// Example: 03

//return a value
// let countValue = new Promise(function(resolve,reject){
//     reject('Promise Rejected');
// });
// executes when promise is resolved successfully
// countValue.then(
//     function successValue(result){
//         console.log(result);
//     },
// )
// executes if there is an error
// .catch(function errorValue(result){
//     console.log(result);
// });

// Example: 04

// function dish(food){
//     return new Promise(function(Tasty,VeryBad){
//         setTimeout(function(){
//             const salt = true;
//             if(salt){
//                 console.log('There is salt! and ${food} is very tasty.');
//                 Tasty();
//             }
//             else{
//                 console.log('There is no salt! and ${food} is not good.');
//                 VeryBad();
//             }
//         },2000);
    
//     });
// }
// dish("Biryani").then(function(){
//     console.log("This food is very tasty.Thank you!");
// }).catch(function(){
//     console.log("This is not good food I have not ever eaten food like this !");
// });



// Example: 05
// function request(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             const realName = true;
//             if(realName){
//                 console.log("your name is real.")
//                 resolve();
//             }else{
//                 console.log("Your name is not real.")
//                 reject();
//             }
//         },2000)
//     })
// }
// request().then(function(){
//     console.log("your are confirmed");
// }).catch(function(){
//     console.log("you are cancelled.");
// })



// practice spot

// let count = false;
// let countValue = new Promise(function(resolve,reject){
//     if(count){
//         resolve("There is a count value")
//     }else{
//         reject("THere is no count value")
//     }
// })
// console.log(countValue);

