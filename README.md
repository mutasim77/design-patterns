<br>
<p align="center">
  <img src="./.github/banner.png" width="100%" height="270px" />
</p>

<p align="center">
  🔮 Comprehensive Guide to Design Patterns and SOLID Principles in TypeScript 🔮
</p>
<p align="center">
Explore essential concepts in software engineering, such as Design Patterns and SOLID principles, for creating scalable, maintainable, and efficient code. This repo simplifies these ideas, ensuring accessibility for developers of all levels. Let's delve into this world together and unravel the secrets of effective software engineering!
</p>

## What are Design Patterns? 👀
Design patterns are reusable solutions to common problems in software design, offering a structured and proven approach to addressing recurring challenges. They serve as templates or blueprints for solving specific types of problems, making it easier for developers to create efficient and maintainable code. Design patterns provide a shared vocabulary and understanding among developers, promoting reusability, modularity, and improved communication. They encapsulate the best practices of experienced developers, allowing for easier problem-solving and enhanced maintainability. However, it's crucial to apply design patterns judiciously, considering the specific context and potential trade-offs associated with their use.

## Origins and Evolution of Design Patterns 🪄
Imagine building houses. Sometimes, you use similar designs for windows or doors because they work well. The same idea applies to computer programs. Design patterns help us solve common problems in a smart and reusable way.

