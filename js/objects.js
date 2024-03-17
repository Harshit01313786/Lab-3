let person1 = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar"
    },
    age: 80,
    gender: "Male",
    address: {
        streetNo: 100,
        streetName: "Georgian Drive",
        city: "Barrie"
    },
    interests: ["swimming", "painting", "coding"],
    greetings: function () {
        alert(`Hello, I am ${this.name.firstName}.`);
    },
    bio: function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    }
};

let person2 = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    age: 25,
    gender: "male",
    interests: ["programming", "cycling", "photography"],
    greeting: function () {
        alert(`Hello, my name is ${this.name.firstName} ${this.name.lastName}`);
    },
    bio: function () {
        return `My name is ${this.name.firstName} ${this.name.lastName}, I am ${this.age} years old, and I am a ${this.gender}. My interests include ${this.interests[0]}, ${this.interests[1]}, and ${this.interests[2]}.`;
    },
    goodbye: function () {
        alert(`This is ${this.name.firstName} signing off!`);
    }
}

let person3 = {
    name: "P2",
    hello: function () {
        alert(`Hi, I am ${this.name}`);
    }
}

person1.hello(); // This line will cause an error as person1 does not have a hello method.
person2.greeting();
person3.hello();

let output = document.getElementById("output");
output.textContent = person2.bio();

person2.age = 16;
person2.name.firstName = "Robert";

output.textContent = person2.bio();

output.textContent = person2.age;
output.textContent = person2["age"];
output.textContent = person2.name.firstName;
output.textContent = person2["name"]["firstName"];

person2.eyeColor = "green";

person2.goodbye = function () {
    alert(`This is ${this.name.firstName} signing off!`);
}

person2.goodbye();

let key = "hairColor";
let value = "black";
person2[key] = value;

output.textContent = person2[key];
