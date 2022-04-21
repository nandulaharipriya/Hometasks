function add(n){
    // Let the currying begin!
    var fun = function(x){
    return add(n + x);
    }
    fun.valueOf = function(){
      return n;
    }
  return fun;
}
