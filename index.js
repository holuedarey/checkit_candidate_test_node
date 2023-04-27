const letaShop = require('./data.json');

const customers = letaShop['customers'] ?? [];
let purchases = letaShop['purchases'];


const customerWithPurchase = customers.filter(customer => purchases.find(purchase => purchase.customerId.includes(customer.id)));

console.log("Output the customers who has made a purchase with Leta and output the customer information.");
console.log("--------------------------------------------------------------------------------------------");
console.log(customerWithPurchase);
console.log("--------------------------------------------------------------------------------------------");




const purchaseGreaterThanOne = purchases.filter((purchase) => purchase['purchases'].length > 1).map(entry => entry['customerId']);

const customersPurchase = customers.filter(customer =>  purchaseGreaterThanOne.includes(customer.id) );

console.log("Find the customers who have purchased any gaming product more than once and output the customer information.");
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(customersPurchase);
console.log("--------------------------------------------------------------------------------------------------------------");


let  results = [];
customers.map((customer) => {
    return letaShop['products'].map((product) =>  {
        const numberOfPurchases =  (purchases.find((purchase) => customer.id === purchase.customerId));
       results.push({
            "customerName": `${customer['firstname']} ${customer['lastname']}`,
            "productName": product['name'],
            "numberOfPurchases": numberOfPurchases ? (numberOfPurchases.purchases.filter(purchaseEntry => purchaseEntry.productId === product.id)).length : 0 
          });
    })
    
});

console.log("Output the number of purchases per each customer per each gaming product.")
console.log("--------------------------------------------------------------------------------------------");
console.log(results);
console.log("--------------------------------------------------------------------------------------------");





