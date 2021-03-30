
var express=require('express');
var path=require('path');
const app=express();
const mysql=require("mysql");
const jwt=require('jsonwebtoken');
const bcrypt= require('bcryptjs');
var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"VishakhaJ55@",
    database:"gas_info"
  });

/*exports.adminhome = (req,res) =>{
    return res.redirect("adminhome");
}*/



//viewall code 
/*exports.viewall = async(req, res) => {
    db.query('select * from users_info ',(error,results)=>{
        console.log(results);

    })
}
*/

  //login code
exports.login = (req, res) => {
    try
    {
        const {email, password, Actor} = req.body;
        console.log("welcome");
        
        if(email == "admin" && password == "admin")
        {
            console.log(email);
            return res.redirect("../adminhome");
        }
        
        /*
        if(data.email=="admin" && data.password=="admin")
    {
        app.use(express.static('../views'))
        console.log("admin login");
        res.sendFile('/adminhome');

    }*/

        if(!email || !password)
        {
            return res.status(400).render('login',{
                message:'please provide email and password '
            })
        }
        
            db.query('select * from users_info where email = ?',[email], (error,results)=>{
                console.log("welcome||||");

                console.log(results);
                if(!results)
                {
                    res.status(401).render('login',{
                        message:'email or password is incorrect'
                    })
                }
                else{
                    if(Actor =="Customer")
                   { return res.redirect("../customerhome");
    
                    }
                    if(Actor =="Dealer")
                    {
                        return res.redirect("../dealerhome");
                    }
                }
    
            })
        }
       
    
    catch(error)
    {
        console.log(error);
    }

}
//users_complaint
exports.contactus=(req,res)=>{
    console.log(req.body);
    //res.send("Form submit!!!!");
    /*const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const area = req.body.area;
     const subject = req.body.subject;*/
    
    const{firstname, lastname, area,subject} = req.body;
    db.query('insert into users_complaint set ?',{firstname:firstname,lastname:lastname,
        area:area,subject:subject},(error,results)=>{
            if(err)
            {
                console.log("error : "+err);
            }
            else{
                console.log(results);
                return res.render('contactus',{               
                    message: 'Complaint Successfuly Submited!!!!!'});

            }

  });

}

//addgasconnection
exports.addgasconnection=(req,res)=>{
    console.log(req.body);
    //res.send("Form submit!!!!");
    /*const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const area = req.body.area;
     const subject = req.body.subject;*/
    
    const{connectiondate, nocylinder,totalcost} = req.body;
    db.query('insert into users_gasconnection set ?',{connectiondate:connectiondate,nocylinder:nocylinder,
        totalcost:totalcost},(err,results)=>{
            if(err)
            {
                console.log("error : "+err);
            }
            else{
                console.log(results);
                return res.render('addgasconnection',{               
                    message: 'Connection successful!!!!!'});

            }
        });
}

//addcustomerdealer from adminhomepage
exports.addcustomerdealer=(req,res)=>{

    console.log(req.body);
    //res.send("Form submit!!!!");
    /*const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const lastname = req.body.lastname;
    const actor = req.body.actor;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const permanentaddress = req.body.permanentaddress;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;*/
    
    const{firstname, middlename, lastname, actor, gender, phone, permanentaddress, email, password, cpassword} = req.body;
        db.query('Select email from users_info where email = ? ',[email],(err,results) => {            
                if(err) {
                  console.log("error: ", err);
                          }
                if(results.length > 0)
                {
                    return res.render('addcustomerdealer',{               
                         message: 'That email is already in use'
                })

                
                }
                else if( password != cpassword){
                    return res.render('addcustomerdealer',{               
                        message: 'Password do not match'
                    });

               
                }

               /* let hashePassword = await bcrypt.hash(password,8);
                console.log(hashePassword);*/



                db.query('insert into users_info set ?',{firstname:firstname,middlename:middlename,lastname:lastname,
                    actor:actor,gender:gender,phone:phone,permanentaddress:permanentaddress,email:email,password:password},(error,results)=>{
                        if(err)
                        {
                            console.log("error : "+err);
                        }
                        else{
                            console.log(results);
                            return res.render('addcustomerdealer',{               
                                message: 'Registration Successful!!!!!'});

                        }
            
              });
            




               
                
                    
                
                
            });   
    
        } 

//registration code  
exports.register=(req,res)=>{

    console.log(req.body);
    //res.send("Form submit!!!!");
    /*const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const lastname = req.body.lastname;
    const actor = req.body.actor;
    const gender = req.body.gender;
    const phone = req.body.phone;
    const permanentaddress = req.body.permanentaddress;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;*/
    
    const{firstname, middlename, lastname, actor, gender, phone, permanentaddress, email, password, cpassword} = req.body;
        db.query('Select email from users_info where email = ? ',[email],(err,results) => {            
                if(err) {
                  console.log("error: ", err);
                          }
                if(results.length > 0)
                {
                    return res.render('register',{               
                         message: 'That email is already in use'
                })

                
                }
                else if( password != cpassword){
                    return res.render('register',{               
                        message: 'Password do not match'
                    });

               
                }

               /* let hashePassword = await bcrypt.hash(password,8);
                console.log(hashePassword);*/



                db.query('insert into users_info set ?',{firstname:firstname,middlename:middlename,lastname:lastname,
                    actor:actor,gender:gender,phone:phone,permanentaddress:permanentaddress,email:email,password:password},(error,results)=>{
                        if(err)
                        {
                            console.log("error : "+err);
                        }
                        else{
                            console.log(results);
                            return res.render('register',{               
                                message: 'Registration Successful!!!!!'});

                        }
            
              });
            




               
                
                    
                
                
            });   
    
    


    
    
    
    //res.send("Form submitted");

}