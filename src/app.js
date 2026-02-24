// Creating a Server 

const express = require('express')

const app = express()
app.use(express.json())

const notes = []

/* title , description */


app.post('/notes', (req, res) => {
 console.log(req.body);
   
    
}
)


module.exports = app;