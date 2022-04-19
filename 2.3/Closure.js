function createFunctions(n) {
  var callbacks = [];
  var f = function(x){
    return function(){
      return x;
    }
  };

  for (var i=0; i<n; i++) {
    callbacks.push(f(i));
  }
  
  return callbacks;
}
