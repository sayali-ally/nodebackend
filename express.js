const express = require('express');
const app=express();

app.get("",(req,res)=>{
    res.send(`<h1>Welcome to Home Page</h1> <a href="/about">Go to About page </a>`);
});

app.get("/about",(req,res)=>{
    res.send(`
    <input type ="text" placeholder="User name" value="${req.query.name}"/>
    <button>Click me</button>
    <a href="/">Go to Home page</a>`);
});

app.get("/help",(req,res)=>{
    res.send("Welcome to Help page");
});

app.listen(5000);