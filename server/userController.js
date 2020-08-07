const express=require('express')

const router=express.Router();
const Service=require('./userService');

router.route('/login').post(Service.login)
router.route('/register').post(Service.register)

module.exports=router;