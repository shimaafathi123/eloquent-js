class MultiplicatorUnitFailure extends Error{}

function primitiveMultiply(num1,num2){
    if(Math.random()<0.2){
        return num1*num2
    }
    else{
        throw new MultiplicatorUnitFailure("Invalid!!!")
    }
}

function reliableMultiply(num1,num2){
    for(;;){
        try{
            return primitiveMultiply(num1,num1)
        }
        catch(e){
            if (!(e instanceof MultiplicatorUnitFailure)) throw e
        }
    }
}

console.log(reliableMultiply(2, 5));