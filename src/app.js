const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const employeeRoute = require ('./route/employeeroute')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//http://localhost:3000/uploads/beagle.jpg
app.use('/uploads', express.static('uploads'))

app.use('/api/employee', employeeRoute)

module.exports = app