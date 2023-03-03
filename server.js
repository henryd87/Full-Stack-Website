require('dotenv').config()
const express = require('express');
const app = express()
const {logger} = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const {logEvents} = require('./middleware/logger')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path'); //Path allows us to work with directories and fill paths
const PORT = process.env.PORT || 3500;


connectDB();
console.log(process.env.NODE_ENV)
app.use(logger)
app.use(cors(corsOptions)) //without cors, we don't allow any other websites to fetch our website.
//with cors, any website can fetch our website unless we make a whitelist
app.use(express.json())//allows to process data json, receive and parse json
app.use(cookieParser())
app.use('/',express.static(path.join(__dirname, '/public'))) //access to css also is middleware
//Middleware allows for fitering HTTp requests, authentication, etc.
app.use('/',require('./routes/root')) //joins server to the root page or index page
app.use('/users',require('./routes/userRoutes')) //'/users' is endpoint. if requets goes to that route, we go inside the userRoutes file
app.all("*",(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    } else if (req.accepts('json')){
        res.json({message:"404 not found"})
    }else{
        res.type('txt').send("404 not found")
    } //This basically says for anything else coming through, it sends a 404 status.
})

app.use(errorHandler)

mongoose.connection.once('open',()=>{
    console.log('connected to mongoDB')
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
})

mongoose.connection.on('error',err=>{
    console.log(err);
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
//we basically receive error number, code, system call and the error host name
//created new file called mongoErrLog.log