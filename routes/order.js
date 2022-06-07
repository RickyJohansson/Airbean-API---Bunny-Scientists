const { getOrder } = require('../model/accountdb')
const { getMenu } = require('../model/menudb')
const { Router } = require('express');
const { createOrder } = require('../model/orderdb')

const router = Router();

router.get('/', async (req, res) => {

    const accountName = req.headers.username;
    const chosenItems = req.body.cart;
    const orderNmbr = randomOrderNmbr();
    const orderDate = new Date();
    const orderTime = orderDate.toLocaleTimeString();
    const ETA = randomETAnmbr();
    const resObj = {
        success: false
    }

    console.log("orderDate: ", orderDate);
    console.log("orderTime: ", orderTime);
    console.log("ETA: ", ETA);
    let etaTime = orderDate.setMinutes( orderDate.getMinutes() + ETA );
    var date = new Date(etaTime);
    console.log(date);
    

    if (chosenItems.length > 0) {

        const order = {
            orderItems: {
                items: chosenItems,
                amount: req.body.cart.amount
            },
            orderId: orderNmbr,
            orderIsFor: accountName,
            timeETA: `00:${ETA}:00`,
            createdAt: orderTime
        }

        const result = await createOrder(order)

        if (result[0].length <= 0) {
            resObj.message = 'No items in cart'
        } else {
            resObj.message = 'Order placed'
            await getOrder(accountName, order);
        }
        resObj.success = true;
        resObj.order = result;

    }
    else {
        resObj.message = 'error 420'
    }
    res.json(resObj)
});

function randomOrderNmbr() {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    const thirdNum = Math.floor(Math.random() * 100);
    const randomNmbr = `${firstNum}${secondNum}${thirdNum}`;
    return randomNmbr;
};

function randomETAnmbr() {
    const randomMinute = Math.floor(Math.random() * 15);
    return randomMinute;
}


module.exports = router;