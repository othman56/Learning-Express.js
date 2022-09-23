// we bring in our express module 
const express = require('express');
const path = require('path')
const members = require('./Members')
const logger = require('./middleware/logger')

// storing the express module in a variable
const app = express()

app.use(logger)

  
// creating a route for members
app.get('/api/members', (req,res) => 
    res.json(members))

// making our folder a static folder for easy rendering of pages
app.use(express.static(path.join(__dirname, 'public')))

// configuring our port
const PORT = process.env.PORT || 5000

// the port we want to use to listen for our server
app.listen(PORT, () => (console.log(`server started on ${PORT}`)))