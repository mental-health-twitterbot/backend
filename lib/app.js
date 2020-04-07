const express = require('express');
const app = express();

app.use(express.json());

// app.use('/api/v1/question', require('./routes/question'));
app.use('/api/v1/facts', require('./routes/facts'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
