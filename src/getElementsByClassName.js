// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, node){
  // your code here
  node = node || document.body;
  var results = [];
  var parts = node.className.split(' ');

  if( parts.indexOf(className) > -1 ){
    results.push(node);  
  }

  for(var i = 0; i < node.childNodes.length; i++){
    var current = getElementsByClassName(className, node[i]);
    node.concat(current);
  }

  return results;
};