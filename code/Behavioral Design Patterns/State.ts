// State interface
interface EditingState {
    write(text: string): void;
    save(): void;
}

// Concrete State 1: DraftState
class DraftState implements EditingState {
    write(text: string): void {
        console.log(`Drafting: ${text}`);
    }

    save(): void {
        console.log("Draft saved");
    }
}

// Concrete State 2: ReviewState
class ReviewState implements EditingState {
    write(text: string): void {
        console.log(`Reviewing: ${text}`);
    }

    save(): void {
        console.log("Cannot save in review mode");
    }
}

// Context: DocumentEditor
class DocumentEditor {
    private editingState: EditingState;

    constructor(initialState: EditingState) {
        this.editingState = initialState;
    }

    setEditingState(state: EditingState): void {
        this.editingState = state;
    }

    write(text: string): void {
        this.editingState.write(text);
    }

    save(): void {
        this.editingState.save();
    }
}

// Usage
const documentEditor = new DocumentEditor(new DraftState());

documentEditor.write("Hello World");
documentEditor.save(); // Draft saved

documentEditor.setEditingState(new ReviewState());
documentEditor.write("Review comments");
documentEditor.save(); // Cannot save in review mode