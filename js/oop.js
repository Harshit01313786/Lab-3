const output = document.getElementById('output');
const output2 = document.getElementById('output2');

function createNewPerson(firstName, lastName, age, interests) {
    let obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    obj.age = age;
    obj.interests = interests;
    obj.greetings = function () {
        output.textContent = `Hello, I am ${this.name.firstName}.`;
    }
    return obj;
}

let person1 = createNewPerson("P1", "LP1", 20, ["swimming", "painting"]);
let person2 = createNewPerson("P2", "LP2", 60, ["coding", "painting"]);

function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greetings = function () {
        output.textContent = `Hello, I am ${this.name.firstName}.`;
    }
    this.bio = function () {
        output2.textContent = `This is ${this.name.firstName} ${this.name.lastName}, ${this.age} years old, ${this.gender}. ${this.name.firstName}'s interests are ${this.interests.join(", ")}.`;
    }
}

let person3 = new Person("P3", "LP3", 50, "male", ["running", "sleeping"]);

let car = new Object();
car.brand = "honda";
car.model = "civic";
car.fun = function () {
    console.log(this.brand);
}

let anotherCar = Object.create(car);
anotherCar.brand = "toyota";

// Hamburger function
function Hamburger(type,bun, garnishes, cheese, sauce, meat, patties, extras) {
    this.type = type;
    this.bun = bun;
    this.garnishes = garnishes;
    this.cheese = cheese;
    this.sauce = sauce;
    this.meat = meat;
    this.patties = patties;
    this.extras = extras;
    this.description = function () {
        output2.textContent = `This is a ${this.patties}-patties ${this.type} burger with ${this.bun} bun, ${this.garnishes.join(", ")}, ${this.cheese.join(", ")}, ${this.sauce.join(", ")}, ${this.meat} patty, and ${this.extras.join(", ")}.`;
    }
}

let hamburger = new Hamburger("beef", "sesame", ["lettuce", "tomato"], ["american", "swiss"], ["ketchup", "mayo"], "beef", 1, ["pickles", "onions"]);
hamburger.description();