let account_balance=10000;

let products=[{
    name:"samsung",
    amount:70000,
    quantity:10
},{ name:"Iphone 16",
    amount:90000,
    quantity:5
}
]


function buyProduct(product_name){

    return new Promise((resolve,reject)=>{
        
    
    let isProduct=null;
    //find product obejct from product array whose name is equal to product_name
    for(let i=0;i<products.length;i++){
        if(products[i].name==product_name){
           isProduct=products[i];
        }
    }
    if(!isProduct){
       return reject("no product found");
    }else{
        return resolve(isProduct.amount);
    }
})
   
}

function deductAmount(amount) {
    return new Promise((resolve, reject) => {
        if (amount <= account_balance) {
            account_balance -= amount;
            resolve("your product is purchased");
        } else {
            reject("Insufficient balance");
        }
    });
}


buyProduct("Iphone 16")
.then((data)=>{
   return  deductAmount(data)
  
})
.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.log(err);
})

async function myFun() {
    try{
    let amount=await buyProduct("Iphone 16 ")
    let message=await deductAmount(amount);
    console.log(message);

}catch(error){
    console.log(error)
}
}