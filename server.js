const emoji = require('emoji.json')
const port= process.env.PORT || 1344
const express = require('express')
const request = require('request')
const app = express()
const path= require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })

  app.get('/emoji', function (req, res) {
        res.send(emoji)
})




    // data.map(i=> {
    // let user = new usersModel(i)
    // user.save() })



//     app.post('/add', (req, res) => {
//     const user = new usersModel(req.body)
//     user.save(() => res.json({ success: true }))
//     data.push(user)
// })

 

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/movies', { useNewUrlParser: true }).then(() => {
    app.listen(process.env.PORT || port, () => console.log(`Running server on port ${port}`))
})