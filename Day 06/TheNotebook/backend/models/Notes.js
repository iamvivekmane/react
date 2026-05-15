const mongoose = require('mongoose')

const NotesSchema = new Schema({
    id: {
        unique: true,
        type: string,
        required: true
    },
    title: {
        type: string,
        required: true

    },
    description: {
        type: string,
        required: true
    },
    tag: {
        type: string,
        default: 'General'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes', 'NotesSchema')