require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const path = require('path')
const morgan = require('morgan')
const validator = require('express-validator')
const validateFormat = require('./app/helpers/validate')

const helmet = require('helmet')


require('./app/database/mongodb')
const app = express()

app.use(bodyParser.json({
    limit: '100000mb'
}))
app.use(bodyParser.urlencoded({
    limit: '100000mb',
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(validator(validateFormat))
app.use(morgan('dev'))
app.use(cors())
app.use(helmet())

const port = process.env.PORT

const server = http.createServer(app)
app.jwt = require('./app/helpers/jwt')(app).validate

app.use((req, res, next) => {
    res.set('X-Powered-By', 'Pra que? ... : P')
    next()
})

require('./routes')(app)

app.use((req, res) => res.status(404).json([{
    title: '404', message: 'Route not found'
}]))

server.listen(port)

module.exports = app
