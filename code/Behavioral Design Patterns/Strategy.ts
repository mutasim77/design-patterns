// Strategy interface
interface SortingStrategy {
    sort(data: number[]): number[];
}

// Concrete Strategy 1: BubbleSort
class BubbleSort implements SortingStrategy {
    sort(data: number[]): number[] {
        console.log("Using Bubble Sort");
        // Implementation of Bubble Sort algorithm
        return data.slice().sort((a, b) => a - b);
    }
}

// Concrete Strategy 2: QuickSort
class QuickSort implements SortingStrategy {
    sort(data: number[]): number[] {
        console.log("Using Quick Sort");
        // Implementation of Quick Sort algorithm
        return data.slice().sort((a, b) => a - b);
    }
}

// Context: Sorter
class Sorter {
    private strategy: SortingStrategy;

    constructor(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    performSort(data: number[]): number[] {
        console.log('SortingContext: Sorting data using the strategy.');
        return this.strategy.sort(data);
    }
}

// Usage
const dataset = [1, 9, 100, 7, 77, 0, 3];
const sorter = new Sorter(new BubbleSort());
sorter.performSort(dataset); // Using Bubble Sort ; [0, 1, 3, 7, 9, 77, 100] 

sorter.setStrategy(new QuickSort());
sorter.performSort(dataset);// // Using Quick Sort ; [0, 1, 3, 7, 9, 77, 100] 