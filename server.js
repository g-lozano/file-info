var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var fs = require('fs')
var upload = multer({ dest: 'uploads/' })
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/readfile', upload.single('file'), function(req, res) {

    var type = req.file.mimetype.split('/')[0]
    var ext = req.file.mimetype.split('/')[1]

    if (req.file) {
        fs.unlinkSync(req.file.path) //delete file
        res.json({
            size: req.file.size,
            type: type,
            ext: ext
        })
    }
    else
        res.json({ error: "No file was uploaded." })
})

app.get('*', function(req, res) {
    res.redirect('/')
})

app.listen(process.env.PORT)
