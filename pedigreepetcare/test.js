const express = require("express");
const bodyParser = require("body-parser");
const path = require ('path');
const hbs = require ("hbs");

const app = express();
const port = process.env.PORT || 8080;

const pathPublicDirectory = path.join(__dirname, './public');
const pathViews = path.join(__dirname, '/views');
const pathPartials = path.join(__dirname, '/partials');


app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(pathPublicDirectory));



app.set('views', pathViews);
hbs.registerPartials(pathPartials);


app.get("/", function(req, res){
  
  res.render ('test');
});



app.get("/about", function(req, res){
  
  res.render ('about');
});

app.get("/services", function(req, res){
  
  res.render ('services');
});

app.get("/testimonials", function(req, res){
  
  res.render ('testimonials');
});

app.get("/contact", function(req, res){
  
  res.render ('contact');
});

app.get("/terms", function(req, res){
  
  res.render ('terms');
});

app.get("/home", function(req, res){

  res.render ('test');
});

app.listen(port, function(){
  console.log(`Server listening on port: ${ port}`);
  
});