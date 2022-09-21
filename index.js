// we bring in our express module
const express = require('express');

// storing the express function in a variable
const app = express()

// using a get request to specify routes
app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>')
})

// configuring our port
const PORT = process.env.PORT || 5000

// the port we want to use to listen for our server
app.listen(PORT, () => (console.log(`server started on ${PORT}`)))