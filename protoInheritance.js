/* Now we will learn about prototype inheritance. */

// Here we will create a prototype 
const proto = {
    slogan: function () {
        return `This company is the best!`
    },
    newName: function (newName) {
        this.name = newName;
    }
}

// We created an object using proto template.
let person = Object.create(proto)

person.name = "Hardik";
person.age = 14;
person.role = "Coder";

// This function will change the name to new name
person.newName("Parth");

console.log(person);

// Alternative syntax

// Here also we created an object using proto but with less code.
let anotherPerson = Object.create(proto, {
    name: { value: "Hardik", writable: true },
    age: { value: 14 },
    role: { value: "Programmer" },
});

// We cannot change the name until we make our name writable as true
anotherPerson.newName("Pratham");

console.log(anotherPerson);

// Now we will do the inheritance

// Here we will create an employee contructor

function employee(empName, empSalary, empExperience) {
    this.name = empName;
    this.salary = empSalary;
    this.experience = empExperience;
}

// Slogan inheritance
employee.prototype.slogan = function () {
    return `This company is the best! Regards : ${this.name}`
}

// Object creation
let otherPerson = new employee("Hardik Rana", 45000, 5 + "years");

console.log(otherPerson);

console.log(otherPerson.slogan());


// Inherited Programmer constructor
function programmer(empName, empSalary, empExperience, language) {
    employee.call(this, empName, empSalary, empExperience, language);
    this.language = language;
}


// Inherit the proto
programmer.prototype = Object.create(employee.prototype)

// Set the constructor
programmer.prototype.constructor = programmer;


// Object creation
let xyzPerson = new programmer("Aditya", 70000, 10 + "years", "Python");

console.log(xyzPerson);

console.log(xyzPerson.slogan());