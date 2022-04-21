function compose(...com) {
    // Your solution
    return function(a){
      for(var i=com.length-1; i>=0;i--){
        val=com[i](a)
        a=val;
      }
      return a
    }
  }
