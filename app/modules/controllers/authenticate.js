module.exports = app => {
    const Errors = require('../../errors/system/error')
    const Validate = require('../../helpers/validate')
    const Help = require('../../helpers/authenticate')
    const User = require('../models/user')
    const Persistence = require('../../helpers/persistence')(User)
    const Business = require('../business/authenticate')(app)

    return {
        authenticate: Help.authenticate(User, Validate, Business, Errors),
        logout: (req, res) =>
            Persistence.update(res)({
                $and: [
                    {_id: req.user._id},
                    {email: req.user.email}
                ]
            })({token: null}),
        me: (req, res) => {
            Persistence.findOne(res)({
                $and: [
                    {_id: req.user._id},
                    {token: req.user.token}
                ]
            })
        }
    }
}
