const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const path = require("node:path");
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

const messagesRoute = require('./routes/message');
app.use('/', messagesRoute);

const newMessagesRoute = require('./routes/newMessage');
app.use('/new', newMessagesRoute);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


