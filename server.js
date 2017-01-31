// to do: 
// define /readfile router
// css for button

// option: async upload

var express = require('express')
var bodyParser = require('body-parser')
var multer  = require('multer')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/readfile', function(req, res) {
    // return file size, file type?, etc.
    // handle no file sent
    res.send('analyzing file')
})

app.listen(process.env.PORT)