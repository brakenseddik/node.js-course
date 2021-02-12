const http=require('http');
const fs=require('fs');
const _ = require('lodash');

const server=http.createServer((req,res)=>{
//console.log(req.url,req.method);

//LOADASH  

const number=_.random(0,35);
console.log(number);

const greet=_.once(
    ()=>{
        console.log('hello')
    }
);



//set header content type
res.setHeader('Content-Type', 'text/html');


//default path
let path='./views/';

//routes
switch (req.url) {
    case '/':
        path+= 'index.html';
        res.statusCode = 200;
        break;
    case '/about':
            path+= 'about.html';
            break;
     case '/about-us':
        res.statusCode = 301;
        res.setHeader('Location', '/about');
        res.end();
        break;
    default:
        res.statusCode = 404;

        path+= '404.html';
        break;
}

//read html file
fs.readFile(path,(err,data)=>{
    if (err) {
        console.log(err);
        res.end;
    } else {
        res.end(data); 
    }
})


});

server.listen(3000,'localhost',()=>{

    console.log('listening on port 3000');

})