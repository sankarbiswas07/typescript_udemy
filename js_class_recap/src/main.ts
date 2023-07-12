
// ===================== 1_SINGLETON ======================
import { Logger } from "./design-patters/1_singleton";
const log = Logger.log()
log.info("Info: I am a singleton class")
log.success("I am green")
log.warn("I am yellow")
log.error("I am red..")
// ======================================================


// ===================== 2_FACTORY =====================
import { AnimalCreator, DogCreator, CatCreator } from "./design-patters/2_factory";
// Usage
const dogCreator: AnimalCreator = new DogCreator();
dogCreator.introduceAnimal();

const catCreator: AnimalCreator = new CatCreator();
catCreator.introduceAnimal();
// ======================================================

// ===================== 3_FACTORY =====================
import { AuthenticationFactory, AuthenticationMethod } from "./design-patters/3_factory";

// Usage
const authCreator: AuthenticationMethod = AuthenticationFactory.createMethod("two-factor");
authCreator.authenticate();

// ===================== 4_FACTORY =====================
import { BubbleSortFactory, QuickSortFactory, SortingAlgorithmFactory } from "./design-patters/4_factory";

// Usage
const arr = [5, 2, 8, 3, 1];
const sortingFactory1: SortingAlgorithmFactory = new QuickSortFactory();
const sortingFactory2: SortingAlgorithmFactory = new BubbleSortFactory();
const sortedArr1 = sortingFactory1.sortArray(arr);
const sortedArr2 = sortingFactory2.sortArray(arr);
console.log(sortedArr1);
console.log(sortedArr2);
// ======================================================


// ===================== 5_FACTORY =====================

import { ShapeFactory } from './design-patters/5_factory';

// Usage
const shapeFactory = new ShapeFactory()
const circleShape = shapeFactory.createShape("circle")
circleShape.draw()

// ======================================================

import { ReportGenerator, PDFReportBuilder, HTMLReportBuilder } from "./design-patters/6_builder"
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