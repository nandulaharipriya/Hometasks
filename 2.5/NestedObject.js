Object.prototype.hash = function(string) {
    try{
    return (eval("this."+string))
      }
    catch(a){
      return undefined
    }
  }
