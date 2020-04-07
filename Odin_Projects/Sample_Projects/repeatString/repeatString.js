
const repeatString = function(greeting, num) {

    let str ="";
    if (num < 0) return "ERROR"; //if the string returns something less than 0, then it returns an error
    for (let i = 0; i < num; i++) { 
    str += greeting;
    }
    return str;
    }


module.exports = repeatString

//solution on The Odin Project
/*var repeatString = function(word, num) {
    if (num < 0) return 'ERROR'
    let string = ''
    for (let i = 0; i < num; i++) {
      string += word
    }
    return string
  } */