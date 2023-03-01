const { ca } = require('date-fns/locale')
const allowedOrigins = require('./allowedOrigins')
const corsOptions = {
    origin:(origin,callback)=>{
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null,true)
            //Error object is first argument, second is allowed boolean
        }else{
            callback(new Error('Not allowed by CORS'))
        }
        //Allows postman and our approvaed hosts to fetch the rest API
    },
    credentials:true,
    optionsSuccessStatus:200
}
module.exports = corsOptions