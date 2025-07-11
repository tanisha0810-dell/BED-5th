let products = [
    {
        name: "Samsung",
        amount: 70000,
        quantity: 10 
    },
    {
        name: "Iphone",
        amount: 1000000,
        quantity: 1
    }
]

// function buyProduct(product_name, cb){
//     //some async operation
//     // get product detail from product DB
//     // write order detail in user DB
//     setTimeout(()=>{
//         console.log("Order complete");
//         cb();
//     })
// }
let accountBalance = 20000;

buyProduct("Iphone", function(err, amount){
    if(err) return console.log(err)
        console.log(amount)
    deductAmount(amount, function(err, message){
        if(err) return console.log(err)
            console.log(message)
        console.log(accountBalance)
    })
})
//console.log("Product is purchased");

function buyProduct(product_name, cb){
    let isproductAvail = null;
    //find product object from product array whose name is equal to product_name
    for(let i=0; i<products.length; i++){
        //console.log(products[i].name==product_name)
        if(products[i].name==product_name){
            isproductAvail=products[i]
        }
    }
    if(!isproductAvail){
        cb("product is not available", null)
    } else{
        cb(null, isproductAvail.amount)
    }
}

function deductAmount(amount, cb){
    if(amount>accountBalance){
        cb("Balance is low", null)
    } else{
        accountBalance-=amount
        cb(null, "Product is purchased")
    }
    
}