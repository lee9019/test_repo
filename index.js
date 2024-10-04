const http = require('http');
var express=require('express');
const data = require('./data');
const dataObj=new data();
app=express();

app.get("/data",function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(JSON.stringify(dataObj.data, null, 3));
})

app.get("/cartItems",function(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(JSON.stringify(dataObj.Items, null, 3));
})
//const server = http.createServer(requestListener);
app.listen(3001, () => {
    console.log('Server running on port 3001');
});

// leslie