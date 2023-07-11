
// ===================== SINGLETON ======================
import { Logger } from "./design-patters/1_singleton";
const log = Logger.log()
log.info("Info: I am a singleton class")
log.success("I am green")
log.warn("I am yellow")
log.error("I am red..")
// ======================================================


// ===================== FACTORY -1 =====================
import { AnimalCreator, DogCreator, CatCreator } from "./design-patters/2_factory";
// Usage
const dogCreator: AnimalCreator = new DogCreator();
dogCreator.introduceAnimal();

const catCreator: AnimalCreator = new CatCreator();
catCreator.introduceAnimal();
// ======================================================

// ===================== FACTORY -2 =====================
import { AuthenticationFactory, AuthenticationMethod } from "./design-patters/3_factory";
// Usage
const authCreator: AuthenticationMethod = AuthenticationFactory.createMethod("two-factor");
authCreator.authenticate();

// ======================================================