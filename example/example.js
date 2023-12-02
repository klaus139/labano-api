function addNum(a,b){
    return console.log(a + b);
}

const subNum = (a, b)=> {
    if(b > a){
        return console.log(b-a);
    }
    return console.log(a - b);
} 

const myName = (name) => {
    return console.log(`my name is ${name}`)
}

module.exports = {
    addNum,
    subNum,
    myName
}