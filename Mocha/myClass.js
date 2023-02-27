class MyClass{
  constructor(){
    console.log("initiate");
  }

  add(arg1,arg2){
    return arg1+arg2;
  }

  testPromise(){
    return new Promise(function(resolve,reject){
      setTimeout(()=>resolve(3),1000);
    }).then(function(result){
      return result*2;
    })
  }
}

module.exports=MyClass