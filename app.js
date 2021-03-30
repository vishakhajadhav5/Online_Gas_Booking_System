const express=require('express');
const path=require('path');
const mysql=require("mysql");
const { waitForDebugger } = require('inspector');

const app=express();

var db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"VishakhaJ55@",
  database:"gas_info"
});

const publicDirectory= path.join(__dirname,'./public');
app.use(express.static(publicDirectory));


//parse URL-encoded bodies (as sent by html forms)
//grap data any form
app.use(express.urlencoded({extended:false}));
//parse JSON bodies(as sent by API clients)

app.use(express.json());

app.set('view engine','hbs');


// user_info table
/*
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users_info(uid int(10) AUTO_INCREMENT,firstname VARCHAR(20), middlename VARCHAR(20), lastname VARCHAR(20), actor VARCHAR(20),gender VARCHAR(20), phone VARCHAR(20), permanentaddress VARCHAR(100), email VARCHAR(50), password VARCHAR(20),PRIMARY KEY (`uid`))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
*/

//customer_complaint table
/*db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users_complaint(firstname VARCHAR(20), lastname VARCHAR(20), area VARCHAR(20),subject VARCHAR(100))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

*/
//customer_gasconnection table
/*db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "CREATE TABLE users_gasconnection(connectiondate DATE NOT NULL,nocylinder int(10),totalcost int(10))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/


//or create all tables directly

/*
db.connect(function(err) {
  //users_info
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS users_info(uid int(10) AUTO_INCREMENT,firstname VARCHAR(20), middlename VARCHAR(20), lastname VARCHAR(20), actor VARCHAR(20),gender VARCHAR(20), phone VARCHAR(20), permanentaddress VARCHAR(100), email VARCHAR(50), password VARCHAR(20),PRIMARY KEY (`uid`))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
  //customer_complaint table
  
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS users_complaint(firstname VARCHAR(20), lastname VARCHAR(20), area VARCHAR(20),subject VARCHAR(100),uid int(10) AUTO_INCREMENT, FOREIGN KEY(`uid`) REFERENCES users_info(`uid`))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
  //customer_gasconnection table
  if (err) throw err;
  console.log("Connected!");

  var sql = "CREATE TABLE IF NOT EXISTS users_gasconnection(connectiondate DATE NOT NULL,nocylinder int(10),totalcost int(10),uid int(10) AUTO_INCREMENT, FOREIGN KEY(`uid`) REFERENCES users_info(`uid`))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
//customer_delivary gas table
if (err) throw err;
  console.log("Connected!");

  var sql = "CREATE TABLE IF NOT EXISTS users_delivary(delivarydate DATE NOT NULL,approval VARCHAR(20),uid int(10) AUTO_INCREMENT, FOREIGN KEY(`uid`) REFERENCES users_info(`uid`))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });


});
*/
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));
app.use('/data',require('./routes/data'))

app.listen(2021);
console.log("Online Gas Booking system hosted on port number 2021");


/**** 
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "VishakhaJ55@",
  database: "gas"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users(uid int(10) AUTO_INCREMENT,firstname VARCHAR(20), middlename VARCHAR(20), lastname VARCHAR(20), actor VARCHAR(20),gender VARCHAR(20), phone VARCHAR(20), permanentaddress VARCHAR(100), email VARCHAR(50), password VARCHAR(20),PRIMARY KEY (`uid`))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

*/
