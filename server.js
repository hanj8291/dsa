const express = require('express');
const app = express();
const path = require('path');
const port = 7000;

app.use('/static', express.static(path.join(__dirname + '/public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname +'/index.html'));
});


const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);

});
