const NODE_ENV = process.env.NODE_ENV || "development";
const knexFile = require("../knexfile")[NODE_ENV];
const knex = require("knex")(knexFile); //https://www.npmjs.com/package/knex
// const Exception = require('./Exception.js');
const passwordUtils = require("./passwordUtils"); // a utils for password handling
// Purpose: Delete user
async function deleteUser(id, password) {
  try {
    // It checks user password is correct.
    // The return object is an array which includes the data and some metadata, we just need the data part so we just take the first part of the array.
    const passwordInfo = (
      await knex.raw("SELECT password FROM user where `id` = ?"), [id]
    )[0];
    // console.log(passwordInfo);
    if (passwordInfo.length) {
      const passwordHash = passwordInfo[0].password;
      const passwordCheck = await passwordUtils.verify(passwordHash, password);
      if (!passwordCheck) {
        // *****Answer: From security perspective error message "Incorrect password" is too specific which might give hint to hacker *****
        throw new Error("Incorrect password"); 
      }
    }

    // It checks the user has any existing uncompleted orders.
    // The return object is an array which includes the data and some metadata, we just need the data part so we just take the first part of the array.
    const existingProcessingOrder = (
      await knex.raw("SELECT COUNT(*) AS count FROM order_history where `user_id` = ? AND `status` = 'processing'"), [id]
    )[0];

    // console.log(existingProcessingOrder);

    if (existingProcessingOrder.count) {
      throw new Error(`The user ${id} exists uncompleted orders`);
    } else {
      await knex("users").where({ id: id }).del();
    }
  } catch (err) {
    console.log(err);
    throw new Error("Internal server error");
  }
}
