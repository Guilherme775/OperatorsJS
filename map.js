const numbers = [1, 2, 3];

const item = numbers.map((item, index, array) => {
  return item;
});

const index = numbers.map((item, index, array) => {
  return index;
});

const array = numbers.map((item, index, array) => {
  return array;
});

console.log(item);
console.log(index);
console.log(array);
