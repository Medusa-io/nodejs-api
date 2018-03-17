const supertest = require('supertest')
const chai = require('chai')
const app = require('../app')
const requestAux = require('./functions/routeDefaults')
const objectUser = require('./objectCrud/user')

global.app = app
global.objectUser = objectUser
global.requestAux = requestAux
global.request = supertest(app)
global.expect = chai.expect