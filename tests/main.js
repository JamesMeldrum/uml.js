require([
  'uml',
], function(uml){

  uml.print();
  var test_class = new uml.Class({name:"Model"});
  test_class.properties = [
    {
      "name" : "James",
      "test" : "Test2"
    }
  ];

  test_class.methods =[
    {
      "methodOne" : function(arg1, arg2){
        console.log(arg1,arg2);
      },
      "methodTwo" : function(arg3, arg4){
        console.log(arg1,arg2);
      }
    }
  ];
});
