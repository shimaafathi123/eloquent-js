//arrayToList Function
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}
console.log(arrayToList([1, 5, 8]));

//listToArray Function
function listToArray(list) {
  let arr = [];
  while (list !== null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}
console.log(
  listToArray({ value: 1, rest: { value: 5, rest: { value: 8, rest: null } } })
);

//prepend Function
function prepend(value, list) {
  return { value, rest: list };
}

console.log(prepend(10, prepend(20, null)));

//nth Function
function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
console.log(nth(arrayToList([10, 20, 30]), 1));
