const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const usersRoutes = require("./routes/users.js");


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/crud-api', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    console.log('[TEST]!');
    res.send('Hello from Homepage');
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
