const express = require('express');
const router = express.Router();

const messages = require('../models/data');

router.get('/', (req, res) => {
    console.log(messages);
    res.render('index', {messages});
} )


module.exports = router;