const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    title: {
        type: String
    },
    entry: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
});

const EntryModel = mongoose.model('Entry', EntrySchema);
module.exports = EntryModel;