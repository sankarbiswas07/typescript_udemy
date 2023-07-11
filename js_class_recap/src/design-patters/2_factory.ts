// Abstract Class
abstract class Animal {
  abstract makeSound(): void
}

// concrete class should implement makeSound
class Dog extends Animal {
  public makeSound(): void {
    console.log("WOFF!! WOFF!!")
  }
}


class Cat extends Animal {
  public makeSound(): void {
    console.log("ME0W!! ME0W!!")
  }
}

// Abstract Creator: AnimalCreator is the abstract base class for all creators. 
// It declares an abstract factory method createAnimal() that returns an Animal object.
export abstract class AnimalCreator {
  abstract createAnimal(): Animal

  // Common business logic for all creators
  public introduceAnimal(): void {
    const animal = this.createAnimal()
    animal.makeSound()
  }
}

// Concrete Creators
export class DogCreator extends AnimalCreator {
  createAnimal(): Animal {
    return new Dog();
  }
}

export class CatCreator extends AnimalCreator {
  createAnimal(): Animal {
    return new Cat();
  }
}