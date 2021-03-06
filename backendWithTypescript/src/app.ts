import express,{Application,Request,Response,NextFunction} from 'express'
import {default as data} from './MOCK_DATA.json'
let collectionOfUsers=new Array()
data.filter((user:any)=>{
    collectionOfUsers.push({id:user.id,email:user.email})
})
const app:Application=express()
app.use((req:Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
app.get('/',(req:Request,res:Response,next:NextFunction)=>{
    res.send(collectionOfUsers)
})
app.get('/user/:id',(req:Request,res:Response,next:NextFunction)=>{
    let userId:String=req.params.id
    data.find((user:any)=>{
        if(user.id==userId){
            res.send(user)
        }
    })
})
app.listen(5000,()=>{
    console.log("Server is running")
})