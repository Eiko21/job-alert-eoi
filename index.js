const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");  
const morgan = require("morgan"); 
const compression = require("compression");  
const helmet = require("helmet"); 
const usersRoute = require(__dirname + '/api/users');
const config = require(__dirname + '/.env');

const options = config[process.env.NODE_ENV];
const _PORT = options.PORT;

mongoose.connect(options.MONGOURL);

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(helmet()); 
app.use(express.json());
app.use(compression());

app.use('/api/users', usersRoute);

app.listen(_PORT, () => { console.log(`\nRunning as ${process.env.NODE_ENV}\nlistening port ${_PORT}`)});