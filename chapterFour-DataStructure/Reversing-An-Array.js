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

/* Question:
Thinking back to the notes about side effects and pure functions in the previous chapter,
    which variant do you expect to be useful in more situations? Which one runs faster?
 */

/*
    Answer:
    reverseArray: This function produces a new array with elements in the reverse order, leaving the original array unchanged. It's a pure function because it doesn't modify the original array and has no side effects.
reverseArrayInPlace: This function modifies the original array by reversing its elements in place. It has a side effect because it changes the state of the original array.

Generally, reverseArrayInPlace would be faster than reverseArray because it operates directly on the original array without creating a new one.
*/
