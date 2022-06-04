const { createAccount, compareCredentials, checkIfAccountsExists } = require('../model/accountdb')

const { Router } = require('express');

const router = Router();


router.post('/login', async (req, res) => {
    const credentials = req.body;
    const accountExists = await compareCredentials(credentials)

    const resObj = {
        success: false
    }
    if (accountExists.length === 1) {
        resObj.success = true;
        resObj.message = 'inloggad'
    }
    else {
        resObj.message = 'hittade inget konto';
    }
    res.json(resObj);
});


router.post('/signup', async (req, res) => {
    const credentials = req.body;
    console.log(credentials);
    credentials.orders = []
    const result = await checkIfAccountsExists(credentials);

    const resObj = {
        success: false
    }
    if (result.length === 0) {
        const result = await createAccount(credentials);
        console.log(result);
        if (result) {
            resObj.success = true;
            resObj.message = `Account ${credentials.username} created.`;
        }
    }
    else {
        resObj.message = 'account already exists.'
    }
    res.json(resObj)
});

module.exports = router;