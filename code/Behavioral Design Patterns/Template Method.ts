// Template Method: DocumentGenerator
abstract class DocumentGenerator {
    generateDocument(): string {
        const header = this.createHeader();
        const content = this.createContent();
        const footer = this.createFooter();

        return `${header} - ${content} - ${footer}`;
    }

    abstract createHeader(): string;
    abstract createContent(): string;
    abstract createFooter(): string;
}

// Concrete Template Method 1: PDFDocumentGenerator
class PDFDocumentGenerator extends DocumentGenerator {
    createHeader(): string {
        return "PDF Header";
    }

    createContent(): string {
        return "PDF Content";
    }

    createFooter(): string {
        return "PDF Footer";
    }
}

// Concrete Template Method 2: WordDocumentGenerator
class WordDocumentGenerator extends DocumentGenerator {
    createHeader(): string {
        return "Word Header";
    }

    createContent(): string {
        return "Word Content";
    }

    createFooter(): string {
        return "Word Footer";
    }
}

// Usage
const pdfGenerator = new PDFDocumentGenerator();
console.log(pdfGenerator.generateDocument()); // PDF Header - PDF Content - PDF Footer

const wordGenerator = new WordDocumentGenerator();
console.log(wordGenerator.generateDocument()); // Word Header - Word Content - Word Footer