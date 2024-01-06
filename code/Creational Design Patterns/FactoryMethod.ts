/*
* Example 1: Car class 
* Creating a Car Base class, Car Sub classes and Car Factory
*/

abstract class Car {
    constructor(public model: string, public productionYear: number) { }

    abstract displayCarInfo(): void;
}

class Sedan extends Car {
    displayCarInfo() {
        console.log(`This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class Hatchback extends Car {
    displayCarInfo() {
        console.log(`This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`);
    }
}

class CarFactory {
    public createCar(type: string, model: string, productionYear: number): Car {
        switch (type) {
            case "Sedan":
                return new Sedan(model, productionYear);
            case "Hatchback":
                return new Hatchback(model, productionYear);
            default:
                throw new Error("Invalid car type");
        }
    }
}

// Usage:
const carFactory = new CarFactory();

const sedan = carFactory.createCar("Sedan", "Camry", 2023);
sedan.displayCarInfo(); // This is a Sedan. Model: Camry, Production Year: 2023

const hatchback = carFactory.createCar("Hatchback", "Corolla", 2019);
hatchback.displayCarInfo(); // This is a Hatchback. Model: Corolla, Production Year: 2019

/*
* Example 2: PaymentProcessor class 
* Creating a Payment Base class, Payment Sub classes and Payment Processor Factory
*/

abstract class PaymentProcessor {
    constructor(public amount: number) { }

    abstract processPayment(): void;
}

class PaypalProcessor extends PaymentProcessor {
    processPayment() {
        // Insert PayPal-specific payment processing logic here.
        console.log(`Processing PayPal payment of $${this.amount}`);
    }
}

class StripeProcessor extends PaymentProcessor {
    processPayment() {
        // Insert Stripe-specific payment processing logic here.
        console.log(`Processing Stripe payment of $${this.amount}`);
    }
}

class BankTransferProcessor extends PaymentProcessor {
    processPayment() {
        // Insert bank transfer-specific payment processing logic here.
        console.log(`Processing Bank Transfer payment of $${this.amount}`);
    }
}

class PaymentProcessorFactory {
    public createProcessor(type: string, amount: number): PaymentProcessor {
        switch (type) {
            case "Paypal":
                return new PaypalProcessor(amount);
            case "Stripe":
                return new StripeProcessor(amount);
            case "BankTransfer":
                return new BankTransferProcessor(amount);
            default:
                throw new Error("Invalid payment processor type");
        }
    }
}

const paymentProcessorFactory = new PaymentProcessorFactory();

// Use the factory to create a PayPal payment processor
const paypalProcessor = paymentProcessorFactory.createProcessor('Paypal', 100);
paypalProcessor.processPayment(); // Processing PayPal payment of $100

// Use the factory to create a Stripe payment processor
const stripeProcessor = paymentProcessorFactory.createProcessor('Stripe', 200);
stripeProcessor.processPayment(); // Processing Stripe payment of $200

// Use the factory to create a Bank Transfer payment processor
const bankTransferProcessor = paymentProcessorFactory.createProcessor('BankTransfer', 300);
bankTransferProcessor.processPayment(); // Processing Bank Transfer payment of $300