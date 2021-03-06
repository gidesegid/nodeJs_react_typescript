const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const controller=require('../controller/controller').controller
router.get('/',controller.getAllUsers)
router.get('/user/:id',controller.getDetail)
module.exports=router