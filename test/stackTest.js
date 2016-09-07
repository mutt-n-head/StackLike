var assert = require('assert');
var expect = require("chai").expect;
var stack = require("../stack");
// Could just do var stack = require('../stack/index.js')
// Remember when you do directly pull in a JS file you only get what is exported from it.
// Each module gets its own namespace.... which means other modules cannot see it.

describe("pushpop", function() {
    describe("pop gets what you pushed", function() {
        it("tests stack", function() {
	          var mystack = stack.create();
	          mystack.push(5);
            var mypop = mystack.pop();
      
            expect(mypop).to.equal(5);
        });
    });

    // Text is name/description
    describe("It doesn't share values", function() {
        it ("tests two stacks", function() {
            var firstStack = stack.create();
            firstStack.push(1);
            var secondStack = stack.create();
            secondStack.push(2);
            expect(firstStack.peek()).to.equal(1);
            assert.equal(firstStack.pop(), 1);
            assert.equal(secondStack.peek(), 2);
        });
    });
});

// System, or integration tests are higher level tests
// Definition of unit test is subjective.
