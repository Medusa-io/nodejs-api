module.exports = app => {
    const Employee = require('../models/employee')
    const Persistence = require('../../helpers/persistence')(Employee)
    const Business = require('../business/user')(app)
    const Validate = require('../../helpers/validate')
    return {
        create: (req, res) => {
            const body = {}
            Validate.validateBody(req.body, 'name', 'password')(body)
            Business.create(body)
                .then(Persistence.create(res))
                .catch(err => res.status(500).json(err))
        },
        update: (req, res) => {
            const body = {}
            Validate.validateBody(req.body, 'name', 'password')(body)
            Business.update(body)
                .then(Persistence.update(res)(req.params))
                .catch(err => res.status(500).json(err))
        },
        listAll: (req, res) => Persistence.findAll(res)(req.params, req.body),
        listOne: (req, res) => Persistence.findOne(res)(req.params, req.body),
        delete: (req, res) => Persistence.remove(res)(req.params)
    }
}
