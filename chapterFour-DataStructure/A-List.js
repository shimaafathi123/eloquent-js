//arrayToList Function
function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
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
console.log(listToArray({ value: 1, rest: { value: 5, rest: { value: 8, rest: null } } }));
  
