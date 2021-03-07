import express,{Application,Request,Response,NextFunction} from 'express'
import router from './routes/main';
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
app.listen(5000,()=>{
    console.log("Server is running")
})