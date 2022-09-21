// we bring in our express module 
const express = require('express');
// we also want to be able to render a file so we bring in our path module
const path = require('path')

// storing the express function in a variable
const app = express()

// using a get request to specify routes
// app.get('/', (req,res) => {
//     // instead of this
//     // res.send('<h1>Hello World</h1>')
//     // we use the res.sendfile method
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// making our folder a static folder for easy rendering of pages
app.use(express.static(path.join(__dirname, 'public')))

// configuring our port
const PORT = process.env.PORT || 5000

// the port we want to use to listen for our server
app.listen(PORT, () => (console.log(`server started on ${PORT}`)))