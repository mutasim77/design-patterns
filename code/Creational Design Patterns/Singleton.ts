/*
* Example 1: Singleton class 
* Creating a singleton class
*/
class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someMethod(): void {
        console.log("Hello, I am a singleton!");
    }
}

// Usage
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

instance1.someMethod(); // 'Hello, I am a singleton!'
instance2.someMethod(); // 'Hello, I am a singleton!'

console.log(instance1 === instance2); // true

/*
* Example 2: Logger Singleton 
* Creating a singleton for logging purposes.
*/
class Logger {
    private static instance: Logger;

    private constructor() { }

    public static getLogger(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public logMessage(message: string): void {
        console.log(`[INFO] ${message}`);
    }
}

// Usage
const logger1 = Logger.getLogger();
const logger2 = Logger.getLogger();

logger1.logMessage("Application started."); // '[INFO] Application started.'
logger2.logMessage("User logged in."); // '[INFO] User logged in.'

console.log(logger1 === logger2); // true


/*
* Example 3: Database Connection Singleton
* Implementing a singleton for managing database connections.
*/
class Database {
    // Step 1: Declare a private static instance
    private static instance: Database;

    // Step 3: Make the constructor private
    private constructor() { }

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