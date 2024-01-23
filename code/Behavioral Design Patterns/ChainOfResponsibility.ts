// Handler interface
interface Approver {
    setNext(nextApprover: Approver): Approver;
    processRequest(amount: number): void;
}

// Concrete Handler 1
class Manager implements Approver {
    private nextApprover: Approver | null = null;

    setNext(nextApprover: Approver): Approver {
        this.nextApprover = nextApprover;
        return nextApprover;
    }

    processRequest(amount: number): void {
        if (amount <= 1000) {
            console.log(`Manager approves the purchase of $${amount}.`);
        } else if (this.nextApprover) {
            this.nextApprover.processRequest(amount);
        }
    }
}

// Concrete Handler 2
class Director implements Approver {
    private nextApprover: Approver | null = null;

    setNext(nextApprover: Approver): Approver {
        this.nextApprover = nextApprover;
        return nextApprover;
    }

    processRequest(amount: number): void {
        if (amount <= 5000) {
            console.log(`Director approves the purchase of $${amount}.`);
        } else if (this.nextApprover) {
            this.nextApprover.processRequest(amount);
        }
    }
}

// Concrete Handler 3
class VicePresident implements Approver {
    private nextApprover: Approver | null = null;

    setNext(nextApprover: Approver): Approver {
        this.nextApprover = nextApprover;
        return nextApprover;
    }

    processRequest(amount: number): void {
        if (amount <= 10000) {
            console.log(`Vice President approves the purchase of $${amount}.`);
        } else if (this.nextApprover) {
            this.nextApprover.processRequest(amount);
        }
    }
}

// Client
const manager = new Manager();

// Set up the chain of responsibility
manager
    .setNext(new Director())
    .setNext(new VicePresident());

// Test the chain with different purchase amounts
manager.processRequest(800);   // Manager approves the purchase of $800
manager.processRequest(4500);  // Director approves the purchase of $4500
manager.processRequest(10000); // Vice President approves the purchase of $10000