//reverseArray Function
function reverseArray(arr) {
  let reversedArr = [];
  arrLength = arr.length - 1;
  for (i = arrLength; i >= 0; i--) {
    reversedArr[arrLength - i] = arr[i];
  }
  return reversedArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

//reverseArrayInPlace Function
function reverseArrayInPlace(arr) {
  arrHalfLength = arr.length / 2;
  arrLength = arr.length - 1;
  for (i = 0; i < arrHalfLength; i++) {
    let temp = arr[i];
    arr[i] = arr[arrLength - i];
    arr[arrLength - i] = temp;
  }
}
let newArr = [1, 2, 3, 4, 5];
reverseArrayInPlace(newArr);
console.log(newArr);
