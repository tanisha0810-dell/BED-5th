const fs = require("fs");

fs.readFile("../demo.txt","utf-8", function(err, data){
    if(err) return console.log(err)
    //console.log(data[0]);
    let users = JSON.parse(data);
    console.log(users)
})

fs.readFile("../demo2.txt","utf-8", function(err, data){
    if(err) return console.log(err)
    //console.log(data[0]);
    let users = JSON.parse(data);
    console.log(users)
})

async function readusers(){
    let user1 = await read("../demo.txt");
    let user2 = await read("../demo2.txt");
    console.log(user1);
    console.log(user2);
}