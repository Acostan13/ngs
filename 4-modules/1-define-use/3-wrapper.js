// function (exports, module, require, __filename, __dirname) {

let g = 1 // not a global variable, scoped to the wrapping node function

console.log(arguments)

exports.a = 42 // arguement to the hidden node wrapping function
module.exports = 37

// exports = () => {} => not ok
module.exports = () => {} // ok!

// return module.exports => every node file returns this

// }
