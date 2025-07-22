const fs = require("fs");

// fs.readFile("../demo.txt","utf-8", function(err, data1){
//     if(err) return console.log(err)
//     let users1 = JSON.parse(data1);

//     fs.readFile("../demo2.txt","utf-8", function(err, data2){
//     if(err) return console.log(err)
//         let users2 = JSON.parse(data2);
//         let alluser = users1.concat(users2);
//         fs.writeFile("./allUsers.txt", JSON.stringify(alluser), function(err){
//             if(err) return console.log(err);
//             console.log("completed");
//         })
//     })  
// })

async function task(file1, file2, file3){
    let user1=await read(file1);
    console.log(user1);
    let user2=await read(file2);
    // let a=JSON.parse(user1)
    // let b=JSON.parse(user2);
    let alluser = a.concat(b);
    let message = await write(file3, JSON.stringify(alluser));
    console.log(message);
}
task("../demo.txt", "../demo.txt", "allUsers.txt");