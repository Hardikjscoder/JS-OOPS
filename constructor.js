/* Concepts in Objects -->

- Creating Objects
- Constructors
- Data types
- Working with properties
- Private properties
- Getter/setters

For some language to be oop, there should be some features such as -
- Class
- Object
- Inheritance
- Encapsulaton

WHAT ARE OBJECTS?
Objcets are unique entity that have methods and properties.

*/

// Object literals
let car = {
    name: "Mercedes",
    topSpeed: 200,
    run: function () {
        return "The car is running";
    }
}

console.log(car);
console.log(car.run());

// Constructors
/* What are constructors? 

They are templates that we can use to create objects.

Like we use new Date()

In this the new keyword creates a new Object using the constructor method.

*/

function generalCar(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
    this.run = function () {
        return `${this.name} is running`;
    }
    this.analyze = function () {
        return (`This car is faster by ${400 - this.topSpeed}km/h than Mercedes`);
    }
}

let newCar = new generalCar("Ferari", 400)
let otherCar = new generalCar("Mercedes", 250)
console.log(newCar); // This will return the object generalCar as newCar
console.log(newCar.run()); // This will return the run functon in the generalCar object

console.log(otherCar);
console.log(otherCar.analyze());



// Creating our own Student object using contructors

// Constructor
function student(name, subject, grade) {
    this.name = name;
    this.subject = subject;
    this.grade = grade;
    this.infoStudent = function () {
        return `The name of the student is ${this.name}, the student's favourite subject is ${this.subject} and the student studies in ${this.grade}`
    }
}

// Objects
let newStudent = new student("Hardik", "Computer", 8 + "th")
console.log(newStudent)
console.log(newStudent.infoStudent());




