const fs = require("fs");

fs.writeFile("./demo.txt","hello G27", function(err, data){
    if(err) return console.log(err)
    console.log("success");
})

fs.writeFile("./demo2.txt","hello G27", function(err, data){
    if(err) return console.log(err)
    console.log("success again");
})