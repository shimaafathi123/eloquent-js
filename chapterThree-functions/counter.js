
//countBs
function countBs(word){
    count = 0
    for(i=0; i<word.length;i++){
        if(word[i]=="B"){
            count++;
        }
    }
    return count
}

console.log(countBs("BBBBNBBBNB"))


//countChar
function countChar(word,character){
    count = 0
    for(i=0; i<word.length;i++){
        if(word[i]==character){
            count++;
        }
    }
    return count
}
console.log(countChar("BBBBNBBBNB","N"))
