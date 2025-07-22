const fs=require("fs");
function readUser(filePath){
   return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const parsedUsers = JSON.parse(data);
                resolve(parsedUsers);
            }
        });
    });
}

function readProducts(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const parsedProducts = JSON.parse(data);
                resolve(parsedProducts);
            }
        });
    });
}
module.exports.readUser=readUser;
module.exports.readProducts=readProducts;