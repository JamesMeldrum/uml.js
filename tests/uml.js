(function(){
  "use strict";

  define(function(){

    /*
     *
     *  TODO: How to model public / private?
     *  TODO: How to model return types
     *  TODO: How to model inheritence trees?
     *
     *  Example syntax
     *
     *  var subclass = new umljs.Class({name:"Model"
     *  subclass.properties = [{key:"val", public: true, }];
     *  subclass.methods = {
     *    public :
     *    []
     *    private : 
     *    []
     *  }
     *  Superclass.subclass(subclass);
     *
     *  umljs.model();
     *
     */
  
    console.log("uml.js initiated");

    var umljs = {};

    function Class(init_obj){
      var obj = 0;

      for(obj in init_obj){
        if(init_obj.hasOwnProperty(obj)){
          switch(obj){

            case "name":
              console.log("Name set to",init_obj[obj]);
              break;

            case "parent":
              console.log("Parent class set to", init_obj[obj]);
              break;

            default:
              throw obj + " is not a valid property";
          }
        }
      }
    }

    umljs.Class = Class;

    return umljs;
  });
    
}());
