var Queue = function() {
    this.list = [];
}

Queue.prototype.push = function(item) {
    this.list.push(item);
}

Queue.prototype.shift = function() {
    const arr = [];
    while(this.list.length > 1) {
        arr.push(this.list.pop());
    }
    const result = this.list.pop();
    while(arr.length > 0) {
        this.list.push(arr.pop());
    }
    return result;
}