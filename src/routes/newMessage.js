const express = require('express');
const router = express.Router();

const messages = require('../models/data')

router.get('/', (req, res) => {
    res.render('form');
})

router.post('/', (req, res) => {
    console.log(req.body);
    const message = req.body;
    messages.push({text: message.text, user: message.user, added: new Date()});

    res.redirect('/');
})

module.exports = router;