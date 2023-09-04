let a=20;
let b=0;
let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000);
});

console.log(a+b)

p.then(()=>{
    console.log(a+b);
})






