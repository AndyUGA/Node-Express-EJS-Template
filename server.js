const express = require('express');
const bodyParser = require('body-parser')
const admin = require("firebase-admin");
const app = express();

app.use(express.json());
app.engine("html", require("ejs").renderFile);

// const serviceAccount = require("./key.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

const port = 3000;

app.get('/', (req, res) => {
    res.send('This is the homepage');
})

app.get('/signup', (req, res) => {
    res.render("signup.ejs", {
        testData: "This is some test data"
    });
})

app.get('/login', (req, res) => {
    res.render("login.ejs", {
        testData: "This is some test data"
    });
})

app.get('/home', (req, res) => {
    res.render("home.ejs");
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})