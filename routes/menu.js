const { getMenu, addItem, removeItem, compareIds } = require('../model/menudb')
const { auth } = require('../middleware')
const { Router } = require('express');

const router = Router();
const menuArr = require('../menu.json')
router.get('/', async (req, res) => {

    const menu = await getMenu(menuArr.menu);

    const resObj = {
        success: false
    }
    console.log(menu)
    if (menu) {
        resObj.success = true;
        resObj.menu = menu;

    }
    else {
        resObj.message = 'error 420'
    }
    res.json(resObj)
});

router.post('/additem', auth, async (req, res) => {
    const itemID = req.body.id
    const itemTitle = req.body.title
    const itemDesc = req.body.desc
    const itemPrice = req.body.price

    const resObj = {
        success: false
    }
    if (req.body.id && req.body.title && req.body.desc && req.body.price) {

        const item = {
            id: itemID,
            title: itemTitle,
            desc: itemDesc,
            price: itemPrice
        }
        const result = await addItem(item)
        resObj.success = true;
        resObj.newItem = result;
    }
    else {
        resObj.message = 'error 420'
    }
    res.json(resObj)
})

router.delete('/deleteitem', auth, async (req, res) => {
    const itemID = req.body.id
    const itemTitle = req.body.title
    const itemDesc = req.body.desc
    const itemPrice = req.body.price

    const resObj = {
        success: false
    }

    const result = await compareIds(itemID)
    if (result.length >= 1) {
        const item = {
            id: itemID,
            title: itemTitle,
            desc: itemDesc,
            price: itemPrice
        }

        const result = await removeItem(item)
        console.log(result)
        resObj.success = true;
        resObj.itemDeleted = result;
    }
    else {
        resObj.message = 'error 420'

    }

    res.json(resObj)
})



module.exports = router;