const mongoose = require('mongoose')
const AutoIncremenet = require('mongoose-sequence')(mongoose)
const noteSchema = new mongoose.Schema(
        {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User' //refer to the user schema
        },
        title:{
            type:String,
            required:true
        },
        text:{
            type: String,
            required:true
        },
        completed:{
            type:Boolean,
            default:false //when we create a new note, it will not be completed
        },
    },
    {
        timestamps:true
    }
)

noteSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id:'ticket-nums',
    start_seq:500
}
)

module.exports = mongoose.model('Note',noteSchema)