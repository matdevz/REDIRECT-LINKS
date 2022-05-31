const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();

const Router = require('./routes/Router');

mongoose.connect('mongodb://localhost:27017/links', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use('/', Router);
app.listen(PORT, console.log(`App listening on port ${PORT}`));
