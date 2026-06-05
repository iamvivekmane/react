const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'vivekisgoodb@y'
const fetchuser = require('../middleware/fetchuser')


// Route 1
// Creating a user using POST : api/auth/createUser : No login required
router.post('/createuser', [
    body('email', 'email is not valid').isEmail(),
    body('name', 'name is not valid').isLength({ min: 3 }),
    body('password', 'password must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {

    // If there are errors return bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send(`Hello, ${req.query.person}!`);
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
        res.status(500).send("Internal server error");
    }
})








// Route 2
// Authenticate a user using POST : api/auth/login : No login required
router.post('/login', [
    body('email', 'email is not valid').isEmail(),
    body('password', 'password cannot be blank').exists()

], async (req, res) => {
    // If there are errors return bad request and the errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send(`Hello, ${req.query.person}!`);
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Login with correct credentials' })
        }

        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Login with correct credentials' })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)

        //Send the user as responese if created successully
        res.json({ authtoken })

    } catch (error) {
        res.status(500).send("Internal server error");
    }


})

// Route 3
// Get loggedin user details using POST : api/auth/getuser : login required
router.post('/getuser', [
    body('email', 'email is not valid').isEmail(),
    body('password', 'password cannot be blank').exists()
], fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        res.status(500).send("Internal server error");
    }
})


module.exports = router;