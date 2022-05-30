// use micro framework express
const express = require('express');

// use cors 
const cors = require('cors');

// use axios
const axios = require('axios');

// use port 8000 to run server on localhost
const port = 8000;

// initialize express in a variable named app
const app = express();

// configure express to use urlencoded
app.use(express.urlencoded({
    extended: true
}));

// configure cors
app.use(cors('*'));

// default entry point '/' 
app.get('/', (req, res) => {
    res.json({ message : 'Welcome on Express/Node Server'}).status(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});