const fs = require("fs")
let users = [
    {
        id: 3,
        name: "Sam",
        age: 20
    },
    {
        id: 4,
        name: "Tam",
        age: 20
    },
]

fs.writeFile("./demo2.txt", JSON.stringify(users), function(err, data){
    if(err) return console.log(err)
    console.log("done");
})