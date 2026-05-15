const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    obj = {
        a: 'blank',
        b: 10
    }
    res.json(obj);

})

module.exports = router