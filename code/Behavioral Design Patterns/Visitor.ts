// Element interface
interface Shape {
    accept(visitor: ShapeVisitor): void;
}

// Concrete Element 1: Circle
class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this);
    }
}

// Concrete Element 2: Square
class Square implements Shape {
    side: number;

    constructor(side: number) {
        this.side = side;
    }

    accept(visitor: ShapeVisitor): void {
        visitor.visitSquare(this);
    }
}

// Visitor interface
interface ShapeVisitor {
    visitCircle(circle: Circle): void;
    visitSquare(square: Square): void;
}

// Concrete Visitor 1: DrawingVisitor
class DrawingVisitor implements ShapeVisitor {
    visitCircle(circle: Circle): void {
        console.log(`Drawing Circle with radius ${circle.radius}`);
    }

    visitSquare(square: Square): void {
        console.log(`Drawing Square with side ${square.side}`);
    }
}

// Concrete Visitor 2: AreaCalculatorVisitor
class AreaCalculatorVisitor implements ShapeVisitor {
    visitCircle(circle: Circle): void {
        const area = Math.PI * circle.radius * circle.radius;
        console.log(`Area of Circle: ${area.toFixed(2)}`);
    }

    visitSquare(square: Square): void {
        const area = square.side * square.side;
        console.log(`Area of Square: ${area}`);
    }
}

// Usage
const circle = new Circle(5);
const square = new Square(4);

const drawingVisitor = new DrawingVisitor();
const areaCalculatorVisitor = new AreaCalculatorVisitor();

circle.accept(drawingVisitor); // Drawing Circle with radius 5
circle.accept(areaCalculatorVisitor); // Area of Circle: 78.54

square.accept(drawingVisitor); // Drawing Square with side 4
square.accept(areaCalculatorVisitor); // Area of Square: 16