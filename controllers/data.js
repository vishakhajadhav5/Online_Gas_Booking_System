var express = require('express');
var path = require('path');
const app = express();
const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "VishakhaJ55@",
  database: "gas_info"
});
//admin can view all data 
exports.viewall = (req, res) => {
  /*db.query('select * from users_info ', (error, results) => {
    console.log(results);
    })
    */
   db.query('select * from users_info ',function(error,data,fields){
     console.log(data);
    /*if(error) throw error
    else
      {return res.redirect("../viewall", {
    userdata: data});
   } */
  })

  
}
//admin can view all user_complaints
exports.viewcomp = (req, res) => {
  db.query('select * from users_complaint ', (error, results) => {
    console.log(results);

  })
}

//admin can viewdelivery details
exports.viewdelivery = (req, res) => {
  db.query('select * from users_delivery ', (error, results) => {
    console.log(results);

  })
}