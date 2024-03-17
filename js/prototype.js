const output = document.getElementById('output');

function Coffee(size, isDecaf, cream, sugar) {
    this.size = size;
    this.isDecaf = isDecaf;
    this.cream = cream;
    this.sugar = sugar;
}

Coffee.prototype.decaffeinated = function () {
    return !this.isDecaf;
}

Coffee.prototype.description = function () {
    return `A ${this.size} coffee, decaf: ${this.decaffeinated()}, with ${this.cream} cream and ${this.sugar} sugar.`;
}

let priyanshCoffee = new Coffee("medium", false, 2, 2);

console.log(priyanshCoffee.__proto__.__proto__);
console.log(Object.getPrototypeOf(priyanshCoffee));
console.log(Coffee.prototype);
console.log(Object.prototype);

let robertCoffee = Object.create(priyanshCoffee);

console.log(robertCoffee.__proto__);

let meganCoffee = new Coffee.prototype.constructor("large", true, 0, 1);

console.log(meganCoffee.size, meganCoffee.isDecaf, meganCoffee.cream, meganCoffee.sugar);
console.log(meganCoffee.description());
console.log(meganCoffee.constructor.name);

Coffee.prototype.price = function () {
    if (this.size === "small") {
        return 2.5;
    } else if (this.size === "medium") {
        return 3.0;
    } else if (this.size === "large") {
        return 3.5;
    }
}

console.log(priyanshCoffee.price());
console.log(robertCoffee.price());
console.log(meganCoffee.price());