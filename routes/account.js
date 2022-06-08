const { createAccount, compareCredentials, checkIfAccountsExists, showOrderHistory } = require('../model/accountdb')

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

router.get('/orderhistory', async (req, res) => {
    const resObj = [{
        success: false
    }]
    
    if (req.headers.username) {
        const result = await showOrderHistory(req.headers.username);
        console.log("account.js - result", result);
        // console.log("account.js - req.headers.username", req.headers.username);

        
        if(result) {

            resObj[0].success = true;

            for(let i = 0; i < result.length; i++) {

                const items = result[i].orderItems.items;
                let totalPrice = 0;
                for(let item of items) {
                    totalPrice += item.price * item.amount;
                }

                resObj.push({
                    success: true,
                    message: "Här är din orderhistorik",
                    // resObj.order = result;
                    orderId: result[i].orderId,
                    createdAt: result[i].createdAt,
                    totalPrice: totalPrice
                    });
            }
        } else {
            resObj[0].success = false;
            resObj[0].message = "Användarnamet kunde inte hittas"
        }
    } else {
        resObj[0].message = "Logga in för att se din orderhistorik"
    }
    res.json(resObj);

})

module.exports = router;