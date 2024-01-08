/*
* Example 1: Database
*/

// Implementor interface and concrete implementors:
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

// Abstraction and refined abstractions:
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

// Client code:
let databaseService = new ClientDatabaseService(new PostgreSQLDatabase());
databaseService.fetchData("SELECT * FROM users;"); // use PostgreSQL database

databaseService = new ClientDatabaseService(new MongoDBDatabase());
databaseService.fetchData("db.users.find({})"); // use MongoDB database


/*
* Example 2: Media Player
*/

// The implementation interface defines methods for
// all Concrete Implementation classes.
interface MediaPlayerImplementation {
    playAudio(): void;
    playVideo(): void;
}

// Each Concrete Implementation corresponds to a
// specific platform and implements the (platform-)specific code.
class WindowsMediaPlayer implements MediaPlayerImplementation {
    playAudio(): void {
        console.log("Playing audio on Windows media player.");
    }

    playVideo(): void {
        console.log("Playing video on Windows media player.");
    }
}

class MacOSMediaPlayer implements MediaPlayerImplementation {
    playAudio(): void {
        console.log("Playing audio on MacOS media player.");
    }

    playVideo(): void {
        console.log("Playing video on MacOS media player.");
    }
}

// The Abstraction provides high-level control logic.
// It relies on the implementation object to do the actual low-level work.
abstract class MediaPlayerAbstraction {
    protected implementation: MediaPlayerImplementation;

    constructor(implementation: MediaPlayerImplementation) {
        this.implementation = implementation;
    }

    abstract playFile(): void;
}

// You can extend the Abstraction without changing the Implementation classes.
class AudioPlayer extends MediaPlayerAbstraction {
    playFile(): void {
        this.implementation.playAudio();
    }
}

class VideoPlayer extends MediaPlayerAbstraction {
    playFile(): void {
        this.implementation.playVideo();
    }
}

// The client code should only depend on the Abstraction class.
// This way the client code can support any abstraction-implementation combination.
let player = new AudioPlayer(new WindowsMediaPlayer());
player.playFile(); // 'Playing audio on Windows media player.'

player = new VideoPlayer(new MacOSMediaPlayer());
player.playFile(); // 'Playing video on MacOS media player.'