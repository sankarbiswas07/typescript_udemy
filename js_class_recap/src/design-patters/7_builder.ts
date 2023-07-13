/**
 * 
 * Problem Domain: Imagine you are developing a pizza ordering system where 
 * customers can customize their pizzas with various toppings, crust types, and sizes. 
 * Each pizza can have different combinations of toppings, 
 * and the order can include multiple pizzas with different specifications.
 * 
 */

/***
 * 11:20 PM
 * Solution:
 * Identifying domains : Two domain here, Pizza & the Order. 
 * Pizza has it's own types -
 *      type toppings = string[]
 *      type crust = "thin" | "cheese" | "thick" | "stuffed"
 *      type size = "small" | "medium" | "large" | "extra large"
 * User can customize their `Order`
 * 
 * Solution by builder pattern -
 * Builder pattern has 4 pillars - 
 *  Product  - The product is the thing which need to build,
 *  Builder - Builder interface the method signatures plus a method to obtain the constructed product, So concrete builder can implement
 *  Concrete Builder - Builder method definition
 *  Director - It controls the product construction process, know the sequence to use the product (the manual) and a method to obtain the constructed product
 * 
 * 
 *  Product: Pizza
 *      - Represents an individual pizza with its selected toppings, crust type, and size.
 *  
 * Builder Interface: PizzaBuilder
 *      - Defines methods for constructing a pizza.
 *      - Allows setting different toppings, crust type, and size.
 *      - Provides a method to obtain the constructed pizza.
 *  
 * Concrete Builder: CustomPizzaBuilder
 *      - Implements the PizzaBuilder interface.
 *      - Provides methods for adding toppings, selecting crust type and size.
 *      - Maintains the internal state of the pizza being built.
 *  
 * Director: PizzaOrderDirector
 *      - Controls the pizza construction process using the PizzaBuilder.
 *      - Defines the steps and order in which toppings, crust type, and size are set.
 *      - Provides a method to obtain the final constructed pizza.
 * 
 * 
 */

enum AvailableToppings {
  Cheese = "cheese",
  Pepperoni = "pepperoni",
  Mushrooms = "mushrooms",
}
type AvailableCrust = "thin" | "cheese" | "thick" | "stuffed"
type AvailableSize = "small" | "medium" | "large" | "extra large"

class Pizza {

  private toppings: AvailableToppings[]
  private crust: AvailableCrust | null
  private size: AvailableSize | null

  constructor() {
    this.toppings = [];
    this.crust = null;
    this.size = null;
  }

  addToppings(topping: AvailableToppings): void {
    this.toppings.push(topping)
  }

  setCrust(crust: AvailableCrust): void {
    this.crust = crust
  }
  setSize(size: AvailableSize): void {
    this.size = size
  }

  // Other methods to manipulate the pizza properties
  // ...
}
