const person = {
    firstName: "Naved",
    lastName: "Talib",
    age: 23,
    fullName: function(){
        return this.firstName + " " + this.lastName + " " + "age-" + this.age
}
};
console.log(person.fullName());
