const express=require('express');
const path=require('path');
const app=express();

const publicPath=path.join(__dirname,'public');

app.set('view engine','ejs');    //creating dynamic page 

app.get('/profile',(req,res)=>{
    const user={
        name: "sayali shelke",
        email: "sayali@test.com",
        city: "Nagpur",
        skills: ["java","cpp","php","C"]
    }
    res.render('profile',{user});
});

app.get('/login',(req,res)=>{
    res.render('login');
});


app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});

const port=3000;
app.listen(port,()=>{
    console.log(`The server is running on ${port}`);
});
