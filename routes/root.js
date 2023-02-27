const express = require('express')
const router = express.Router()
const path = require('path')

//^/$ means beginning (^) and ending ($) for the root or home folder
//Theres an or dividing to where it could be /index or /index.html
router.get('^/$|/index(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'));
})

module.exports = router;
//This makes the ./require/root able to access the actuall root.js