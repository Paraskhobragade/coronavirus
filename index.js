const express = require('express')
const  Novelcovid = require('novelcovid');
const exhbs = require('express-handlebars')

const track = new Novelcovid();

track.all()
.then((response) => console.log(response))

const app = express()
app.set('view engine', 'hbs');

app.engine('hbs',exhbs({
    extname: 'hbs',
    defaultView: 'home',
    layoutsDir: __dirname +'/views/layouts/'
}));

// Route
app.get('/countries',(req, res)=>{
    track.countries()
.then((response) => {

    res.render('home',{info:response})
})
})
app.listen(4000,()=>{
    console.log("App is listening on Port 4000")
})