class Password{
  //The first part of the class.
constructor(pb,pv){
this.publicKey=pb;
this.privateKey=pv;
}


  //Instance functions below this comment.
validPublicKey(){
  if(this.publicKey.length>=8 && this.publicKey.length<=25){
    return true;
  }
  else{
    return false;
  }
}



validPrivateKey(){
    if(this.privateKey[4]="-" && this.privateKey[9]="-"){
      return true;
    }
    else{
      return false;
    }

    static makePrivateKey(){
      let key = "";
      let limit = 14;

      for(var i=0, i<14, i++){
        if (!i==4 && !==9){
          key= key+String(Math.floor(Math.Random()*10)));
      }
      else{
        key = key +"-"
      }
  }
  return password;
}


}
