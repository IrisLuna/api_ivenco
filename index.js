require('dotenv').config();

const mongoString = process.env.DATABASE_URL
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

mongoose.set("strictQuery", false);
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();

app.use(express.json());

app.use('/api', routes)

app.listen(3030, () => {
    console.log(`Server Started at ${3030}`)
})