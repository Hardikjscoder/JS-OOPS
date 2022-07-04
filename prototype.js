/* Prototypes are simply from where you have started the object creation. It also contains additional methods. */

// Object created with constructors.
function obj(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

/* Here we add getName, getAge and getAddress prototype to our object and changed the prototype. 

NOTE: We should not change the prototype of an object created using literal. It will give us an error. Instead we should use a constructor.

NOTE: Also we should never use Object.prototype as it will change the prototype of every object that we create. It is not a good practice.

*/

obj.prototype.getName = function () {
    return this.name;
}

obj.prototype.getAge = function () {
    return this.age;
}

obj.prototype.getAddress = function () {
    return this.address;
}

// This will help me setting a new name.
obj.prototype.setName = function (newName) {
    this.name = newName;
}

// Here we create an object using contructors template.
let person = new obj("Hardik", 14, "Karnal");

console.log(person);

