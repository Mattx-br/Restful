const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator'); // legacy version

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator()); // legacy version
// app.use(express.json()); // new version

consign().include('routes').include('utils').into(app);


app.listen(3000, '127.0.0.1', () => {
    console.log("server on");
});