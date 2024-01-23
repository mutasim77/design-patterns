// Memento
class EditorMemento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}

// Originator
class TextDocument {
    private text!: string;

    createMemento(): EditorMemento {
        return new EditorMemento(this.text);
    }

    restoreMemento(memento: EditorMemento): void {
        this.text = memento.getState();
    }

    setText(text: string): void {
        this.text = text;
    }

    getText(): string {
        return this.text;
    }
}

// Caretaker
class DocumentHistory {
    private mementos: EditorMemento[] = [];

    addMemento(memento: EditorMemento): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): EditorMemento {
        return this.mementos[index];
    }
}

// Client Code
const editor = new TextDocument();
const documentHistory = new DocumentHistory();

editor.setText("Hello World!");
documentHistory.addMemento(editor.createMemento());

editor.setText("Good Bye World!");
documentHistory.addMemento(editor.createMemento());

console.log(editor.getText()); // Good Bye World!

editor.restoreMemento(documentHistory.getMemento(0));
console.log(editor.getText()); // Hello World!