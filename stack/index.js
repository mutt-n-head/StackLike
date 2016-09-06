function Stacker() {
    var aStack = [];

    this.push = function(item) {
        aStack.push(item);
    }

    this.pop = function() {
        return aStack.pop();
    }

    this.peek = function() {
        return aStack[aStack.length - 1];
    }

    return this;
}

module.exports = {
    create: function() {
        return new Stacker();
    }
}