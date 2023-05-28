const express = require('express');

const app = express();

const HOST = '192.168.42.155';
const PORT = 3000;

app.use(express.json());

var news = [];



app.get('/get', (req,res)=>{
    res.send(news);
})

app.listen(PORT, HOST, (req, res)=>{
    console.log(`http://${HOST}:${PORT}`)
});