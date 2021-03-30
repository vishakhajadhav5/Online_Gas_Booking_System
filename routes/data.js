const express = require('express');
const authController= require('../controllers/data');
const router = express.Router(); 

///router.post('/register', authController.register );
//router.post('/login', authController.login );
//router.post('/adminhome',authController.adminhome);
router.post('/viewall',authController.viewall);
router.post('/viewcomp',authController.viewcomp);

router.post('/viewdelivery',authController.viewdelivery);
module.exports=router;