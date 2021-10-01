/* if (process.env.NODE_ENV !== 'production') {
    require('dotenv')
} */

const express = require("express")
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

//import router into server
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

//Configure the express application
app.set('view engine', 'ejs') //set the view engine to ejs
app.set('views', __dirname + '/views') //set where the server-rendered views wil be coming from
app.set('layout', 'layouts/layout') //set what the layout file will be
app.use(expressLayouts) //tell express application to use express layouts
app.use(express.static('public')) //tell express where the public files are
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

//Connect to database
const mongoose = require('mongoose')

/* mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('CONNECTED TO MONGOOSE')) */

mongoose.connect("mongodb://127.0.0.1:27017/LibraryDB", {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("SUCCESSFUL CONNECTION WITH MONGODB");
});

//use the indexRouter at the root of our project
app.use('/', indexRouter)
app.use('/authors', authorRouter)

//listen on a certain port, either an environment variable, or default 3000
app.listen(process.env.PORT || 3000)
