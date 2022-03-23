'use strict';

//testing data
const userList = [
    {name: 'omg21', isVIP: true},
    {name: 'abb22', isVIP: false},
    {name: 'ggg33', isVIP: true},
];

//  Q1: Purpose: given a list of users and return a list of VIP member users
//answer
function filterAccount(userList) {
    return userList.filter((user) => user.isVIP === true);
}