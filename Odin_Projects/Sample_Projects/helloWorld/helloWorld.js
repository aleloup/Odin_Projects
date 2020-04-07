
const helloWorld = function() {
    return 'Hello, World!'
  }
  module.exports = helloWorld 
  // The module.exports on the last line is how we export the function so that it can be imported with require() in the spec file.