
//Example-01
// constructor function
// function Person(first,last, age, eyecolor){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyecolor = eyecolor;
// }

//creating objects
// const myFather = new Person("Mohd", "Talib", 50, "blue");
// const myMother = new Person("Armana", "Begum", 48, "blue");
// console.log("My Father eyecolor is " + myFather.eyecolor + ". My Mother eyecolor is " + myMother.eyecolor);


//Example-02
// function Person(){
//     this.name = "Naved";
//     this.age = 23;
// }
// const person = new Person();
//prototype value of person
// console.log(Person.prototype);


//Example-03
function Person(){
    this.name = "Naved";
    this.age = 23;
}
const person1= new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';
Person.prototype.id = 20180645;

// prototype value of person
console.log(Person.prototype);

// inheriting/getting the property from prototype
console.log(person1.gender);
console.log(person2.gender);
console.log(person1.id);
console.log(person2.id);
console.log(person1.name);
console.log(person1.age);



//Example-04

// function Person(){
//     this.name = "Naved";
//     this.age = 23;
// }
// const person1= new Person();
// const person2 = new Person();

// // Adding a method to the constructor function

// Person.prototype.greet = function(){
//     console.log('Hello' + ' ' + this.name)
// }
// person1.greet();
// person2.greet();


// practice spot

// function Person(){
//     this.name = "Naved Talib";
//     this.profession = "Student";
//     this.age = 23;
// }
// const person1 = new Person();
// const person2 = new Person();

// Person.prototype.gender = "male";
// Person.prototype.mobileNumber = 9958697685;

// console.log(person1.mobileNumber);
