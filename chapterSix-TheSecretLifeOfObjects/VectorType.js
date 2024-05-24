class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(otherVec){
        return new Vec(this.x+otherVec.x, this.y+otherVec.y)
    }
    minus(otherVec){
        return new Vec(this.x-otherVec.x, this.y-otherVec.y)
    }
    get length (){
        return Math.sqrt(this.x**2+this.y**2)
    }
}



const vecOne = new Vec(1, 2);
const vecTwo = new Vec(2, 3);

console.log(vecOne.plus(vecTwo));  
console.log(vecOne.minus(vecTwo));
console.log(vecOne.length)