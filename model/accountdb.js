const nedb = require('nedb-promise');
const database = new nedb({ filename: 'account.db', autoload: true });

async function createAccount(account) {
    const result = await database.insert(account)
    return result;
}

async function checkIfAccountsExists(credentials) {

    const result = await database.find({
        $or: [{ username: credentials.username },
        { email: credentials.email }]
    });

    return result;

}

async function compareCredentials(credentials) {
    const result = await database.find({
        $and: [{ username: credentials.username },
        { password: credentials.password }]
    });

    return result;
}

async function getOrder(accountName, order) {

    await database.update({ username: accountName },
        { $push: { orders: order } })
};

async function showOrderHistory(accountName) {
    const result = await database.find({ username: accountName })
    console.log("accountdb.js - result", result);

    if(result.length > 0) {
        const orderHistory = result[0].orders;

        const date = new Date();
        console.log("date: ", date);

        for(let order of orderHistory) {
            if(date > order.timeETA){
                order.expired = true;
            }
        }

        let refinedOrderHistory = refineOrderHistory(orderHistory);
        return refinedOrderHistory;
    }
}

function refineOrderHistory(orderHistory) {
    let newOrderHistory = orderHistory.filter(order => order.expired = true );
    return newOrderHistory;
}

module.exports = {
    createAccount, compareCredentials, checkIfAccountsExists,
    getOrder, showOrderHistory
};