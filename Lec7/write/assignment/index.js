const fs = require('fs');
const readline = require('readline');
const { readUser } = require("../IO/io.js");
const { readProducts } = require("../IO/io.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function order() {
  const users = await readUser('./users.txt');
  const products = await readProducts('./products.txt');
  console.log("Users:", users);
  console.log("Products:", products);

  rl.question("Enter user id: ", (userId) => {
    rl.question("Enter product id: ", (productId) => {
      const userFound = users.find(u => u.id === parseInt(userId));
      const productFound = products.find(p => p.id === parseInt(productId));

      if (userFound && productFound) {
        fs.appendFile(
          './orderHistory.txt',
          JSON.stringify({
            userId: userFound.id,
            username: userFound.username,
            productId: productFound.id,
            productName: productFound.name,
          }) + '\n',
          (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("Order placed");
            }
            rl.close();
          }
        );
      } else {
        console.log("Not found");
        rl.close();
      }
    });
  });
}

order();









