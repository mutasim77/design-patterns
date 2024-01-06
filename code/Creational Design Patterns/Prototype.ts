/*
* Example 1: Enemy class 
* Creating an Enemy class with clone method
*/
interface Prototype {
    clone(): Prototype;
    details: EnemyDetails;
}

interface EnemyDetails {
    type: string;
    strength: number;
}

/**
 * Concrete Prototype representing an Enemy in a Game
 */
class Enemy implements Prototype {
    constructor(public details: EnemyDetails) { }

    public clone(): Enemy {
        const clone = new Enemy({ ...this.details });
        return clone;
    }
}

// Usage
const originalEnemy: Prototype = new Enemy({ type: "Dragon", strength: 10 });
const clonedEnemy: Prototype = originalEnemy.clone();

console.log(originalEnemy.details); // { type: 'Dragon', strength: 10 }
console.log(clonedEnemy.details); // { type: 'Dragon', strength: 10 }

clonedEnemy.details = { type: 'Goblin', strength: 8 };
console.log(clonedEnemy.details); // { type: 'Goblin', strength: 8 }

/*
* Example 2: Shape class 
* Creating an abstract Shape class with clone method
*/

interface ShapeProperties {
    color: string;
    x: number;
    y: number;
}

// Abstract class Shape with the clone method and common properties for all shapes
abstract class Shape {
    public properties: ShapeProperties;

    constructor(properties: ShapeProperties) {
        this.properties = properties;
    }

    abstract clone(): Shape;
}

// Concrete class Rectangle extending Shape
class Rectangle extends Shape {
    public width: number;
    public height: number;

    constructor(properties: ShapeProperties, width: number, height: number) {
        super(properties);
        this.width = width;
        this.height = height;
    }

    clone(): Shape {
        let clonedProperties: ShapeProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y,
        };
        return new Rectangle(clonedProperties, this.width, this.height);
    }
}

// Concrete class Circle extending Shape
class Circle extends Shape {
    public radius: number;

    constructor(properties: ShapeProperties, radius: number) {
        super(properties);
        this.radius = radius;
    }

    clone(): Shape {
        let clonedProperties: ShapeProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y,
        };
        return new Circle(clonedProperties, this.radius);
    }
}

// Create a red rectangle
let redRectangle: Shape = new Rectangle({ color: "red", x: 0, y: 0 }, 10, 20);

// Clone the red rectangle
let anotherRedRectangle: Shape = redRectangle.clone();

// Change the color of the clone to blue
anotherRedRectangle.properties.color = 'blue';

console.log(redRectangle); // { properties: { color: 'red', x: 0, y: 0 }, width: 10, height: 20 }
console.log(anotherRedRectangle); // { properties: { color: 'blue', x: 0, y: 0 }, width: 10, height: 20 }

