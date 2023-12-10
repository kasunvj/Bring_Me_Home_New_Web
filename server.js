const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const { exec } = require("child_process");

 
app.use(bodyParser.json());

// Serve static files (HTML, CSS)
app.use(express.static(__dirname+ '/'));
app.set('view engine', 'html'); // Set EJS as the view engine
app.engine('html', require('ejs').renderFile);


//app.set('views', path.join(__dirname, 'views'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

// Handle form submission

app.get('/', (req, res) => {
    res.render('index')
});


// Start the server
const port = 3000;
const hostname = '127.0.0.1' 
app.listen(port,hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
