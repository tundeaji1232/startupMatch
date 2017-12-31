const express=require('express');
const router=express.Router();
const path=require('path');

const home=require('./home');
const login=require('./login');
const register=require('./register');

router.get('/',home.get);
router.get('/login',login.get);
router.get('/register',register.get);

module.exports=router;
