const express=require('express');
const exphbs=require('express-handlebars');
const path=require('path');
const controller=require('./controllers/index.js');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
app.engine(
  'hbs',
  exphbs({
    extname:'hbs',
    layoutDir: path.join(__dirname, 'views','layouts'),
    partialsDir:path.join(__dirname,'views','partials'),
    defaultLayout:'main'
    //helpers
  })
);
console.log(exphbs);

app.set('port', process.env.PORT|| 8080);
app.use(express.static(path.join(__dirname,'..','public')));
app.use(controller);

module.exports=app;
