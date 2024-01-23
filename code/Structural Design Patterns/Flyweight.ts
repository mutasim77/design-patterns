// Flyweight interface
interface TextStyle {
    applyStyle(): void;
}

// Concrete Flyweight
class SharedTextStyle implements TextStyle {
    private font: string;
    private size: number;
    private color: string;

    constructor(font: string, size: number, color: string) {
        this.font = font;
        this.size = size;
        this.color = color;
    }

    applyStyle(): void {
        console.log(`Applying style - Font: ${this.font}, Size: ${this.size}, Color: ${this.color}`);
    }
}

// Flyweight Factory
class TextStyleFactory {
    private textStyles: { [key: string]: TextStyle } = {};

    getTextStyle(font: string, size: number, color: string): TextStyle {
        const key = `${font}-${size}-${color}`;
        if (!this.textStyles[key]) {
            this.textStyles[key] = new SharedTextStyle(font, size, color);
        }
        return this.textStyles[key];
    }
}

// Client
class TextEditor {
    private textStyles: TextStyle[] = [];
    private textStyleFactory: TextStyleFactory;

    constructor(factory: TextStyleFactory) {
        this.textStyleFactory = factory;
    }

    applyStyle(font: string, size: number, color: string): void {
        const style = this.textStyleFactory.getTextStyle(font, size, color);
        this.textStyles.push(style);
    }

    printStyles(): void {
        this.textStyles.forEach((style) => style.applyStyle());
    }
}

// Usage
const textStyleFactory = new TextStyleFactory();
const textEditor = new TextEditor(textStyleFactory);

textEditor.applyStyle("Arial", 12, "Black");
textEditor.applyStyle("Times New Roman", 14, "Red");
textEditor.applyStyle("Arial", 12, "Black"); // Reusing existing style

textEditor.printStyles(); // print all styles...