let p = new Promise((resolve, reject)=>{
    resolve("okay")
})
//console.log(p);
p.then((data)=>{
    console.log(data)
    console.log("promise completed");
})
.catch((err)=>{
    console.log(err);
})

let users = [
    {
        id:1,
        age: 16,
        name: "yashu"
    },
      {
        id:2,
        age: 19,
        name: "yashu2"
    },

]
function isEligible(id){
    return new Promise((resolve, reject)=>{
        let user = users.filter((user)=> user.id==id);
    if(!user) return "no user found";
    if(user.age>=18){
        return "eligible to vote"
    } else {
        return " not eligible"
    }
    })
}
isEligible(1).then((data)=>{
    console.log(data)
})