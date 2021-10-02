
const express = require('express');
const app = express();


// const path = require('path');


const port = 7000;

// sets the path so that the website knows to use the contents of the public folder for static files like css, imgs, js, etc
app.use(express.static('public'));

// sets path for all html files
app.set('views', './views');


// sets index file as the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

// sets the html files as a subpage of the home page
app.get('/datastructures', (req, res) => {
    res.sendFile(__dirname + '/views/datastructures.html')
});

app.get('/algorithms', (req, res) => {
    res.sendFile(__dirname + '/views/algorithms.html')
});


// prints out to console when server is running properly
const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);

});
