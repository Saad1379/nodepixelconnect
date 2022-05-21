const express = require("express");
require("dotenv").config();
const app = express();
const {APP_PORT} = process.env;
const port = process.env.PORT || APP_PORT;


app.get('/', (req,res)=>{
    res.send(`App started on port ${port}`)
});


app.listen(port, ()=>  console.log(`Server is running on port ${port}`))