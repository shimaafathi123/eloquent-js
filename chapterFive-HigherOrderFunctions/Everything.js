//first method using loop
function Every1(arr,test){
    let flag = 0
    for(let element of arr){
        if(test(element)){
            flag++;
        }
    }
    if(flag == arr.length){
        return true
    }
    else{
        return false
    }
}
console.log(Every1([2, 4, 16], n => n < 10));

//second method using some function
function Every2(arr,test){
    return !arr.some(element=>test(element))    
}
console.log(Every2([], n => n < 10));
