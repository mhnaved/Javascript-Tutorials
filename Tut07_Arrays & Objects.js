const marks = [35,25,69,75,85];
const fruits = ['orange','apple','mango'];
const mixed = ['str',45,[2,5]];
const arr = new Array(25,36,8,'orange');
// console.log(arr);
// console.log(mixed);
// console.log(mixed[1]);
// console.log(arr.length);
// console.log(Array.isArray(arr));
arr[0] = 'Naved'
// console.log(arr);

let value = marks.indexOf(35);
// console.log(value);

//Mutating or Modifying arrays
// const marks = [35,25,69,75,85];
// // marks.push(100);
// marks.unshift(500);
// marks.pop();
// marks.shift();
// marks.splice(1, 3);
marks.reverse();
// console.log(marks);

let myobj = {
    name: 'Naved',
    Age: 23,
    isActive: true,
    marks: [1,3,5,6]
}
console.log(myobj);
console.log(myobj.marks);
console.log(myobj['marks']);
console.log(myobj['Age']);


