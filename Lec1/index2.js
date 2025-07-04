const fs = require("fs");
console.log(fs);
console.log("start");

setImmediate(()=>{
    console.log("set Immidiate")
})

setTimeout(()=>{
    console.log("set Timeout")
}, 0)

fs.readFile("demo.txt", "utf-8", (data)=>{
    console.log("file read")
    console.log(data)
    setTimeout(()=>{
        console.log("timer 2")
    }, 0)
    setImmediate(()=>{
        console.log("Immediate 2")
    })
})

function someTask(){
    return new Promise((resolve, reject)=>{
        resolve("Promise")
    })
}
someTask().then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("Next Tick")
})
console.log("end");