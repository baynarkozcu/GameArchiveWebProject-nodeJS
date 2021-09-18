const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const homeRouter = require('./src/routers/homeRouter');
const detailRouter = require('./src/routers/detailRouter');

app.use('/fontawesome', express.static(__dirname + '/node_modules/font-awesome/'));


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressLayout);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));



app.use('/', homeRouter);
app.use('/home', homeRouter);
app.use('/detail', detailRouter);


app.listen('8001', ()=>{
    console.log("8000 Portu Başlatıldı.");
})

