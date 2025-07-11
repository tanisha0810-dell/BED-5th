//let file1=require("./file2");     it create CD
let file3=require("./file3");      //to avoid CD
console.log(file3);
let res=file3.div(4,2);
console.log(res);
function mul(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
module.exports.mul=mul;
module.exports.divide=divide;