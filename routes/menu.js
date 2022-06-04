const { getMenu } = require('../model/menudb')

const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    const menuList = await getMenu();

    const resObj = {
        success: false
    }
    if (eventList.length > 0) {
        resObj.success = true;
        resObj.event = menuList;

    }
    else {
        resObj.message = 'error 420'
    }
    res.json(resObj)
});

module.exports = router;