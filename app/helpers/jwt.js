module.exports = (app) => {
    const jwt = require('jsonwebtoken')
    const key = process.env.TOKEN_SECRET
    const Errors = require('../errors/system/error')
    const Validate = require('./validate')
    const User = require('../modules/models/user')
    return {
        validate: (req, res, next) => {
            const token = req.headers['token']
            const query = {
                token: token
            }
            Validate.isToken(token, Errors.tokenRequired)
                .then(Validate.validateToken(Errors.tokenUser, jwt, key, Validate.isToken))
                .then(() => Validate.searchQuery(User, query))
                .then(Validate.isLogged(req, res, next, Errors.tokenUser))
                .catch(err => res.status(401).json([err]))
        }
    }
}
