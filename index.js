const app=require('./app')
let arr=[4,1,6,3,4,89,0];
console.log(app.xyz())
const result =arr.filter((item)=>{
    return item>=4
});
console.warn(result);



const path=require('path');
const express = require('express');

const app=express();
const publicPath=path.join(__dirname,"public");
// console.log(publicPath);

app.use(express.static(publicPath));
app.listen(5000);




const publicPath=path.join(__dirname,"public");

