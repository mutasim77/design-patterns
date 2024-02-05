// User Class Before applying SRP
class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    saveUserToDB() {
        // Implementation here
    }

    sendWelcomeEmail() {
        // Implementation here
    }
}

// User Class After applying SRP
class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

class UserDB {
    saveUser(user: User) {
        // Implementation here
    }
}

class EmailService {
    sendWelcomeEmail(user: User) {
        // Implementation here
    }
}