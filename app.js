const express =require('express');
const app=express();

//LISTEN FOR REQUESTS
app.listen(3000);

//ROUTING
app.get('/',(req,res)=>{
    //res.send('<h1>homepage</h1>')
    res.sendFile('./views/index.html',{root:__dirname})
});

app.get('/about',(req,res)=>{
    //res.send('<h1>homepage</h1>')
    res.sendFile('./views/about.html',{root:__dirname})
});

//REDIRECT
app.get('/aboutme',(req,res)=>{
    //res.send('<h1>homepage</h1>')
    res.redirect('about')
});


//404
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
});