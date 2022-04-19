function createSecretHolder(secret) {
  var sec = secret;
  return{
    getSecret: function(){
      return sec;
    },
    setSecret: function(secret){
      sec = secret;
    }
  }
}
