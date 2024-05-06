//Range Function
function Range(start, end) {
  let arr = [];
  let arrLength = end - start
  arr[0]= start
  for(i=1; i<=arrLength; i++){
    arr[i]=arr[i-1]+1
  }
  return arr
}
console.log(Range(1,6))

//Sum function
function Sum(arr){
  let sumArr = 0
  for(i=0; i<arr.length;i++){
    sumArr += arr[i]
  }
  return sumArr
}
console.log(Sum(Range(1,10)))