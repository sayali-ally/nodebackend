const express=require('express');
const app=express();

// in-memory cache using map
const mp=new Map();

const checkCache = (req,res,next)=>{
    const cacheKey=req.originalUrl;
    const cachedData=mp.get(cacheKey);

    if(cachedData){
        console.log('cache hit!');
        res.send(cachedData);
    }
    else{
        console.log('cache miss!');
        next();
    }
};


app.get('/api/data',checkCache,(req,res)=>{
    setTimeout(()=>{
        const data={message:'Hello world'};
        const cacheKey=req.originalUrl;
        mp.set(cacheKey,data);
        res.send(data);
    },1000)
})

app.listen(3000);


const express=require('express');
const app=express();
const mp=new Map();

const checkcache=(req,res,next)=>{
    const cacheKey=req.originalUrl;
    const cacheData=mp.find(cacheKey);

    if(cacheData){
        console.log("cache hit");
        res.send(cacheData);
    }
    else{
        console.log('cache miss');
        next();
    }
}

app.get('api/data',checkCache,(req,res)=>{
    setTimeout(()=>{
        const data={message:'Hello world'};
        const cacheKey=req.originalUrl;
        mp.set(cacheKey,data);
        res.send(data);
    })
})
app.listen(3000);