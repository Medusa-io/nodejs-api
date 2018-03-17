const supertest = require('supertest')
const chai = require('chai')
const app = require('../app')
const requestAux = require('./functions/routeDefaults')
const objectUser = require('./objectCrud/user')
const objectAuthorization = require('./objectCrud/authorization')

global.app = app
global.objectUser = objectUser
global.objectAuthorization = objectAuthorization
global.requestAux = requestAux
global.request = supertest(app)
global.expect = chai.expect