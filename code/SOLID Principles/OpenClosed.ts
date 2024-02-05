// Without Open Closed Principle
class Discount {
    giveDiscount(customerType: string): number {
        if (customerType === "Regular") {
            return 10;
        } else if (customerType === "Premium") {
            return 20;
        }
    }
}

// With Open Closed Principle
interface Customer {
    giveDiscount(): number;
}

class RegularCustomer implements Customer {
    giveDiscount(): number {
        return 10;
    }
}

class PremiumCustomer implements Customer {
    giveDiscount(): number {
        return 20;
    }
}

class Discount {
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}