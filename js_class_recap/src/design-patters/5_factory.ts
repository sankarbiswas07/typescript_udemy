/**
import { abstract } from './4_factory';
 * Question: 
 * 
 * Implement a shape drawing application that supports multiple types of shapes,
 * such as circles, squares, and triangles. Use the Factory Method pattern
 * to dynamically create shape objects based on user input.

    Requirements:

    - The application should support three types of shapes: Circle, Square, and Triangle.
    - Each shape should have its own class that inherits from a base Shape class or implements a Shape interface.
      Each shape class should define a draw() method that prints the shape's name.
    - The application should provide a factory class with a method called createShape()
      that takes a shape type as input and returns an instance of the corresponding shape class.
    - The factory class should use the Factory Method pattern to encapsulate the creation of shape objects.
    - The application should allow users to input the desired shape type, and based on the input,
      the application should create and draw the corresponding shape.
*/

abstract class Shape {
  abstract draw(): void // prints the shape's name
}

class Circle implements Shape {
  draw(): void {
    console.log("Shape: Circle")
  }
}

class Triangle implements Shape {
  draw(): void {
    console.log("Shape: Triangle")
  }
}

class Square implements Shape {
  draw(): void {
    console.log("Shape: Square")
  }
}

// Shape factory class
export class ShapeFactory {

  // Another type of implementation, instead of switch
  private shapeClasses: Record<string, new () => Shape> = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
  }

  // creator
  public createShape(shapeType: string): Shape {
    const ShapeClass = this.shapeClasses[shapeType.toLocaleLowerCase()]
    if (!ShapeClass) {
      throw new Error("Invalid shape type")
    }
    return new ShapeClass()
  }
}