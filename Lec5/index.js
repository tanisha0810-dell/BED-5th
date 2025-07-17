let p = new Promise((resolve, reject)=>{
    let age = 18;
    if(age>=18) return resolve("you are eligible to vote")
        reject ("you are not eligible")
})

p
.then((data))
.catch(())