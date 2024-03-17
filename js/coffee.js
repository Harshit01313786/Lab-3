const output = document.querySelector('#output');

// Step 1: Define the Coffee class
class Coffee {
    constructor(size, type, caffeine) {
        this.size = size;
        this.type = type;
        this.caffeine = caffeine;
    }

    // Method to serve the coffee
    serveIt() {
        output.innerHTML += `<p>Serving ${this.size} ${this.type} coffee.</p>`;
    }
}

// Step 2: Instantiate a coffee based on the Coffee class
const myCoffee = new Coffee('Medium', 'Latte', 'Medium');

// Step 3: Add a method to the Coffee class called serveIt()
myCoffee.serveIt();

// Step 4: Define a subclass of the Coffee class
class Latte extends Coffee {
    constructor(size, type, caffeine, milkType) {
        super(size, type, caffeine);
        this.milkType = milkType;
    }

    // Method to describe the Latte
    latteDesc() {
        output.innerHTML += `<p>${this.size} ${this.type} with ${this.milkType} milk.</p>`;
    }
}

// Step 5: Create a new instance of the Latte object
const myLatte = new Latte('Large', 'Latte', 'Low', 'Almond');

// Step 6: Call up the latteDesc() method for the above created Latte instance
myLatte.latteDesc();

// Step 7: Create yet another instance of Latte using the console,
// and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class
const anotherLatte = new Latte('Small', 'Latte', 'High', 'Oat');
anotherLatte.serveIt();
anotherLatte.latteDesc();

// Class Exercise: Define a new subclass for a different type of coffee
class Americano extends Coffee {
    constructor(size, type, caffeine, shots) {
        super(size, type, caffeine);
        this.shots = shots;
    }

    // Method to describe the Americano
    americanoDesc() {
        output.innerHTML += `<p>${this.size} ${this.type} with ${this.shots} shots.</p>`;
    }
}

// Create an instance of the Americano object
const myAmericano = new Americano('Medium', 'Americano', 'High', 2);

// Call up the americanoDesc() method for the created Americano instance
myAmericano.americanoDesc();
