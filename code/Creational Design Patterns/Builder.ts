/*
* Example 1: Pizza class 
* Creating a Pizza class, Pizza Builder and Pizza Director
*/

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

console.log(pizzaWithoutCheese); // Pizza: {"name": "Pepperoni","size": "Medium","isCheese": false} 
console.log(pizzaWithCheese); // Pizza: {"name": "Pepperoni","size": "Medium","isCheese": true} 

/*
* Example 1: Customer class 
* Creating a Customer class, Customer Builder and Customer Director
*/
interface ICustomer {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
}

interface ICustomerBuilder {
    setFirstName(firstName: string): ICustomerBuilder;
    setLastName(lastName: string): ICustomerBuilder;
    setEmail(email: string): ICustomerBuilder;
    setPhoneNumber(phoneNumber: string): ICustomerBuilder;
    build(): ICustomer;
}

class Customer implements ICustomer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string
    ) {
        // Customer constructor logic...
    }

    // Customer methods...
}

class CustomerBuilder implements ICustomerBuilder {
    private firstName: string = "";
    private lastName: string = "";
    private email: string = "";
    private phoneNumber: string = "";

    setFirstName(firstName: string): ICustomerBuilder {
        this.firstName = firstName;
        return this;
    }

    setLastName(lastName: string): ICustomerBuilder {
        this.lastName = lastName;
        return this;
    }

    setEmail(email: string): ICustomerBuilder {
        this.email = email;
        return this;
    }

    setPhoneNumber(phoneNumber: string): ICustomerBuilder {
        this.phoneNumber = phoneNumber;
        return this;
    }

    build(): ICustomer {
        return new Customer(
            this.firstName,
            this.lastName,
            this.email,
            this.phoneNumber
        );
    }
}

class CustomerDirector {
    constructor(private builder: ICustomerBuilder) { }

    buildMinimal(firstName: string, lastName: string, email: string): ICustomer {
        return this.builder
            .setFirstName(firstName)
            .setLastName(lastName)
            .setEmail(email)
            .build();
    }
}

// Usage example:
const userBuilder: ICustomerBuilder = new CustomerBuilder();
const userDirector: CustomerDirector = new CustomerDirector(userBuilder);
const customer: ICustomer = userDirector.buildMinimal(
    "John",
    "Doe",
    "john.doe@example.com"
);

console.log(customer);