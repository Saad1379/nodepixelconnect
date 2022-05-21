const express = require('express');
const app = express();
require("dotenv").config();
const {PORT} = process.env;

app.get('/', (req,res)=>{
    res.send(`App started on port ${PORT}`)
});

app.listen(PORT, ()=>{
    console.log(`App started on port ${PORT}`)
});