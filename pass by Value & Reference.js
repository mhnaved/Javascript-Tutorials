// Pass by Value
function square(x){
    var sq= x*x;
    return sq;
}
// let y = 10;
let result = square(6);
// console.log(y);
console.log(result);
document.write(result);



// Pass by Reference
let person ={name: "naved",age: 23,};
function increaseAge(obj){
    obj.name = "Ashi";
    obj.age +=2;
   
}
increaseAge(person);
console.log(person);





