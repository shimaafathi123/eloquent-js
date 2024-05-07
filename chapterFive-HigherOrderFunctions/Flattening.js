let array = [[1,2,3] , [4,5,6] , [7,8,9] , [10,11,12]]

let newArr = array.reduce((a,b)=>a.concat(b))
console.log(newArr)