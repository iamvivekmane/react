const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator')


router.post('/', [
    body('email', 'email is not valid').isEmail(),
    body('name', 'name is not valid').isLength({ min: 3 }),
    body('password', 'password must be atleast 5 characters').isLength({ min: 5 }),

], (req, res) => {
    // console.log(req.body);
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send(`Helloss, ${req.query.person}!`);
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.json({ error: 'please enter valid email', err: err.message })
        })
})
module.exports = router;