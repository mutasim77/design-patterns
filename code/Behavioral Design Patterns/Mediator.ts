interface IUser {
    notify(message: string): void;
    receive(message: string): void;
}

class Mediator {
    private users: Set<IUser> = new Set();

    addUser(user: IUser): void {
        this.users.add(user);
    }

    notifyUsers(message: string, originator: IUser): void {
        for (const user of this.users) {
            if (user !== originator) {
                user.receive(message);
            }
        }
    }
}

class User implements IUser {
    private mediator: Mediator;
    private name: string;

    constructor(mediator: Mediator, name: string) {
        this.mediator = mediator;
        this.name = name;
        this.mediator.addUser(this);
    }

    notify(message: string): void {
        console.log(`${this.name} sending message: ${message}`);
        this.mediator.notifyUsers(message, this);
    }

    receive(message: string): void {
        console.log(`${this.name} received message: ${message}`);
    }
}

// Example Usage
const mediator = new Mediator();
const user1 = new User(mediator, 'User1');
const user2 = new User(mediator, 'User2');
const user3 = new User(mediator, 'User3');

user1.notify('Hello User2!');
user2.notify('Hi there!');
user3.notify('Greetings, everyone!');

// "User1" sending message: "Hello User2!" 
// "User2" received message: "Hello User2! 
// "User3" received message: "Hello User2!" 