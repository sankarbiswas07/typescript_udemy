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
