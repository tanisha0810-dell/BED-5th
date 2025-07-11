let file3=require("./file3.js");
console.log(file3);
function add(a,b){
    return a+b;
}

function sum(a,b){
    return a-b;
}
module.exports.add=add;
module.exports.sum=sum;
 
//hence to avoid crcular depndency you can take common functions and and require them in seperate module 