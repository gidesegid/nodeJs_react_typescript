import express,{Application,Request,Response,NextFunction} from 'express'
import {default as data} from '../model/MOCK_DATA.json'
//
let someInfoOfUser=new Array()
//get data based on specific fields 
data.filter((user)=>{
    someInfoOfUser.push({id:user.id,email:user.email})
})
let controller={
    getAllUsers:(req:Request,res:Response)=>{
        try {
            res.json(someInfoOfUser)
          } catch (error) {
              res.json("Something went wrong")
          }
    },
    getDetail:(req:Request,res:Response)=>{
        let userId:string=req.params.id
        try {
            data.find((user:any)=>{
                if(user.id==userId){
                    res.json(user)
                }
            })
          } catch (error) {
              res.json("Something went wrong")
          }
    }
};
export default  controller;