/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.data = []
  this.min = null;
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if (this.min === null || this.min > x) {
      this.min = x;
  }
  
  this.data.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const removed = this.data.pop();
  
  if (this.data.length === 0) {
      this.min = null;
  } else if (removed === this.min) {
      this.min = Math.min.apply(null, this.data)
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.data[this.data.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/