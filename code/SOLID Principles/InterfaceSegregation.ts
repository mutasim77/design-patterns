// Example 1
// Interface: Worker
interface Worker {
    work(): void;
}

// Interface: Eater
interface Eater {
    eat(): void;
}

// Class 1: Robot (implements only Worker)
class Robot implements Worker {
    work(): void {
        console.log("Robot is working");
    }
}

// Class 2: Human (implements Worker and Eater)
class Human implements Worker, Eater {
    work(): void {
        console.log("Human is working");
    }

    eat(): void {
        console.log("Human is eating");
    }
}

// Class 3: Dog (implements only Eater)
class Dog implements Eater {
    eat(): void {
        console.log("Dog is eating");
    }
}


// Example 2
interface Printer {
    print(document: Document): void;
}

interface Scanner {
    scan(document: Document): void;
}

interface FaxMachine {
    fax(document: Document): void;
}

class SimplePrinter implements Printer {
    print(document: Document): void {
        // actual implementation
    }
}

class MultiFunctionMachine implements Printer, Scanner, FaxMachine {
    print(document: Document): void {
        // actual implementation
    }

    scan(document: Document): void {
        // actual implementation
    }

    fax(document: Document): void {
        // actual implementation
    }
}