Object.prototype.superValues = function (object) {
  const result = [];

  let i = 0;
  for (let key in object) {
    ++i;
    result.push(object[key]);
  }

  return (result.length = --i, result);
};


const obj = { a: 1, b: 2, c: 'c', d: {}, e: [], f: '', false: false };

console.log(Object.superValues(obj));
