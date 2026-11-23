const models = require('../models');
const Entry = models.Entry;

const journalPage = (req, res) => {
    return res.render('app');
};

const createEntryPage = (req, res) => res.render('addPost');

const createEntry = async (req, res) => {
    if (!req.body.title || !req.body.content) {
        return res.status(400).json({});
    } 

    const entryData = {
        title: req.body.title,
        content: req.body.age,
        owner: req.session.account._id,
    };

    try {
        const newEntry = new Entry(entryData);
        await newEntry.save();
        return res.status(201).json({title: newEntry.title, content: newEntry.content});
    } catch(err) {
        console.log(err);
        if (err.code === 11000) {
            return res.status(400).json({});
        }
        return res.status(500).json({error: 'An error occurred in adding entry'});
    }
};

const getEntries = async (req, res) => {
    try {
        const query = {owner: req.session.account._id};
        const docs = await Entry.find(query).select('title content dateCreated').lean().exec();

        return res.json({entries: docs});
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: 'Error retrieving entries'});
    }
};

module.exports = {
    journalPage,
    createEntryPage,
    createEntry,
    getEntries,
};