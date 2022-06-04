const nedb = require('nedb-promise');
const database = new nedb({ filename: 'database.db', autoload: true });
// Databasen döps för tillfället till 'database.db' då vi kommer använda oss av olika information
// 'database.db' kanske blir ett bättre 'samlingsnamn' då?



/*
    Format för vad vi vill spara i databasen vid ex. login??
    Allt kan vara i detta format?? tror det funkar för all info vi ska lägga in

    {
        username: '',
        password: ''
    }

*/


/*
async function createAccount() {

}
*/




// module.exports = { createAccount };



