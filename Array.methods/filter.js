/**
 * predicate params:
 *
 * @element - current array element;
 * @index - index of current array element;
 * @array - mapped array;
 *
 */

Array.prototype.superFilter = function(predicate) {
  const result = [];

  for(let i = 0; i < this.length; i++) {
    !!predicate(this[i], i, this) && result.push(this[i]);
  }

  return result;
}

const array = [1, null, Number.NaN, 'a', '', undefined, Infinity, 1n, 0, false, true, {}, NaN];

const predicate = (el) => !el;

console.log(array.superFilter(predicate));
