//reverseArray Function
function reverseArray(arr){
    let reversedArr = []
    arrLength = arr.length-1
    for(i=arrLength; i>=0; i--){
        reversedArr[arrLength-i] = arr[i]
    }
    return reversedArr
}
console.log(reverseArray([1,2,3,4,5]))