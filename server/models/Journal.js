const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Account'
    }
});

const EntryModel = mongoose.model('Entry', EntrySchema);
module.exports = EntryModel;