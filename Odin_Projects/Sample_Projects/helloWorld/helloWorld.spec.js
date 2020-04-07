
//Test are run in the terminal.

const helloWorld = require('./helloWorld');  //At the very top of the file we use require() 
//to import the code from the javascript file (helloWorld.js) so that we can test it.

describe('Hello World', function() { // body of test. Running code and testing to see if output is correct.
  it('says hello world', function() { // describes what should be happening in plain english
    expect(helloWorld()).toEqual('Hello, World!'); // what the helloWorld function is expected to equal/be.
  });
});