(function(){

  "use strict";

  define(function(){


    /*
     *
     *  Example syntax
     *
     *  var subclass = {
     *    vis : ['public','private','protected'] - public
     *    return: [] - undefined
     *    comments    
     *    properties
     *    methods
     *    constructor
     *  }
     *  Superclass.subclass(subclass);
     *
     *  All models need to inherit this class
     *
     */
  
    console.log("uml.js initiated");

    // TODO: When provided an object it will traverse it recursively and create classes
    var umljs = function(UML_as_JSON){};

    var Class = function(init_props){
  

      // Public
      this.inherit = function(class_to_inherit){
        
      };

      // Private

      // Properties

      this.defaults = {
        inherits : [undefined, this],
        vis : ['public','private','protected'],
        returns : [undefined],
        comments : [undefined],
        properties : [undefined],
        methods : [undefined],
        name : [undefined],
        constructor : [undefined],
        x : [undefined],
        y : [undefined]
      };

      this.options = {
        inherits : this.defaults.inherits[0],
        vis : this.defaults.vis[0],
        returns: this.defaults.returns[0],
        comments: this.defaults.comments[0],
        properties:this.defaults.properties[0],
        methods:this.defaults.methods[0],
        name:this.defaults.name[0],
        constructor: this.defaults.constructor[0],
        x : this.defaults.x[0],
        y : this.defaults.y[0]
      };
      
      // Constructor

      var extend = function(context, init_props){
        var i,j;
        for(i in init_props){
          if(init_props.hasOwnProperty(i)){            // Only look through init_props
            if(context.options.hasOwnProperty(i)){     // If options has the object
              if(context.defaults[i].length > 1){
                for(j=0; j < context.defaults[i].length; j+=1){
                  if(context.defaults[i][j] === init_props[i]){
                    context.defaults[i] = init_props[i];
                    break;
                  }
                  if(j===context.defaults[i].length-1){
                    throw "Option " + init_props[i] + " not supported. Following arguments supported: "+context.defaults[i];
                  }
                }
              }else{
                context.options[i] = init_props[i];
              }
            }else{
              throw "Option not supported: "+i;
            }
          }
        }
      };
      extend(this,init_props);

      // TODO: Check for setting inheritence. If not, DIAF.

    };

//    Class.prototype.balls = function(){ console.log("Balls called");};

    umljs.Class = Class;
 

    return umljs;

  });
    
}());
