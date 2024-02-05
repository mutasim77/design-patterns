// Example 1
// Abstraction (interface) 
interface Switchable {
    turnOn(): void;
    turnOff(): void;
}

// Low-level module 1: Bulb
class Bulb implements Switchable {
    turnOn(): void {
        console.log("Bulb is on");
    }

    turnOff(): void {
        console.log("Bulb is off");
    }
}

// Low-level module 2: Fan
class Fan implements Switchable {
    turnOn(): void {
        console.log("Fan is on");
    }

    turnOff(): void {
        console.log("Fan is off");
    }
}

// High-level module utilizing DIP
class Switch {
    constructor(private device: Switchable) { }

    operate(): void {
        this.device.turnOn();
        // Additional operations if needed
        this.device.turnOff();
    }
}

// Usage
const bulb = new Bulb();
const fan = new Fan();

const switchForBulb = new Switch(bulb);
const switchForFan = new Switch(fan);

switchForBulb.operate(); // Bulb is on, Bulb is off
switchForFan.operate(); // Fan is on, Fan is off


// Example 2
interface IDatabase {
    save(data: string): void;
}

class MySQLDatabase implements IDatabase {
    save(data: string): void {
        // logic to save data to a MySQL database
    }
}

class MongoDBDatabase implements IDatabase {
    save(data: string): void {
        // logic to save data to a MongoDB database
    }
}

class HighLevelModule {
    private database: IDatabase;

    constructor(database: IDatabase) {
        this.database = database;
    }

    execute(data: string): void {
        // high-level logic
        this.database.save(data);
    }
}