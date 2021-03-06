const data=require('../model/MOCK_DATA.json')
let someInfoOfUser=[]
data.filter((user)=>{
    someInfoOfUser.push({id:user.id,email:user.email})
})
exports.controller={
    getAllUsers:(req,res)=>{
        try {
            res.json(someInfoOfUser)
          } catch (error) {
              res.json("Something went wrong")
          }
    },
    getDetail:(req,res)=>{
        let id=req.params.id;
        data.find((user)=>{
            if(user.id==id){
                res.json(user)
            }
        })
    }
}