### Architectural Genesis 🎩
[Christopher Alexander](https://en.wikipedia.org/wiki/Christopher_Alexander), an architect, initially introduced the concept of design patterns in the 1970s through his work "A Pattern Language," where he explored the identification and application of patterns to solve recurring design dilemmas in architecture.

### Transition to Software Development ✨
The adoption and adaptation of this concept for software engineering occurred when a group of computer scientists, often known as the "Gang of Four" (GoF), brought forth the idea. In their influential book "Design Patterns: Elements of Reusable Object-Oriented Software" (1994), Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides introduced 23 design patterns for object-oriented programming, marking a pivotal moment in the popularization of design patterns within software development.

## Why Do We Use Design Patterns? 🎁
Several compelling reasons drive the utilization of design patterns:
1. **Reusability:** Design patterns offer proven solutions to common problems, reducing the time and effort required to address them from scratch, thereby promoting reusability and modularity in software systems.
2. **Improved Communication:** These patterns establish a shared vocabulary and understanding among developers, facilitating more effective communication about design decisions and solutions.
3. **Best Practices:** Encapsulating the best practices of experienced developers, design patterns provide a learning ground for novices to benefit from their expertise.
4. **Maintainability:** The implementation of design patterns often results in more maintainable code, easing the process of updating, debugging, and extending the codebase in the future.
5. **Easier Problem-Solving:** Design patterns offer a structured approach to problem-solving, aiding developers in breaking down complex issues into more manageable components.

## Things to Remember When Using Design Patterns ⚠️
It's super important to use design patterns wisely. Imagine you have a cool tool, but you shouldn't use it for everything. Here's why:
1. **Think About the Situation:** Design patterns work best in certain situations. Using them blindly might not always be the right choice.
2. **Keep It Simple:** Sometimes, a simple solution is better than a fancy one. Don't make things more complicated than they need to be.
3. **Watch Out for Speed Bumps:** Design patterns can slow down our programs a bit. We need to decide if the benefits are worth it.
4. **Be Ready to Change:** As projects grow, what worked before might not be the best choice anymore. We need to be flexible and adjust.

> Using design patterns is like having a toolbox full of helpful tools. Just remember, not every tool is right for every job. We should pick the ones that fit the situation best. If we do that, our programs will be strong and reliable!

## Getting Started 👻
To get started, follow the navigation below to explore different sections of this repository:
- [Design Patterns](#design-patterns-): Reusable solutions to common problems in software design.
- [SOLID Principles](#solid-principles-): Guiding principles for creating well-structured and maintainable code.

Feel free to dive into the content that interests you the most!

# Design Patterns 🔮
Design patterns are reusable solutions to common problems that occur in software design. They can be classified into three main categories: Creational, Structural, and Behavioral design patterns. Each of these categories serves a distinct purpose and helps in solving different types of problems in software design.
1. [Creational Design Patterns 🏗](#creational-design-patterns-)
   - [Singleton 💍](#singleton-)
   - [Prototype 🧬](#prototype-)
   - [Builder 👷](#builder-)
   - [Factory Method 🏭](#factory-method-)
   - [Abstract Factory 🔨](#abstract-factory-)
3. [Structural Design Patterns 🛠️](#structural-design-patterns-)
4. [Behavioral Design Patterns 🔄](#behavioral-design-patterns-)

# Creational Design Patterns 🏗
Creational design patterns 🎨 revolve around the intricacies of object creation. They introduce a level of abstraction to the instantiation process, ensuring the system remains agnostic to the specifics of how its objects come into existence, are composed, and represented. These design patterns offer a mechanism for object creation that conceals the intricacies of the creation logic, steering away from direct object instantiation using the new operator. By doing so, they grant greater flexibility in determining the objects necessary for a given use case. Notable examples of creational design patterns encompass Singleton, Factory Method, Abstract Factory, Builder, and Prototype. 🚀

![Creational Design Patterns](./images/creational-design-patterns.png)
<br/>
<hr/>

## Singleton 💍
> The Singleton pattern is a creational design pattern ensuring that a class has only one instance while providing global access to this instance.

In simple words: 
> "Singleton - ensures that only one object of a particular class is ever created."

![Singleton Design Pattern](./images/singleton-design-pattern.png)

### Steps of Implementation
Implementing the Singleton pattern in object-oriented programming typically involves the following steps:

1. Declare a private ```static``` attribute in the singleton class.
2. Create a public static method (commonly named ```getInstance()```) to serve as a global access point for the singleton object. This method embraces "lazy initialization," meaning it generates a new instance only when necessary.
3. Set the constructor of the singleton class as ```private```, preventing external objects from using the ```new``` operator with the singleton class.
4. Within the static method of the class, verify the existence of the singleton instance. If it exists, return it; otherwise, create a new instance and return it.

### Classic Implementation:
Here is how we might create a database connection using the Singleton pattern:
```ts
class Database {
  // Step 1: Declare a private static instance
  private static instance: Database;

  // Step 3: Make the constructor private
  private constructor() {}

  // Step 2: Create a public static getInstance method
  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public query(query: string): void {
    console.log(`Executing query '${query}' on database.`);
  }
}

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();

db1.query("SELECT * FROM users"); // Executing query `SELECT * FROM users` on database.
db2.query("DROP DATABASE users"); // Executing query `DROP DATABASE users` on database.

console.log(db1 === db2); // true
```

In this example, the ```Database``` class represents a database connection. The getInstance method ensures that there is only one instance of the Database class, and the query method allows you to perform queries on the database. 
The usage demonstrates that ```db1``` and ```db2``` are the same instance, showcasing the Singleton pattern behavior. 

### When To Use Singleton Pattern ? ✅
Consider using Singleton when:
- You have global variables that should be accessible universally.
- There is repeated, expensive initialization of the same resource.
- Multiple parts of your system access and potentially modify a shared resource.
- An entity is accessed inconsistently across the system.
- Duplicate instances are generated, and identical instances are unnecessary.
- Excessive parameters are passed through layers for an object.

### Disadvantages of Singleton Pattern 🆘 :
Despite its advantages, the Singleton pattern has drawbacks:

- **Violates Single Responsibility Principle 🚫:**
Simultaneously managing object instantiation and global access might breach the Single Responsibility Principle.

- **Masking Design Issues 🎭:**
Singleton can hide underlying design problems, offering a quick fix without addressing the root causes.

- **Multithreading Challenges  🔄:**
Implementing Singleton in a multithreaded environment requires careful synchronization to prevent unintended multiple instantiations.

- **Unit Testing Complexity 🧪:**
Unit testing client code using Singleton can be complex due to private constructors and challenges in mocking the singleton instance.


## Prototype 🧬
Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes. It allows you to create a copy of an existing object and modify it to your needs, instead of going through the trouble of creating an object from scratch and setting it up.

In simple words:
> Create a new object based on an existing object through **cloning**.

![Prototype Design Pattern](./images/prototype-design-pattern.png)

### Implementation: 
Let's see a simple implementation of the Prototype pattern in TS through an example in game development.
```ts
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
    constructor(public details: EnemyDetails) {}

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
```
This approach enhances code efficiency and maintainability, allowing easy modification of specific properties without creating new instances for each enemy.

### When to Use the Prototype Pattern ? ✅
The Prototype pattern is handy when copying existing objects is more efficient than creating new ones. It's beneficial for systems seeking independence in creating, composing, and representing products.
- Clone prototypes to avoid redoing intricate constructions for similar objects.
- Clone pre-loaded objects to enhance efficiency when creating from scratch is resource-intensive.
- Use the Prototype pattern when needing multiple similar but not identical objects.
- Facilitates storing and cloning prototypes for restoring previous states, ideal for undo features.

### Advantages of the Prototype Pattern 🪄 : 
- Avoiding Object Reference Errors 🚫
- Efficient Object Cloning 🚀
- Simplifying Object Creation 🌐

### Disadvantages of the Prototype Pattern 🆘 : 
- Shallow vs. Deep Copying 🔄 : Cloning complex objects that have circular references might be very tricky
- Complex Cloning Hierarchies 📜: Cloning hierarchical structures introduces complexities, particularly with interconnected objects and relationships.

## Builder 👷
Builder is a creational design pattern facilitating the step-by-step construction of complex objects. It enables the creation of various object types using a unified construction process, preventing constructor overload. _Use the Builder pattern to get rid of a “telescoping constructor”._

In simple words:
> Builder helps in creating different versions of an object without cluttering the constructor.

![Builder Design Pattern](./images/builder-pattern.png)

### Implementation Example in TypeScript:
```ts
interface IPizza {
    name: string;
    size: string;
    isCheese: boolean;
}

interface IPizzaBuilder {
    setName(name: string): IPizzaBuilder;
    setSize(size: string): IPizzaBuilder;
    setCheese(isCheese: boolean): IPizzaBuilder;
    build(): IPizza;
}

class Pizza implements IPizza {
    constructor(
        public name: string,
        public size: string,
        public isCheese: boolean
    ) { }
}

class PizzaBuilder implements IPizzaBuilder {
    private name: string = "";
    private size: string = "";
    private isCheese: boolean = false;

    setName(name: string): IPizzaBuilder {
        this.name = name;
        return this;
    }

    setSize(size: string): IPizzaBuilder {
        this.size = size;
        return this;
    }

    setCheese(isCheese: boolean): IPizzaBuilder {
        this.isCheese = isCheese;
        return this;
    }

    build(): IPizza {
        return new Pizza(this.name, this.size, this.isCheese);
    }
}

class PizzaDirector {
    constructor(private builder: IPizzaBuilder) { }

    public buildMinimalPizza(name: string, size: string): IPizza {
        return this.builder
            .setName(name)
            .setSize(size)
            .build();
    }

    public buildFullFeaturedPizza(name: string, size: string, isCheese: boolean): IPizza {
        return this.builder
            .setName(name)
            .setSize(size)
            .setCheese(isCheese)
            .build();
    }
}

// Usage:
const builder: IPizzaBuilder = new PizzaBuilder();
const director: PizzaDirector = new PizzaDirector(builder);
const pizzaWithoutCheese: IPizza = director.buildMinimalPizza('Pepperoni', 'Medium');
const pizzaWithCheese: IPizza = director.buildFullFeaturedPizza('Hawaiian', 'Small', true);

console.log(pizzaWithoutCheese); // Pizza: { name: 'Pepperoni', size: 'Medium', isCheese: false} 
console.log(pizzaWithCheese); // Pizza: { name: 'Hawaiian', size :'Small', isCheese: true} 
```
This TypeScript code implements a simplified Builder pattern for creating pizza objects, allowing customization of attributes like name, size, and the presence of cheese.

### When to Use Builder Pattern ? ✅
- **Complex Object Creation 🧩:** Simplify the creation of objects with numerous optional and mandatory attributes.
- **Step-by-step Object Creation 🔨:** Useful when an object needs to be built in multiple ordered steps.
- **Immutable Objects 🔄:** Construct immutable objects with many attributes, enhancing object integrity.
- **Code Clarity 📝:** Enhance code readability, especially when dealing with constructors with numerous parameters.

### Advantages of Builder Pattern 🪄 :
- **Fluent Interface 🌐:** Enhances code readability for step-by-step object construction.
- **Separation of Construction Logic and Business Logic 🧠:** Keeps client code focused on business logic by isolating object construction details.
- **Different Representations 🎨:** Utilizes diverse builders for various object representations without modifying client code.
- **Increased Object Integrity 🔒:** Ensures object validity at each step, elevating data integrity.
- **Immutability 🔄:** Returns immutable objects for simplicity, safety, and cleaner code.

### Disadvantages of Builder Pattern 🆘 :
- **Increased Complexity 📈📉:** Introduces abstraction layers, potentially complicating code for those unfamiliar with the pattern.
- **Additional Code 📄:** May result in more code, especially for smaller classes, potentially increasing codebase size.
- **Runtime Errors 🚫:** Lack of compile-time checks may lead to runtime errors if required fields are not set.
- **Refactoring Difficulties 🛠️:** Alters to the class structure might necessitate updates to the builder code, making refactoring more challenging and time-consuming.

## Factory Method 🏭
The Factory Method Pattern is a creational design pattern that provides an interface for creating objects in a superclass, allowing subclasses to alter the type of objects created.

In Simple Terms:
> It enables the delegation of object instantiation to child classes, offering a way to create objects without specifying their exact classes.

![Factory Method Pattern](./images/factory-method-pattern.png)

### Implementation:
Consider a car manufacturing program with different car types (Sedan, Hatchback): 
```ts
abstract class Car {
  constructor(public model: string, public productionYear: number) {}

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
hatchback.displayCarInfo(); // // This is a Sedan. Model: Corolla, Production Year: 2019
```

### When To Use Factory Pattern ? ✅
- **Uncertain Object Types:** If your software is meant to create different objects at runtime.
- **Similar Classes:** When dealing with numerous classes sharing a common superclass.
- **Pluggability and Flexibility:** Providing users with a way to extend a library with their own classes.

### Advantages Of The Factory Pattern 🪄 :
- **Decoupling 🚀:** Reduces coupling between client code and concrete classes, enhancing maintainability.
- **Flexibility 🤸:** Allows easy addition of new object types without modifying existing client code.
- **Encapsulation 🧳:** Encapsulates object creation details, making the factory responsible for instantiation.

### Disadvantages of Factory Pattern 🆘 :
- **Refactoring 🔄:** Introducing the Factory Pattern to an existing codebase might pose challenges during refactoring.
- **Increased Number of Classes 📈:** The pattern can lead to a higher number of classes, potentially making the codebase more complex.
- **Testing 🧪:** While aiding in writing testable code, complex factories can complicate the testing process, requiring additional setup.


## Abstract Factory 🔨
The Abstract Factory pattern is a creational design pattern that furnishes an interface for constructing families of objects that are related or dependent, all without explicitly specifying their concrete classes.

In Simple Terms:
> A factory of factories.

![Abstract Factory Pattern](./images/abstract-factory-pattern.png)

### Classical Implementation:
```ts
interface Button {
  render(): void;

  onClick(f: Function): void;
}

interface Checkbox {
  render(): void;

  toggle(): void;
}

interface GUIFactory {
  createButton(): Button;

  createCheckbox(button: Button): Checkbox;
}

class WindowsButton implements Button {
  render() {
    console.log("Render a button in Windows style");
  }

  onClick(f: Function) {
    console.log("Bind a Windows style button click event");
    f();
  }
}

class WindowsCheckbox implements Checkbox {
  private button: Button;

  constructor(button: Button) {
    this.button = button;
  }

  render() {
    console.log("Render a checkbox in Windows style");
  }

  toggle() {
    this.button.onClick(() => console.log("Checkbox state toggled!"));
  }
}

class MacOSButton implements Button {
  render() {
    console.log("Render a button in MacOS style");
  }

  onClick(f: Function) {
    console.log("Bind a MacOS style button click event");
    f();
  }
}

class MacOSCheckbox implements Checkbox {
  private button: Button;

  constructor(button: Button) {
    this.button = button;
  }

  render() {
    console.log("Render a checkbox in MacOS style");
  }

  toggle() {
    this.button.onClick(() => console.log("Checkbox state toggled!"));
  }
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(button: Button): Checkbox {
    return new WindowsCheckbox(button);
  }
}

class MacOSFactory implements GUIFactory {
  createButton(): Button {
    return new MacOSButton();
  }

  createCheckbox(button: Button): Checkbox {
    return new MacOSCheckbox(button);
  }
}

function renderUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => console.log("Button clicked!"));
  checkbox.toggle();
}

console.log("App: Launched with the Windows factory.");
renderUI(new WindowsFactory());

console.log("App: Launched with the MacOS factory.");
renderUI(new MacOSFactory());
```

### When To Use Abstract Factory Pattern ? ✅
- **Interrelated Dependencies:** Ensure that a client uses objects that belong together in a family.
- **Switching Product Families:** Easily swap entire families of objects (e.g., different look-and-feel standards).
- **Supporting Multiple Architectures:** Run software in different environments requiring different implementations of related objects.

### Advantages of Abstract Factory Pattern 🪄 :
- **Consistency among products 🤝:** Ensure compatibility and belongingness within a family of products.
- **Code Reusability 🔄:** Promote reuse of code for creating related product families.
- **Single Responsibility Principle 🎯:** Each concrete factory has a single responsibility, leading to cleaner and more understandable code.

### Disadvantages of Abstract Factory Pattern 🆘 :
- **Complexity 📈:** Introduces complexity and abstraction into the code, which may be unnecessary for simpler applications.
- **Tight Coupling And Dependency 🔗:** Client code becomes dependent on the Abstract Factory interface, requiring changes if the interface changes.
- **Limited Flexibility In Modifying Product Families 🚫:** Adding new types of products may require changing the core factory interface, violating the Open/Closed Principle.
