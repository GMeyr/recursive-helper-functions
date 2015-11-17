// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, node){
  // your code here
  var results = [];

  node = node || document.body;

  if(node.nodeType === 1) {
    var parts = node.className.split(" ");
    if(parts.indexOf(className) > - 1){
      results.push(node);  
    }

    for(var i = 0; i < node.childNodes.length; i++){
      current = getElementsByClassName(className, node.childNodes[i]);
      results = results.concat(current);
    }
  }
  
  return results;
};