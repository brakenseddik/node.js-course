const express =require('express');
const morgan =require('morgan');
const mongoose = require('mongoose');
const Blog=require('./models/blog')
const app=express();

const dburl='mongodb+srv://seddik:sadikdz1998@cluster0.a8v8s.mongodb.net/bloggey?retryWrites=true&w=majority';

mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
    app.listen(3000);
}).catch((error)=>{
    console.log(error);

});
//LISTEN FOR REQUESTS


//REGISTER VIEW ENGINE

app.set('view engine','ejs');

// PUBLIC STATIC FILES
app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/add-blog',(req,res,next)=>{
const blog=new Blog({
    title:'new blog 2',
    snippet:'about my blog 2',
    body:'more about my blog 2'
});

blog.save().then((result)=>{res.send(result)}).catch((err)=>{console.log(err)});
});

app.get('/all-blogs',
(req,res,next)=>{
  Blog.find().then((result)=>{res.send(result)}).catch((err)=>{console.log(err)});
    });

app.get('/single-blog', (req, res) => {
        Blog.findById('602d7d68a863b52664111d1e')
          .then(result => {
            res.send(result);
          })
          .catch(err => {
            console.log(err);
          });
      });

// app.use((req,res,next)=>{
// console.log('middleware 1');
// next();
// })

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