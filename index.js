//initialize the data from data.json
const letaShop = require('./data.json');

//array of data for customers 
const customers = letaShop?.customers ?? [];

//array of data for purchases 
let purchases = letaShop?.purchases;


/**
 * filter out customer base on customerId and customer id exist on purchase
 */
const customerWithPurchase = customers?.filter(customer => purchases?.find(purchase => purchase?.customerId.includes(customer?.id)));

console.log("Output the customers who has made a purchase with Leta and output the customer information.");
console.log("--------------------------------------------------------------------------------------------");
console.log(customerWithPurchase);
console.log("--------------------------------------------------------------------------------------------");



/**
 * filter purchase greater than one and map out only the customerId to use for the next step
 */
const purchaseGreaterThanOne = purchases?.filter((purchase) => purchase?.purchases.length > 1).map(entry => entry?.customerId);

/**
 * filter customer with customer Id who has more than one purchase from the initial step 
 */
const customersPurchase = customers.filter(customer =>  purchaseGreaterThanOne?.includes(customer?.id) );

console.log("Find the customers who have purchased any gaming product more than once and output the customer information.");
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(customersPurchase);
console.log("--------------------------------------------------------------------------------------------------------------");


//declare a variable to hold the result of the proccess
let  results = [];

/**
 * step One map throuh the customer 
 * step two map through the product to get the purchase base on each customer Id and product Id from Purchases
 */
customers?.map((customer) => {
    return letaShop?.products.map((product) =>  {
        const numberOfPurchases =  (purchases?.find((purchase) => customer?.id === purchase?.customerId));
       results.push({
            "customerName": `${customer?.firstname} ${customer?.lastname}`,
            "productName": product?.name,
            "numberOfPurchases": numberOfPurchases ? (numberOfPurchases?.purchases.filter(purchaseEntry => purchaseEntry?.productId === product?.id)).length : 0 
          });
    })
    
});

console.log("Output the number of purchases per each customer per each gaming product.")
console.log("--------------------------------------------------------------------------------------------");
console.log(results);
console.log("--------------------------------------------------------------------------------------------");





