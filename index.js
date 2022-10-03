// we bring in our express module 
const express = require('express');
const path = require('path')
const logger = require('./middleware/logger')
const app = express()

// initializing middleware
// app.use(logger)

// making our folder a static folder for easy rendering of pages
app.use(express.static(path.join(__dirname, 'public')))

// Body Paraer Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// member api routes
app.use('/api/members', require('./routes/api/members'))

// configuring our port
const PORT = process.env.PORT || 5000

// the port we want to use to listen for our server
app.listen(PORT, () => (console.log(`server started on ${PORT}`)))