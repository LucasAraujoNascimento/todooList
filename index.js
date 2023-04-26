const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const path = require('path')
const routerTask = require('./src/routerTask/routerTask')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));


mongoose.connect('mongodb://localhost/taskList');
const db = mongoose.connection;
db.on('error', () => {console.log('An error has occurred')})
db.once('open', () => {console.log('linked database')})

app.use('/', routerTask);


app.listen(PORT, () => {console.log(`Server running on port: ${PORT}`)});

