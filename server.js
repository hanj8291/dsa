require('dotenv').config();

const express = require('express');
const app = express();


const path = require('path');


const port = 7000;

const { auth } = require("express-openid-connect");

// sets the path so that the website knows to use the contents of the public folder for static files like css, imgs, js, etc
app.use(express.static('public'));

// sets path for all html files
app.set('views', './src/views');


app.set("view engine", "pug");


app.use(
    auth({
        issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
        baseURL: process.env.BASE_URL,
        clientID: process.env.AUTH0_CLIENT_ID,
        secret: process.env.SESSION_SECRET,
        authRequired: false,
        auth0Logout: true,
    })
);



// sets index file as the home page
app.get('/', (req, res) => {
    res.render('index');
});

// sets the html files as a subpage of the home page
app.get('/datastructures', (req, res) => {
    res.sendFile(__dirname + '/src/views/datastructures.html')
});

app.get('/algorithms', (req, res) => {
    res.sendFile(__dirname + '/src/views/algorithms.html')
});

/*
app.get("/sign-up", (req, res) => {
    res.oidc.login({
        authorizationParams: {
            screen_hint: "signup",
        },
    });
});
*/


// prints out to console when server is running properly
const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);

});
