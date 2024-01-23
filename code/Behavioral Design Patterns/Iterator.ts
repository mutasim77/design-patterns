class ArrayIterator<T> {
    private collection: T[];
    private position: number = 0;

    constructor(collection: T[]) {
        this.collection = collection;
    }

    public next(): T {
        const result: T = this.collection[this.position];
        this.position += 1;
        return result;
    }

    public hasNext(): boolean {
        return this.position < this.collection.length;
    }
}

// Usage
const stringArray = ["Hello", "World", "!"];
const numberArray = [1, 2, 3, 4, 5];

const stringIterator = new ArrayIterator<string>(stringArray);
const numberIterator = new ArrayIterator<number>(numberArray);

console.log(numberIterator.next()); // 1

while (stringIterator.hasNext()) {
    console.log(stringIterator.next()); // Logs 'Hello', 'World', '!'
}