/* Now we will learn about es6 classes

NOW WHAT IS A CLASS?
It IS blueprint or a template.

*/

// Here we created a class 
class Employee {
    constructor(name, experience, salary) {
        this.name = name;
        this.experience = experience;
        this.salary = salary;
    }

    slogan() {
        return `This is the best company. Said by ${this.name}`
    }

    joiningYear() {
        return 2022 - this.experience
    }

    // Now we will see static method 
    // It is the method in which you want to add something that is not related to your class at all and does not use the object. We cannot use "this" in static method

    static addSalary(salary) {
        return salary + 20000
    }

}

// Now we can use this class to create an object

let person = new Employee("Hardik", 5, 50000)
console.log(person);
console.log(person.slogan());
console.log(person.joiningYear());
console.log(Employee.addSalary(50000));

// Now we will do the inheritance
class Coder extends Employee {
    constructor(name, experience, salary, language) {
        super(name, experience, salary);
        this.language = language
    }

}

let coder = new Coder("Parth", 10, 45000, "JavaScript")
console.log(coder);


