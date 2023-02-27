const express = require('express');
const app = express()
const PORT = process.env.PORT || 3500;


//app.listen takes in arguments of port, hostname, backlog, and callback
//This .listen below takes in port and callback,
//callback specifies a function to be executed
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})
//Server is up and running