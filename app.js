const express =require('express');
const app=express();

//LISTEN FOR REQUESTS
app.listen(3000);

//REGISTER VIEW ENGINE

app.set('view engine','ejs');

//ROUTING
app.get('/',(req,res)=>{
    //res.send('<h1>homepage</h1>')
    //res.sendFile('./views/index.html',{root:__dirname})
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title:'',blogs});
});

app.get('/about',(req,res)=>{
    //res.send('<h1>homepage</h1>')
   // res.sendFile('./views/about.html',{root:__dirname});
    res.render('about',{title:''});

});

app.get('/blogs/create',(req,res)=>{

    res.render('create',{title:''});

});

//REDIRECT
app.get('/aboutme',(req,res)=>{
    //res.send('<h1>homepage</h1>')
    res.redirect('about')
});


//404
app.use((req,res)=>{
    //res.status(404).sendFile('./views/404.html',{root:__dirname})
    res.status(404).render('404',{title:''});
});