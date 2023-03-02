const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    roles:[{
        type:String,
        default:"Employee"
        //role is not assigned in front end when requets to create a user, will default
    }],
    active:{
        type:Boolean,
        default:true
    },
})

module.exports = mongoose.model('User',userSchema)