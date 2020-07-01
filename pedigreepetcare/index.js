//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require ('path');
const ejs = require ("ejs");

const app = express();
const port = process.env.PORT || 8080;

const pathPublicDirectory = path.join(__dirname, './public');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(pathPublicDirectory));


app.get("/", function(req, res){
  // 
  res.render ('pedigree');
});



app.listen(port, function(){
  console.log(`Server listening on port: ${ port}`);
  console.log('Server listening on port: ' + port);
  console.log("Server listening on port: " + port);
});
