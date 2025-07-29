const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');

dotenv.config(); // ✅ Load env variables
const userRoutes=require('./routes/user.routes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Optional but good practice if working with JSON
app.use(express.urlencoded({extended:true}));

app.use('./users',userRoutes);

const connectToDb=require('./db/db');
connectToDb();
// Routes
app.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = app;
