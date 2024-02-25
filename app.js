const express = require('express');
const app     = express();
const debug   = require('debug')('app');
const chalk   = require('chalk');
const hbs     = require('hbs');
const path    = require('path');

const register  = require('./routers/register');

app.set('view engine', 'hbs');
app.set("views","./views");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"./public/")));



app.get('/',(req,res)=>{
    res.render('home');
});

app.use('/Register',register);

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    debug('On port: '+chalk.blue(port));  
}) 


