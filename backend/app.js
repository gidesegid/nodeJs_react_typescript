const express=require('express')
const app=express()
require('dotenv/config');
const router=require('./routes/main');
const bodyParser = require('body-parser');
const createError=require('http-errors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',router)
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use((req, res, next)=> {
    return next(createError(404,"Page not found"))
});
app.use((err, req, res, next)=> {
    const statusCode=err.statusCode || 500;
    res.status(err.statusCode || 500)
    res.send(
           `
           <html>
           <title>Error message  from server</title>
           <header>
           <style>
           .errorPage{
                  margin-top:100px;
                  margin-left:100px;
                  margin-right:30px;
                  margin-bottom:30px;
           }
           </style>
           </header>
           <body>
             <div class="errorPage">
                  <h3>Sorry, This page may not be available</h3>
                  <p>${err.message}</p>
                  <p>Status code:${err.status}</p>
                  <div>
                  <button onClick="backToHomePage()">Back</button>
              </div>
             </div>
           <script>
            function backToHomePage(){
                   window.location.href="/"
            }
           </script>
           </body>
           </html>
           `
           )
});
app.listen(process.env.ServerPort,function(){
    console.log('The server  is runninggggg on port',process.env.ServerPort);
});