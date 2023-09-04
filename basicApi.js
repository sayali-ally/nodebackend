const http= require('http');
const data = require('./data');
http.createServer((req,resp)=>{
resp.writeHead(500,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(5000);


const http=require('http');
const data=require('data');
http.createServer((req,res)=>{
    res.write("Hellow");
    res.write(JSON.stringify(data));
    res.end();
}).listen(4000);


const http=require('http');
const data=require('data');
http.createServer((req,res)=>{
    res.write("hellow");
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000);

const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(500,{'Content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)

const http=require('http');
http.createServer((req,res)=>{
    res.write(JSON.stringify(data));
    res.end();
    res.write("hello")
}).listen(3000)