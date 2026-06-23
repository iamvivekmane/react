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
            return res.status(400).json({ errors: errors.array() });
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

// Route 3
// Update an existing note using POST : api/notes/updatenote : login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        // Create a new note object
        const newNote = {}
        // Check the contents to be updated and store them in newNote object
        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (tag) { newNote.tag = tag }
        // Find a note to be updated and update it
        let note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not found")
        }
        // Allow updating note only if the user owns the note
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Unauthorized access")
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error");
    }
})

// Route 4
// Delete note using DELETE : api/notes/deletenote : login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find a note to be Deleted and delete it
        let note = await Note.findById(req.params.id)
        if (!note) {
            return res.status(404).send("Not found")
        }
        // Allow deleting the note only if the user owns it
        if (note.user.toString() != req.user.id) {
            return res.status(401).send("Unauthorized access")
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server error");
    }
})
module.exports = router