const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'vivekisgoodb@y'

// Creating a user using POST : api/auth/createUser : No login required
router.post('/createuser', [
    body('email', 'email is not valid').isEmail(),
    body('name', 'name is not valid').isLength({ min: 3 }),
    body('password', 'password must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {

    // If there are errors return bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send(`Helloss, ${req.query.person}!`);
    }


    try {
        //Check wheather the user with the this email exist already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry a user with this email exist already" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt)
        //Creates a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
        });
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)

        //Send the user as responese if created successully
        res.json({ authtoken })

        //Catches the error
    } catch (error) {
        res.status(500).send("Some error occured");
    }
})
module.exports = router;