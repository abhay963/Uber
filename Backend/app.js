const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');

dotenv.config(); // ✅ Load env variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Optional but good practice if working with JSON

// Routes
app.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = app;
