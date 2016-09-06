var expect = require("chai").expect;
var stack = require("../stack");

describe("pushpop", function() {
  describe("pop gets what you pushed", function() {
    it("tests stack", function() {
	  var mystack = stack.create();
	  mystack.push(5);
      var mypop = mystack.pop();
      
      expect(mypop).to.equal(5);
      

    });
  });

  
});
