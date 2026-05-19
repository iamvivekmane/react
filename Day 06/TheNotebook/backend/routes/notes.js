const express = require('express')
const User = require('../models/User')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator')


// Route 1
// Get all notes using GET : api/notes/fetchallnotes : login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json({ notes })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error");
    }
})



// Route 2
// Add a new note using POST : api/notes/addnote : login required
router.post('/addnote', fetchuser, [
    body('title', 'title is not valid').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // If there are errors return bad request and the errors
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.send(`Hello, ${req.query.person}!`);
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error h");
    }
})






module.exports = router