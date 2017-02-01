const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const mongoURI = 'mongodb://localhost:27017/DATABASE_NAME_GOES_HERE';
mongoose.connect(mongoURI);

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './src')));

app.listen(3000, () => {
  console.log('listening on 3000');
});
