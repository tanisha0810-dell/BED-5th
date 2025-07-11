function buyProduct(product_name, cb){
    //some async operation
    // get product detail from product DB
    // write order detail in user DB
    setTimeout(()=>{
        console.log("Order complete");
        cb();
    })
}