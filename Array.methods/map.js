/**
 * callback params:
 *
 * @element - current array element;
 * @index - index of current array element;
 * @array - mapped array;
 *
 */

// #1

Array.prototype.superMap = function (callback) {
  if (!this.length) return [];

  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};


// #2

Array.prototype.superMap1 = function (callback) {
  if (!this.length) return [];

  const result = [];

  let i = 0;
  while (this.length > i) {
    result.push(callback(this[i], i, this));
    i++;
  }

  return result;
}

// #3

Array.prototype.superMap2 = function (callback) {
  let length = this.length;
  const result = [];
  let count = 0;

  const iterator = () => {
    result.push(callback(this[count], count++, this));
    --length;
    return !length ? result : iterator();
  }

  return iterator();
}


const array = [1, 2, 3, 4, 5, 6, 7];

const callback = (el) => el ** 2;

console.log(array.superMap2(callback));
