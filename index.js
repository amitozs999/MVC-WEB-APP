var express=require('express');
var app=express();

var expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));

const cookieParser = require('cookie-parser');


app.use(express.urlencoded());

app.use(cookieParser());

var db = require('./config/mongoose');

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/',require('./routes'));


app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(8020,function(req,res){



});