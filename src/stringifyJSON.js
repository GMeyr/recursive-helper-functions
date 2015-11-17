// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof(obj) === 'number' || obj === null || typeof(obj) === 'boolean' ) {
    obj = '' + obj;
  } else if(typeof(obj) === 'string') {
    obj = '"' + obj + '"';
  } else if(Array.isArray(obj)) {
    
    var middle = [];
    for(var i = 0; i < obj.length; i++) {
      middle.push(stringifyJSON(obj[i]));
    }
    obj = '[' + middle.join(",") + ']';
  } else if(typeof(obj))
  return obj;
}