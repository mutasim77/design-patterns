// Component
interface Coffee {
    cost(): number;
    description(): string;
}

// ConcreteComponent
class SimpleCoffee implements Coffee {
    cost() {
        return 10;
    }

    description() {
        return "Simple coffee";
    }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    abstract cost(): number;
    abstract description(): string;
}

// ConcreteDecorator
class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
        super(coffee);
    }

    cost() {
        return this.coffee.cost() + 2;
    }

    description() {
        return `${this.coffee.description()}, with milk`;
    }
}

// Usage
const plainCoffee = new SimpleCoffee();
console.log("Plain Coffee Cost: $" + plainCoffee.cost()); // Plain Coffee Cost: $10
console.log("Description: " + plainCoffee.description()); // Description: Simple coffee

const coffeeWithMilk = new MilkDecorator(plainCoffee);
console.log("Coffee with Milk Cost: $" + coffeeWithMilk.cost()); // Coffee with Milk Cost: $12
console.log("Description: " + coffeeWithMilk.description()); // Description: Simple coffee, with milk
