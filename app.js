require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
const Router = require('./routes/Router');

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use('/', Router);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, console.log(`App listening on port ${PORT}`));
