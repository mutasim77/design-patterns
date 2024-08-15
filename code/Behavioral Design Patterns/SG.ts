// Handler interface
interface Approver {
    setNext(nextApprover: Approver): Approver;
    processRequest(amount: number): void;
}

// Base Handler class implementing the Approver interface
abstract class AbstractApprover implements Approver {
    private nextApprover: Approver | null = null;

    setNext(nextApprover: Approver): Approver {
        this.nextApprover = nextApprover;
        return nextApprover;
    }

    processRequest(amount: number): void {
        if (this.canApprove(amount)) {
            this.approve(amount);
        } else if (this.nextApprover) {
            this.nextApprover.processRequest(amount);
        }
    }

    protected abstract canApprove(amount: number): boolean;
    protected abstract approve(amount: number): void;
}

// Concrete Handler 1
class Manager extends AbstractApprover {
    protected canApprove(amount: number): boolean {
        return amount <= 1000;
    }

    protected approve(amount: number): void {
        console.log(`Manager approves the purchase of $${amount}.`);
    }
}

// Concrete Handler 2
class Director extends AbstractApprover {
    protected canApprove(amount: number): boolean {
        return amount <= 5000;
    }

    protected approve(amount: number): void {
        console.log(`Director approves the purchase of $${amount}.`);
    }
}

// Concrete Handler 3
class VicePresident extends AbstractApprover {
    protected canApprove(amount: number): boolean {
        return amount <= 10000;
    }

    protected approve(amount: number): void {
        console.log(`Vice President approves the purchase of $${amount}.`);
    }
}

// Client
const manager = new Manager();
const director = new Director();
const vicePresident = new VicePresident();

// Set up the chain of responsibility
manager.setNext(director).setNext(vicePresident);

// Test the chain with different purchase amounts
manager.processRequest(800);   // Manager approves the purchase of $800
manager.processRequest(4500);  // Director approves the purchase of $4500
manager.processRequest(10000); // Vice President approves the purchase of $10000
      
