(function(){
  "use strict";

  define(function(){


    /*
     *
     *  Example syntax
     *
     *  var subclass = 
     *  Superclass.subclass(subclass);
     *
     */
  
    console.log("uml.js initiated");

    var umljs = {};
    umljs.property = 'derp';
    umljs.method = function(){console.log("method called");};
    return umljs;

  });


    
}());
