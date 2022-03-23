// Q2
const NODE_ENV = process.env.NODE_ENV || "development";
const knexFile = require("../knexfile")[NODE_ENV]
const knex = require('knex')(knexFile);

// Purpose: Randomly select N birthday month users and get them a reward coupon
function birthdayCustomerReward(knex, rewardCouponID, limit) {
    
    const month = new Date().getMonth() + 1;
    //random select limit customers
    const birthdayCustomer = (await knex.raw(
      "SELECT id FROM (SELECT * FROM user WHERE birth_month = ?) rand_users ORDER BY RAND() LIMIT ?",
        [month, limit]
    ))[0]; // The return object is an array which includes the data and some metadata, we just need the data part so we just take the first part of the array. 
    for (let i = 0; i <= birthdayCustomer.length; i++) {
        await assignCoupon(rewardCouponID, birthdayCustomer[i].id)
    }
}