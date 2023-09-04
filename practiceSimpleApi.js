const express=require('express');
const app=express();


//create routes for your application, this is simple GET route 
app.get('',(req,res)=>{
    res.send("This is a home page");
});

app.get('/about',(req,res)=>{
    res.send("This is a about page");
});

app.get('/help',(req,res)=>{
    res.send("This is a help page");
});

//Start the server 
const port=3000;
app.listen(port,()=>{
    console.log(`The server is running on ${port}`);
})