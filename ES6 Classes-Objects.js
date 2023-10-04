//Class
class Student {
    constructor(name,age){
        this.n = name;
        this.a = age;
    }
     //function
    stu(){                 
        console.log("The name of student is:",this.n);
        console.log("The age of student is:",this.a);
    }
}
//Creating object with class
var stuobj = new Student('Naved',23); 
//Accessing function using object.
stuobj.stu();