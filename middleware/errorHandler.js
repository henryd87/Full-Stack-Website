const {logEvents} = require('./logger')
//import logEvents function
const errorHandler = (err,req,res,next)=>{
    logEvents(`${err.name}: ${err.message}\t${req.method}
    \t${req.url}\t${req.headers.origin}`,'errLog.log');
    //calling the function with 2 aguments. First is the message, and the second
    //is where the filename should be named.
    console.log(err.stack) //large message that tells us where and what of an error.

    const status = res.statusCode ? res.statusCode : 500 //server error
    res.status(status)
    res.json({message:err.message})
}
module.exports = errorHandler