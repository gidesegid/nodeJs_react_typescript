import express,{Application,Request,Response,NextFunction} from 'express'
import router from './routes/main';
import createError, { HttpError } from 'http-errors'
const app:Application=express()
app.use(express.json());
app.use((req:Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
app.use(router);
app.use((req:Request, res:Response, next:NextFunction)=> {
    return next(createError(404,"This page is not found"))
});
/*
on error
*/
app.use((err:HttpError, req:Request, res:Response, next:NextFunction)=> {
    const statusCode=err.statusCode || 500;
    res.status(err.statusCode || 500)
    res.send(
           `
           <html>
           <title>Error message  from Nodejs-react-typescript sample project</title>
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
                  <h3>Sorry, There is something wrong</h3>
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
/*
server running on port 5000
*/
app.listen(5000,()=>{
    console.log("Server is running")
})