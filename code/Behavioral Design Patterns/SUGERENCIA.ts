// Define individual approver functions
const manager = (amount) => {
    if (amount <= 1000) {
        console.log(`Manager approves the purchase of $${amount}.`);
        return true;
    }
    return false;
};

const director = (amount) => {
    if (amount <= 5000) {
        console.log(`Director approves the purchase of $${amount}.`);
        return true;
    }
    return false;
};

const vicePresident = (amount) => {
    if (amount <= 10000) {
        console.log(`Vice President approves the purchase of $${amount}.`);
        return true;
    }
    return false;
};

// Set up the chain of responsibility
const chainOfResponsibility = [manager, director, vicePresident];

// Client
const processRequest = (amount) => {
    for (const approver of chainOfResponsibility) {
        if (approver(amount)) {
            return;
        }
    }
    console.log("None of the approvers can handle the request.");
};

// Test the chain with different purchase amounts
processRequest(800);    // Manager approves the purchase of $800
processRequest(4500);   // Director approves the purchase of $4500
processRequest(10000);  // Vice President approves the purchase of $10000
processRequest(15000);  // None of the approvers can handle the request.
