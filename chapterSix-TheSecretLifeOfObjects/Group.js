class Group{
    group = []

    add(value){
        if(!this.has(value)){
            this.group.push(value)
        }
    }
    delete(value){
        if(this.has(value)){
            this.group = this.group.filter(v=>v!==value)
        }
    }
    has(value){
        return this.group.includes(value)
    }
    static from (collection){
        let groupp = new Group()
        for(let value of collection){
            groupp.add(value)
        }
        return groupp
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(70);
group.delete(10);
console.log(group.has(70));
