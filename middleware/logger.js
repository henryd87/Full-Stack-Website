const {format} = require('date-fns');
const {v4:uuid} = require('uuid');
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async(message,logFileName) =>{
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try{
        if(!fs.existsSync(path.join(__dirname,'..','logs'))){
            await fsPromises.mkdir(path.join(__dirname,'..','logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'..','logs',logFileName), logItem)
        //Join files, appending the logFileName as the file and logItem as the content
    }catch(err){
        console.log(err)
    }
}
const logger = (req,res,next)=>{
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`,'reqLog.log');
    //Write conditional statements to say only log if its not coming from our URL
    //Or only specific requests because this folder will get full
    console.log(`${req.method} ${req.path}`)
    next()
}
module.exports = {logger, logEvents};