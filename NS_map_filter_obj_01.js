console.log('map,filter,object');
// Map and Filter
const users=[
    {fname:'naved',lname:'talib',weight:60},
    {fname:'jamshed',lname:'talib',weight:55},
    {fname:'shahwez',lname:'talib',weight:72},
    {fname:'parvez',lname:'talib',weight:70},

]
let fullnames = users.map(item=>item.fname+ ' ' +item.lname);
console.log(fullnames);
let fullnames70 = users.filter(item=>item.weight<70).map(item=>item.fname+ ' ' +item.lname);
console.log(fullnames70);

                       //JS Object
//Creat an object
const person = {
    firstName: "Naved",
    lastName: "Talib",
    age: 23,
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
};
//you can access object properties in two ways
// 1. objectName.propertyName 2. objectName["propertyName"]
console.log(person.firstName);
console.log(person.age);
console.log(person["firstName"]);
console.log(person.fullName); //it will return function defination if we use without parenthesis()
console.log(person.fullName());