//? Suppose we have a Rectangle class:
class Rectangle {
    constructor(private width: number, private height: number) { }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    area() {
        return this.width * this.height;
    }
}

//? And we have another Square class:
class Square {
    constructor(private side: number) { }

    getSide() {
        return this.side;
    }

    area() {
        return this.side * this.side;
    }
}

/*
* As you can see, Square and Rectangle have different interfaces, so we can't use them interchangeably directly.
* Suppose we need to use Square objects in a place where Rectangle is expected. We could create an adapter to make the Square class work with the code expecting a Rectangle:
*/
class SquareToRectangleAdapter {
    constructor(private square: Square) { }

    getWidth() {
        return this.square.getSide();
    }

    getHeight() {
        return this.square.getSide();
    }

    area() {
        return this.square.area();
    }
}

//? We can now use an instance of Square where a Rectangle is expected:
let square = new Square(5);
let adapter = new SquareToRectangleAdapter(square);

console.log(adapter.getWidth()); // 5
console.log(adapter.getHeight()); // 5
console.log(adapter.area()); // 25


// Duck class
class Duck {
    quack(): void {
        console.log("Quack, quack!");
    }

    fly(): void {
        console.log("I'm flying!");
    }
}

// Animal interface
interface Animal {
    makeSound(): void;
    move(): void;
}

// DuckAdapter class
class DuckAdapter implements Animal {
    private duck: Duck;

    constructor(duck: Duck) {
        this.duck = duck;
    }

    makeSound(): void {
        this.duck.quack();
    }

    move(): void {
        this.duck.fly();
    }
}

// Using the Duck and DuckAdapter
const duck = new Duck();
const duckAdapter = new DuckAdapter(duck);

// Now, the duck can be used as an animal
duckAdapter.makeSound(); // Output: Quack, quack!
duckAdapter.move();      // Output: I'm flying!