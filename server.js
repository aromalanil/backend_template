const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connecting Database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database Connected Successfully"))
    .catch(error => console.log("ERROR : Database Connection Failed", error));


//Routing
const indexRouter = require('./Routes/index');
app.use('/', indexRouter);


//Error Handling
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.http_code = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: error.message,
        status: error.status
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Listening at Port : ${PORT}`));