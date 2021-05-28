Array.prototype.superReduce = function (callback, initial) {
  let result = initial;

  for (let i = 0; i < this.length; i++) {
    result = callback(this[i], result, i, this);
  }

  return result;
}

const array = [1, 2, 3, 4, 5, 6];

const reduce = (acc, cur) => (acc += cur, acc);

console.log(array.superReduce(reduce, 0));
