"use strict";
//2. and 3. Declare an array called Products which is an array of type Product 
let products = [
    { name: "milk", price: 5 },
    { name: "eggs", price: 3 },
    { name: "juice", price: 6 },
];
//4. Declare a function called calcAverageProductPrice
function calcAverageProductPrice(yourProducts) {
    //Isolate the prices into their own array 
    let sum = 0;
    let average = 0;
    let priceArray = [];
    for (let i = 0; i < yourProducts.length; i++) {
        if (yourProducts[i].price) {
            sum += yourProducts[i].price;
        }
        average = sum / yourProducts.length;
    }
    return average;
}
let productAverage = calcAverageProductPrice(products);
console.log(productAverage);
