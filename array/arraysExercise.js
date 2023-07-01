// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(arrProduct) {
    return arrProduct.reduce(function (prev, curr) { return curr.price + prev; }, 0);
}
console.log(getTotal([{ name: "S", price: 10 }, { name: "S", price: 40 }, { name: "S", price: 100 }]));
