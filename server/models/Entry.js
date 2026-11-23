const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Account'
    }
});

EntrySchema.statics.toAPI = (doc) => ({
    title: doc.title,
    content: doc.content,
    dateCreated: doc.dateCreated,
});

const EntryModel = mongoose.model('Entry', EntrySchema);
module.exports = EntryModel;