// 1st exercise

// Creating the object 
let student = {
    name: "Hardik",
    grade: "VIII",
    rollno: 15
}

// Deleting the rollno property from the object
delete student.rollno

// Finding the object length
let objLength = Object.keys(student).length

console.log(student);

console.log(objLength);

// 2nd exercise

// Create the object
let library1 = [
    {
        author: "Ruskin Bond",
        bookName: "The flying colors",
        readingStatus: true
    },

    {
        author: "Charles Dickens",
        bookName: "The thief",
        readingStatus: true
    }
]

console.log(library1);

// 3rd exercise

/* Creata a class cylinder and calculate the volume of the cylinder */

class cylinder {
    constructor(r, h) {
        this.radius = r;
        this.height = h;
    }

    volCylinder() {
        return Math.ceil(Math.PI * Math.pow(this.radius, 2) * this.height)
    }
}

let shape = new cylinder(5, 7)
console.log(shape)
console.log(shape.volCylinder() + "cm^3")

// 4th exercise

// Write a js program to parse a url

let url = "https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php";

function urlParse() {

    // Created a parser using createElement() method
    let parser = document.createElement("a");
    parser.href = url;

    // Host of the URL
    console.log(parser.host);

    // Hostname of the URL
    console.log(parser.hostname);
}

console.log(urlParse());

// 5th exercise

// Create a funciton that checks whether an object contains a given property or not.
function checkForProperty(myObj, key) {
    return myObj != null && hasOwnProperty.call(myObj, key)
}

console.log(checkForProperty({ name: "Hardik", age: 14 }, "age"));




