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
    console.log(accountName);
    console.log(order);
    await database.update({ username: accountName },
        { $push: { orders: order } })
};

async function showOrderHistory(accountName) {
    console.log(accountName)
}

module.exports = {
    createAccount, compareCredentials, checkIfAccountsExists,
    getOrder
};