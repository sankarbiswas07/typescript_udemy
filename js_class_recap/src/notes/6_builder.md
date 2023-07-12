**The Builder Pattern** is a creational design pattern that allows you to create complex objects step by step. It separates the construction of an object from its representation, enabling the same construction process to create different representations.

The key participants in the Builder Pattern are:

1.  Product: Represents the complex object to be created.
    
2.  Builder: An abstract interface or class that defines the steps to construct the product. It provides methods for setting different attributes or properties of the product.
    
3.  ConcreteBuilder: Implements the Builder interface and provides specific implementations for each step of the construction process. It keeps track of the product being built.
    
4.  Director: Controls the construction process using the Builder interface. It knows the specific order and sequence in which the steps need to be executed.
    
**EXAMPLE - 1**
-
Let's consider an example of building a report generator using the Builder Pattern.

Problem Domain: Imagine you are developing a reporting system that generates various types of reports (e.g., PDF report, HTML report) based on user preferences. The reports can have different sections such as header, footer, body, and optional sections based on user-selected options.

Solution using the Builder Pattern:

1. Product: Report
   - Represents the final generated report.
   - Contains sections like header, footer, body, and optional sections.

2. Builder Interface: ReportBuilder
   - Defines methods for constructing the report.
   - Allows setting different sections and options.
   - Provides a method to obtain the constructed report.

3. Concrete Builders: PDFReportBuilder, HTMLReportBuilder
   - Implement the ReportBuilder interface.
   - Implement the construction steps for generating PDF and HTML reports.
   - Maintain the internal state of the report being built.

4. Director: ReportGenerator
   - Controls the report construction process using the ReportBuilder.
   - Defines the order and sequence of steps for constructing the report.
   - Provides a method to obtain the final generated report.

Here's an example implementation:

```typescript
// Product: Report
class CReport {
  private sections: string[];

  constructor() {
    this.sections = [];
  }

  addSection(section: string): void {
    this.sections.push(section);
  }

  // Other methods to manipulate the report sections
  // ...
}

// Builder Interface: ReportBuilder
interface IReportBuilder {
  createReport(): void;
  addHeader(): void;
  addFooter(): void;
  addBody(): void;
  addOptionalSections(): void;
  getReport(): CReport;
}

// Concrete Builder: PDFReportBuilder
export class PDFReportBuilder implements IReportBuilder {
  private report: CReport;

  createReport(): void {
    this.report = new CReport();
  }

  addHeader(): void {
    this.report.addSection("PDF Header");
  }

  addFooter(): void {
    this.report.addSection("PDF Footer");
  }

  addBody(): void {
    this.report.addSection("PDF Body");
  }

  addOptionalSections(): void {
    this.report.addSection("PDF Optional Section");
  }

  getReport(): CReport {
    return this.report;
  }
}

// Concrete Builder: HTMLReportBuilder
export class HTMLReportBuilder implements IReportBuilder {
  private report: CReport;

  createReport(): void {
    this.report = new CReport();
  }

  addHeader(): void {
    this.report.addSection("HTML Header");
  }

  addFooter(): void {
    this.report.addSection("HTML Footer");
  }

  addBody(): void {
    this.report.addSection("HTML Body");
  }

  addOptionalSections(): void {
    this.report.addSection("HTML Optional Section");
  }

  getReport(): CReport {
    return this.report;
  }
}

// Director: ReportGenerator
export class ReportGenerator {
  private builder: IReportBuilder;

  setBuilder(builder: IReportBuilder): void {
    this.builder = builder;
  }

  constructReport(): CReport {
    this.builder.createReport();
    this.builder.addHeader();
    this.builder.addBody();
    this.builder.addFooter();
    this.builder.addOptionalSections();
    return this.builder.getReport();
  }
}


// Usage
const reportGenerator = new ReportGenerator();

const pdfReportBuilder = new PDFReportBuilder();
reportGenerator.setBuilder(pdfReportBuilder);
const pdfReport = reportGenerator.constructReport();
console.log(pdfReport); // Output: Report { sections: ['PDF Header', 'PDF Body', 'PDF Footer', 'PDF Optional Section'] }

const htmlReportBuilder = new HTMLReportBuilder();
reportGenerator.setBuilder(htmlReportBuilder);
const htmlReport = reportGenerator.constructReport();
console.log(htmlReport); // Output: Report { sections: ['HTML Header', 'HTML Body', 'HTML Footer', 'HTML Optional Section'] }
```

In this example, the problem domain is generating reports with different sections based on user preferences. The Builder Pattern is used to construct reports step by step. The `CReport` class represents the final generated report with sections, and the `IReportBuilder` interface defines the methods for constructing the report.

Concrete builders, such as `PDFReportBuilder` and `HTMLReportBuilder`, implement the `IReportBuilder` interface and provide specific steps for building PDF and HTML reports, respectively. The `ReportGenerator` acts as the director, controlling the construction process using the selected builder.

By separating the construction of the report from its representation, the Builder Pattern allows you to create reports with different sections and options dynamically. It provides a clear and structured way to build complex objects while keeping the construction logic encapsulated within the builders.

