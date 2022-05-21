const express = require('express');
const app = express();
const PORT = 6666;

app.get('/', (req,res)=>{
    res.send(`App started on port ${PORT}`)
});

app.listen(PORT, ()=>{
    console.log(`App started on port ${PORT}`)
});