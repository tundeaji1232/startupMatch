const express=require('express');
const expressHandler=require('express-handlebars');
const path=require('path');
const controller=require('./controllers/index.js');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view',path.join(__dirname,'view'));
app.set('view engine','hbs');
app.engine(
  'hbs',
  expressHandlebar({
    extname:'hbs',
    layoutDir: path.join(__dirname,'view','layout'),
    partialsDir:path.join(__dirname,'views','partials'),
    defaultLayout:'main'
    //helpers
  })
);




app.set('port', process.env.PORT|| 8080);
app.use(express/static(path.join(__dirname,'..','public')));
app.use(controller);

module.exports=app;
