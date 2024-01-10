<br>
<p align="center">
  <img src="./.github/banner.png" width="100%"/>
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
   - [Adapter 🔌](#adapter-)
   - [Bridge 🌉](#bridge-)
   - [Composite 🌴](#composite-)
   - [Decorator 🎨](#decorator-)
   - [Facade 🏰](#facade-)
   - [Flyweight 🪰](#flyweight-)
   - [Proxy 🔗](#proxy-)
5. [Behavioral Design Patterns 🔄](#behavioral-design-patterns-)

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


# Structural Design Patterns 🛠
Structural design patterns are a type of design pattern that deal with object composition and the structure of classes/objects. They help ensure that when a change is made in one part of a system, it doesn't require changes in other parts. This makes the system more flexible and easier to maintain.

![Structural Design Patterns](./images/structural-design-patterns.png)
<br/>
<hr/>

## Adapter 🔌
The Adapter Design Pattern is a software design pattern that allows the interface of an existing class to be used from another interface. It's often used to make existing classes work with others without modifying their source code. The Adapter Pattern is especially useful when the classes that need to communicate with each other do not have compatible interfaces.

In simple words:
> Adapter allows objects with incompatible interfaces to collaborate.

![Adapter](./images/adapter-pattern.png)

### Classical Implementation:
```ts
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
const adapter = new DuckAdapter(duck);

// Now, the duck can be used as an animal
adapter.makeSound(); // Output: Quack, quack!
adapter.move();      // Output: I'm flying!
```
### When To Use Adapter Pattern ? ✅
- **Incompatibility of Interfaces:** Use when different parts can't communicate due to different interfaces.
- **Alternatives to Multiple Inheritance:** In languages without it, Adapter helps inherit behavior from multiple sources.
- **Abstracting Volatile Classes:** Shields the app from changes in frequently changing classes.

### Advantages of Adapter Pattern 🪄 :
- **Reusability and Flexibility:** Reuse existing code without major changes.
- **Decoupling:** Reduces dependencies for easier maintenance.
- **Interoperability:** Enables different parts to work together despite interface mismatches.

### Disadvantages of Adapter Pattern 🆘 :
- **Overuse or Unnecessary Use:** Be cautious to avoid unnecessary complexity.
- **Performance Overhead:** Involves some indirection; may impact performance in critical systems.
- **Potential for Confusion:** Clear documentation needed for developers unfamiliar with the codebase.

## Bridge 🌉
The Bridge pattern is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

In simple words:
> It's like a bridge between abstraction and implementation, enabling independent changes for flexibility.

![Bridge](./images/bridge-design-pattern.png)

### Let's implement:
1. Implementor interface and concrete implementors:
```ts
interface Database {
  connect(): void;
  query(sql: string): any;
  close(): void;
}

class PostgreSQLDatabase implements Database {
  connect(): void {
    console.log("Connecting to PostgreSQL database.");
  }

  query(sql: string): any {
    console.log(`Executing query '${sql}' on PostgreSQL database.`);
  }

  close(): void {
    console.log("Closing connection to PostgreSQL database.");
  }
}

class MongoDBDatabase implements Database {
  connect(): void {
    console.log("Connecting to MongoDB database.");
  }

  query(sql: string): any {
    console.log(`Executing query '${sql}' on MongoDB database.`);
  }

  close(): void {
    console.log("Closing connection to MongoDB database.");
  }
}
```
2. Abstraction and refined abstractions:
```ts
abstract class DatabaseService {
  protected database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  abstract fetchData(query: string): any;
}

class ClientDatabaseService extends DatabaseService {
  fetchData(query: string): any {
    this.database.connect();
    const result = this.database.query(query);
    this.database.close();
    return result;
  }
}
```
3. Client code:
```ts
let databaseService = new ClientDatabaseService(new PostgreSQLDatabase());
databaseService.fetchData("SELECT * FROM users;"); // use PostgreSQL database

databaseService = new ClientDatabaseService(new MongoDBDatabase());
databaseService.fetchData("db.users.find({})"); // use MongoDB database
```
> In this example, we've created a "bridge" that decouples the high-level DatabaseService class from the specifics of the various Database implementations. By doing this, you can add a new type of database to the application without changing the DatabaseService class or the client code. Also, at runtime, the client can decide which database to use.

### When To Use Bridge Pattern ? ✅
- **Hide Implementation Details:** Expose only necessary client methods for cleaner code.
- **Implementation-Specific Behavior:** Enable different platform implementations without altering client code.
- Prevent Monolithic Designs:** Promote modularity to avoid widespread implications of changes.

### Advantages of Bridge Pattern 🪄 :
- **Decoupling 🧩:** Separates abstraction and implementation for independent evolution.
- **Improved Readability 📚:** Enhances code readability and maintainability.
- **Runtime Binding 🔄:** Allows changing implementations at runtime.

### Disadvantages of Bridge Pattern 🆘 :
- **Over-engineering 🛠️:** Adds complexity if abstraction and implementation are stable.
- **Design Difficulty 🤔:** Choosing the right abstraction can be challenging.
- **Development and Maintenance Costs 💸:** Introducing the Bridge pattern requires refactoring, increasing complexity.


## Composite 🌴
The Composite pattern is a structural design pattern that lets you compose objects into tree-like structures and then work with these structures as if they were individual objects.

In simple words:
> It lets clients treat the individual objects in a uniform manner.

![Composite Pattern](./images/composite-pattern.png)

## Implementation in TS:
```ts
// Component
interface Employee {
  getName(): string;
  getSalary(): number;
  getRole(): string;
}

// Leaf
class Developer implements Employee {
  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return "Developer";
  }
}

// Another Leaf
class Designer implements Employee {
  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return "Designer";
  }
}

// Composite
interface CompositeEmployee extends Employee {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
  private employees: Employee[] = [];

  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }

  getSalary(): number {
    return this.salary;
  }

  getRole(): string {
    return "Manager";
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  removeEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  getEmployees(): Employee[] {
    return this.employees;
  }
}
```
Here's how you could use these classes:
```ts
const dev1 = new Developer("John Doe", 12000);
const dev2 = new Developer("Karl Durden", 15000);
const designer = new Designer("Mark", 10000);

const manager = new Manager("Michael", 25000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.addEmployee(designer);

console.log(manager); // { name : "Michael", salary: 25000, employees: [ { name: "John Doe", salary: 12000 } ...] } 
```

### When To Use Composite Pattern ? ✅
- **Tree-like Object Structure:** Useful when objects form a tree-like pattern, such as organizational structures in companies.
- **Part-Whole Hierarchies:** Natural choice for part-whole hierarchies, treating parts and wholes the same way.
- **Uniform Treatment by Clients:** Clients treat all objects uniformly within the composite structure, simplifying client code.

### Advantages of Composite Pattern 🪄 :
- **Simplifies Client Code 🎯:** Uniform treatment of objects simplifies client code.
- **Easily Adds New Components 🌱:** New leaf or composite objects can be added effortlessly by implementing the component interface.
- **Hierarchical Representation 🏰:** Natural fit for systems with hierarchical structures.

### Disadvantages of Composite Pattern 🆘 :
- **SRP Violation 🚧:** May violate the Single Responsibility Principle (SRP).
- **Challenges with Common Interface 🤹‍♂️:** Providing a common interface for classes with vastly different functionalities can be difficult.
- **Indirect Coupling 🔄:** Changes in one object can indirectly affect another, even if not directly linked.


## Decorator 🎨
The Decorator design pattern is a structural design pattern that allows you to dynamically add or override behaviour in an existing object without changing its implementation. This pattern is particularly useful when you want to modify the behavior of an object without affecting other objects of the same class.

In simple words:
> Dynamically enhances object behavior.

![Decorator Pattern](./images/decorator-pattern.png)

## Implementation in TS:
```ts
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

```

### When To Use Decorator Pattern ? ✅
- **Add Responsibilities Dynamically:** When adding responsibilities to objects without affecting others, such as adding formatting options to a text editor.
- **Dynamic Addition and Removal:** For adding and removing responsibilities from an object at runtime.
- **Easily Extend the System:** For future extension, allowing the system to be easily extended with new decorator classes.

### Advantages of Decorator Pattern 🪄 :
- **Flexible Alternative to Subclassing 🔄:** Adds new behaviors to objects without affecting other objects of the same class. 
- **Runtime Addition and Removal 🕰️:** Decorators can be added to and removed from an object dynamically at runtime. 
- **Code Reuse and Reduction 🔄:** Encapsulates specific features in decorator classes, promoting code reuse and reducing redundancy. 

### Disadvantages of Decorator Pattern 🆘 :
- **Many Small Objects 🧩:** Can lead to situations with many small objects, complicating the design and debugging. 
- **Difficult Removal of Specific Wrapper 🔄:** It's challenging to remove a specific wrapper from the wrappers stack. 
- **Complex Initial Configuration 🤯:** Initial configuration code of layers might look ugly in complex systems with many decorators. 

## Facade 🏰

In simple words:
> It provides a simplified interface to a complex subsystem.

![Facade Pattern](./images/facade-pattern.png)

## Implementation in TS:
```ts
// Subsystem 1
class AudioPlayer {
  play(): string {
    return "Playing audio";
  }
}

// Subsystem 2
class VideoPlayer {
  play(): string {
    return "Playing video";
  }
}

// Subsystem 3
class Projector {
  display(): string {
    return "Projector displaying content";
  }
}

// Facade
class MultimediaFacade {
  private audioPlayer: AudioPlayer;
  private videoPlayer: VideoPlayer;
  private projector: Projector;

  constructor(audioPlayer: AudioPlayer, videoPlayer: VideoPlayer, projector: Projector) {
    this.audioPlayer = audioPlayer;
    this.videoPlayer = videoPlayer;
    this.projector = projector;
  }

  startMovie(): string {
    const audio = this.audioPlayer.play();
    const video = this.videoPlayer.play();
    const display = this.projector.display();

    return `${audio}\n${video}\n${display}`;
  }

  stopMovie(): string {
    return "Stopping multimedia playback";
  }
}

// Example usage
const audioPlayer = new AudioPlayer();
const videoPlayer = new VideoPlayer();
const projector = new Projector();

const multimediaFacade = new MultimediaFacade(audioPlayer, videoPlayer, projector);

console.log(multimediaFacade.startMovie()); // Playing audio, Playing video, Projector displaying content
console.log(multimediaFacade.stopMovie()); // Stopping multimedia playback
```

### When To Use Facade Pattern ? ✅
- **Rampant Dependencies:** Reduces high coupling by providing a unified interface.
- **Overwhelming Complexity:** Wraps complex subsystems for a straightforward interaction.
- **Simplified API Need:** For libraries or APIs, offers only essential functionalities.

### Advantages of Facade Pattern 🪄 :
- **Simplified Interface 🛡️:** Shields users from subsystem complexities.
- **Reduced Dependencies 🤝:** Minimizes client code dependencies on subsystems.
- **Decoupling 🔗:** Changes in subsystems minimally impact clients.
- **Ease of Use 👤:** Abstracts complexities, making subsystems user-friendly.

### Disadvantages of Facade Pattern 🆘 :
- **Over-abstraction 🤯:** May introduce unnecessary complexity for simple subsystems.
- **Limited Flexibility 🚫:** Restricts access to full subsystem functionality.
- **Hiding Information 🕵️‍♂️:** May conceal crucial details useful in specific scenarios.

## Flyweight 🪰
The Flyweight design pattern is a structural pattern that aims to minimize memory usage or computational expenses by sharing as much as possible with related objects; it provides a way to use objects in large numbers more efficiently. The pattern achieves this by sharing common portions of the object's state among multiple instances, rather than each instance holding its own copy.

In simple words:
> Flyweight pattern is like having a shared pool of objects, where common features are stored centrally, allowing multiple instances to reuse and reference them. This significantly reduces the memory footprint and improves performance.

![Flyweight Pattern](./images/flyweight-pattern.png)

## Implementation in TS:
```ts
// Flyweight interface
interface TextStyle {
  applyStyle(): void;
}

// Concrete Flyweight
class SharedTextStyle implements TextStyle {
  private font: string;
  private size: number;
  private color: string;

  constructor(font: string, size: number, color: string) {
    this.font = font;
    this.size = size;
    this.color = color;
  }

  applyStyle(): void {
    console.log(`Applying style - Font: ${this.font}, Size: ${this.size}, Color: ${this.color}`);
  }
}

// Flyweight Factory
class TextStyleFactory {
  private textStyles: { [key: string]: TextStyle } = {};

  getTextStyle(font: string, size: number, color: string): TextStyle {
    const key = `${font}-${size}-${color}`;
    if (!this.textStyles[key]) {
      this.textStyles[key] = new SharedTextStyle(font, size, color);
    }
    return this.textStyles[key];
  }
}

// Client
class TextEditor {
  private textStyles: TextStyle[] = [];
  private textStyleFactory: TextStyleFactory;

  constructor(factory: TextStyleFactory) {
    this.textStyleFactory = factory;
  }

  applyStyle(font: string, size: number, color: string): void {
    const style = this.textStyleFactory.getTextStyle(font, size, color);
    this.textStyles.push(style);
  }

  printStyles(): void {
    this.textStyles.forEach((style) => style.applyStyle());
  }
}

// Usage
const textStyleFactory = new TextStyleFactory();
const textEditor = new TextEditor(textStyleFactory);

textEditor.applyStyle("Arial", 12, "Black");
textEditor.applyStyle("Times New Roman", 14, "Red");
textEditor.applyStyle("Arial", 12, "Black"); // Reusing existing style

textEditor.printStyles(); // print all styles...
```

### When To Use Flyweight Pattern ? ✅
- **Large Number of Similar Objects:** Useful when dealing with many similar instances.
- **Shared State:** When objects share a significant portion of their state.
- **Performance Optimization:** Optimizes performance by avoiding redundancy.

### Advantages of Flyweight Pattern 🪄 :
- **Memory Efficiency:** Reduces memory consumption by sharing common state.
- **Performance Improvement:** Minimizes computational costs by reusing shared portions.
- **Scalability:** Handles numerous instances without proportional memory increase.

### Disadvantages of Flyweight Pattern 🆘 :
- **Complexity:** Introduces complexity by separating intrinsic and extrinsic states.
- **Potential Overhead:** Managing shared state might outweigh benefits in simple scenarios.

## Proxy 🔗 

In simple words:
>

![Proxy Pattern](./images/proxy-pattern.png)
