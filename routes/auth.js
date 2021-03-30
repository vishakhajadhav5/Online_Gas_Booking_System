const express = require('express');
const authController= require('../controllers/auth');
const router = express.Router(); 

router.post('/register', authController.register );
router.post('/login', authController.login );
router.post('/contactus', authController.contactus );
router.post('/addgasconnection', authController.addgasconnection );

router.post('/addcustomerdealer', authController.addcustomerdealer );

//router.post('/adminhome',authController.adminhome);
//router.post('/viewall',authController.viewall);

module.exports=router;