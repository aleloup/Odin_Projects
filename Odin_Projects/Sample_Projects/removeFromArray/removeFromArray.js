// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of all of the arguments that are passed to a function
// is using the spread operator.  If this is unfamiliar to you look it up!
//spread operator [...] The spread operator allows an iterable to spread or expand individually inside a receiver. 
//Iterables are anything that can be looped over such as strings, arrays, and sets.
//Example:
//const codeburst = 'CODEBURST'; // Line 1
//const characters = [ ...codeburst ]; // Line 2
// [ 'C', 'O', 'D', 'E', 'B', 'U', 'R', 'S', 'T' ]




const removeFromArray = function (...args) {
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    //...args means "any number of values". For example, you could pass null or 1,2,3,4 - it would
    // not matter and the method is smart enough to deal with it. 
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    //The forEach() method calls a function once for each element in an array, in order.
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) { //A ! negates an expression. this is saying if it does include the element, then dont push to new array.
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };
  
  
  // A simpler, but more advanced way to do it is to use the 'filter' function,
  // which basically does what we did with the forEach above.
  
  // var removeFromArray = function(...args) {
  //   const array = args[0]
  //   return array.filter(val => !args.includes(val))
  // }
  //
  
  module.exports = removeFromArray;