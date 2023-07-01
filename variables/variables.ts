// 13. tsc variables/variables.ts

//----------------------------------------------
// String
//----------------------------------------------

let movieTitle: string = "veer zara"

movieTitle = "titanic"

// movieTitle = 9 // error
// movieTitle.errorFUnc() // error as this function is not available

// =============================> another way: 14. Type Inference
let movieTitle2 = "veer zara"
movieTitle2 = "titanic"
// movieTitle2 = 9 // error

//----------------------------------------------
// Number
//----------------------------------------------

let numCatLives: number = 9
numCatLives += 1
// numCatLives = "tom" // error

//----------------------------------------------
// Boolean
//----------------------------------------------

let isBoolean: boolean = true
isBoolean = false
// isBoolean = 1 // error
// isBoolean = "true" // error