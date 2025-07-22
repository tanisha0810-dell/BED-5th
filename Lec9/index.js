const fs = require('fs');
const express = require("express");
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    const data = req.body; 
    let name = data.name;
    let age = data.age;
    const user = {name, age}

    fs.readFile("data.txt", "utf-8", function(err, data){
        let users = [];
        if(err) return res.send(err);
        if(!err && data.length>0){
            users=JSON.parse(data);
            users.push(user);
        } else{
            users.push(user)
        }

    fs.writeFile("data.txt", JSON.stringify(users), function(err){
    if(err) return console.log(err);
    res.json({name: name, age: age});
    })
    })

});


app.listen(2220, ()=>{
    console.log("server started");
})



    
   
