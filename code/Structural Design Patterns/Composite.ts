// Component
interface Employee {
    getName(): string;
    getSalary(): number;
    getRole(): string;
}

// Leaf
class Developer implements Employee {
    constructor(private name: string, private salary: number) { }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getRole(): string {
        return "Developer";
    }
}

// Another Leaf
class Designer implements Employee {
    constructor(private name: string, private salary: number) { }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getRole(): string {
        return "Designer";
    }
}

// Composite
interface CompositeEmployee extends Employee {
    addEmployee(employee: Employee): void;
    removeEmployee(employee: Employee): void;
    getEmployees(): Employee[];
}

class Manager implements CompositeEmployee {
    private employees: Employee[] = [];

    constructor(private name: string, private salary: number) { }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getRole(): string {
        return "Manager";
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    removeEmployee(employee: Employee) {
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
    }

    getEmployees(): Employee[] {
        return this.employees;
    }
}