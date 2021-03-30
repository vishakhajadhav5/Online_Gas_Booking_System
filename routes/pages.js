const express = require('express');
const router = express.Router(); 


router.get('/',(req,res) => {
    res.render('index');
});
//contact us
router.get('/contactus',(req,res) => {
res.render('contactus');
    

});
//about
router.get('/about',(req,res) => {
    res.render('about');
        
    
});
//adminhome

router.get('/adminhome',(req,res) => {
    res.render('adminhome');
        
    
});
//customerhome
router.get('/customerhome',(req,res) => {
    res.render('customerhome');
        
    
});
//dealerhome dealerhome
router.get('/dealerhome',(req,res) => {
    res.render('dealerhome');
        
    
});
//viewaccess to customers
router.get('/viewaccess',(req,res) => {
    res.render('viewaccess');
});

router.get('/register',(req,res) => {
    res.render('register');
});
router.get('/login',(req,res) => {
    res.render('login');
    

});
//addgasconnection
router.get('/addgasconnection',(req,res) => {
    res.render('addgasconnection');
    

});

//addcustomerdealer from admin
router.get('/addcustomerdealer',(req,res) => {
    res.render('addcustomerdealer');
    

});
/*router.get('/viewall',(req,res) => {
    res.render('viewall');
    

});*/

/*router.get('/adminhome',(req,res) => {
    res.render('adminhome');
});    
*/


module.exports=router;