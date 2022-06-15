const nedb = require('nedb-promise');
const database = new nedb({ filename: 'menu.db', autoload: true });

async function getMenu(menuArr) {
    let result = await database.find({});
    if (result.length === 0) {
        for (const menuItem of menuArr) {
            database.insert(menuItem)
        }
        result = await database.find({});
    }
    return result;
};

async function addItem(item) {
    const result = await database.insert(item)
    return result;
}

async function removeItem(item) {
    const result = await database.remove(item)
    console.log(result)
    return result;

}

async function compareIds(itemID) {

    const result = await database.find({ id: itemID })
    return result;
}


module.exports = { getMenu, addItem, removeItem, compareIds }