// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof(obj) === 'number' || obj === null || typeof(obj) === 'boolean' && typeof(obj) !== 'function' && typeof obj !== 'undefined') {
    obj = '' + obj;
  } else if(typeof(obj) === 'string') {
    console.log("processing as string");
    obj = '"' + obj + '"';
  } else if(Array.isArray(obj)) {
    
    var middle = [];
    for(var i = 0; i < obj.length; i++) {
      middle.push(stringifyJSON(obj[i]));
    }
    obj = '[' + middle.join(",") + ']';
  } else {
      //console.log("keys length:" + Object.keys(obj).length);
      if(Object.keys(obj).length === 0) {
        return '{}';
      }
      
      var keyValue = [];
      for(var key in obj){
        if(typeof(obj[key]) === 'function' || typeof(obj[key]) === 'undefined' ) {
          continue;
        }
        keyValue.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));      
      }
      obj = "{" + keyValue.join(",") + "}";
  }
  return obj;
}