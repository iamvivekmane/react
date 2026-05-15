const express = require('express')
const User = require('../models/User')
const router = express.Router()



router.get('/', (req, res) => {
    // obj = {
    //     "name": "vivek"
    // }
    res.send('hello')
    console.log(req.body);
})




module.exports = router