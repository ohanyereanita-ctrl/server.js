require('dotenv').config();

const express = require('express');
const logger = require('./logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);


app.get('/', (req, res) => {
    res.send('My Week 2 API!');
});

app.get('/Hello', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);

    const { id } = req.params;

    res.send(`user ID: ${id} profile`);
});

app.post('/user', (req, res) => {
    console.log(req.body);
    const { email, name } = req.body;

    if (!email.trim() || !name.trim()) {
        return res.status(400).send('Email and name are required');
    }

    res.send(`Hello, ${name}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
