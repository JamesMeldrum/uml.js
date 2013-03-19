(function(){
  "use strict";
  require([
    'uml'
  ], function(uml){

    console.log("Main");
    var model = new uml.Class({
      vis : "private",
      comments : "here are my comments"
    });

    console.log("New class:",model);

  });
}());
